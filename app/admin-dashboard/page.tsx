"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  LogOut,
  Package,
  Users,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";

/* ================= TYPES ================= */

type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

interface Order {
  id: string;
  order_number: string;
  status: OrderStatus;
  total_amount: number;
  createdAt: string;
  address: string | null;
  city: string | null;
  pincode: string | null;
  customer: {
    full_name: string;
    mobile: string;
    email: string | null;
  };
  items: {
    product_name: string;
    quantity: number;
    price: number;
  }[];
}

interface Customer {
  id: string;
  full_name: string;
  mobile: string;
  email?: string | null;
  order_count: number;
  total_spent: number;
  orders: {
    id: string;
    order_number: string;
    createdAt: string;
    status: OrderStatus;
    total_amount: number;
    items: {
      product_name: string;
      quantity: number;
      price: number;
    }[];
  }[];
}


interface Analytics {
  totalOrders: number;
  totalRevenue: number;

  pendingOrders: number;
  confirmedOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;

  statusBreakdown: {
    pending: number;
    confirmed: number;
    shipped: number;
    delivered: number;
    cancelled: number;
  };

  topProducts: {
    name: string;
    count: number;
  }[];
}


/* ================= STYLES ================= */

const statusColors: Record<OrderStatus, string> = {
  pending: "bg-mustard text-forest",
  confirmed: "bg-forest/20 text-forest",
  shipped: "bg-turmeric text-forest",
  delivered: "bg-forest text-cream",
  cancelled: "bg-brick text-cream",
};

const STATUS_TABS: (OrderStatus | "all")[] = [
  "all",
  "pending",
  "confirmed",
  "shipped",
  "delivered",
  "cancelled",
];

/* ================= COMPONENT ================= */

export default function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();

  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [orderFilter, setOrderFilter] = useState<
    "all" | OrderStatus
  >("all");

  /* ================= FETCH ================= */

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [o, c, a] = await Promise.all([
        fetch("/api/orders", { credentials: "include" }),
        fetch("/api/customers", { credentials: "include" }),
        fetch("/api/analytics", { credentials: "include" }),
      ]);

      if ([o, c, a].some((r) => r.status === 401)) {
        throw new Error("Unauthorized");
      }

      setOrders(await o.json());
      setCustomers(await c.json());
      setAnalytics(await a.json());
    } catch {
      router.replace("/admin-login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  /* ================= FILTERED ORDERS ================= */

  const filteredOrders =
    orderFilter === "all"
      ? orders
      : orders.filter((o) => o.status === orderFilter);

      const orderCounts = {
  all: orders.length,
  pending: orders.filter(o => o.status === "pending").length,
  confirmed: orders.filter(o => o.status === "confirmed").length,
  shipped: orders.filter(o => o.status === "shipped").length,
  delivered: orders.filter(o => o.status === "delivered").length,
  cancelled: orders.filter(o => o.status === "cancelled").length,
};


  /* ================= ACTIONS ================= */

  const updateOrderStatus = async (
    id: string,
    status: OrderStatus
  ) => {
    setUpdatingId(id);

    const res = await fetch(`/api/orders/admin/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ status }),
    });

    setUpdatingId(null);

    if (!res.ok) {
      toast({
        title: "Failed",
        description: "Unable to update order",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order updated",
      description: `Status changed to ${status}`,
    });

    fetchAll();
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin-login");
  };

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-forest/20 border-t-forest animate-spin" />
          <p className="font-display animate-pulse">
            Loading admin dashboard…
          </p>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-cream">
      {/* HEADER */}
      <header className="bg-forest text-cream p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-display text-2xl">🌿 Spice Admin</h1>
          <div className="flex gap-2">
            <Button size="sm" onClick={fetchAll}>
              <RefreshCw size={16} /> Refresh
            </Button>
            <Button size="sm" variant="destructive" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="orders">
          <TabsList className="mb-4">
            <TabsTrigger value="orders">
              <Package size={16} /> Orders
            </TabsTrigger>
            <TabsTrigger value="customers">
              <Users size={16} /> Customers
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp size={16} /> Analytics
            </TabsTrigger>
          </TabsList>

          {/* ================= ORDERS ================= */}
          <TabsContent value="orders">
            {/* ORDER STATUS FILTER */}
            <div className="flex gap-2 flex-wrap mb-4">
              {STATUS_TABS.map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={orderFilter === s ? "default" : "outline"}
                  onClick={() => setOrderFilter(s)}
                >
                  {s === "all"
  ? `All Orders (${orderCounts.all})`
  : `${s} (${orderCounts[s]})`}

                </Button>
              ))}
            </div>

            {filteredOrders.length === 0 && (
              <p className="text-center text-muted-foreground py-10">
                No orders found
              </p>
            )}

            <div className="space-y-4">
              {filteredOrders.map((o) => (
                <Card key={o.id}>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-bold">
                          #{o.order_number}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(o.createdAt), "PPP p")}
                        </p>
                      </div>
                      <Badge className={statusColors[o.status]}>
                        {o.status}
                      </Badge>
                    </div>

                    <div className="text-sm">
                      <p><strong>Name:</strong> {o.customer.full_name}</p>
                      <p><strong>Mobile:</strong> {o.customer.mobile}</p>
                      <p><strong>Email:</strong> {o.customer.email || "—"}</p>
                    </div>

                    <div className="text-sm">
                      <strong>Address:</strong>{" "}
                      {o.address
                        ? `${o.address}, ${o.city} – ${o.pincode}`
                        : "—"}
                    </div>

                    <ul className="list-disc ml-5 text-sm">
                      {o.items.map((i, idx) => (
                        <li key={idx}>
                          {i.product_name} × {i.quantity} (₹{i.price})
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2 flex-wrap">
                      {["pending", "confirmed", "shipped", "delivered"].map(
                        (s) => (
                          <Button
                            key={s}
                            size="sm"
                            variant={o.status === s ? "default" : "outline"}
                            loading={updatingId === o.id}
                            disabled={
                              o.status === s ||
                              o.status === "cancelled" ||
                              updatingId !== null
                            }
                            onClick={() =>
                              updateOrderStatus(o.id, s as OrderStatus)
                            }
                          >
                            {s}
                          </Button>
                        )
                      )}
                    </div>

                    <p className="text-right font-semibold text-turmeric">
                      ₹{o.total_amount.toFixed(2)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ================= CUSTOMERS ================= */}
         <TabsContent value="customers">
  <div className="space-y-4">
    {customers.map((c) => (
      <Card key={c.id}>
        <CardContent className="p-4 space-y-3">
          {/* CUSTOMER HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-display font-bold text-lg">
                {c.full_name}
              </p>
              <p className="text-sm text-muted-foreground">
                {c.mobile}
              </p>
              {c.email && (
                <p className="text-xs text-muted-foreground">
                  {c.email}
                </p>
              )}
            </div>

            <div className="text-right">
              <p className="text-sm">
                {c.order_count} orders
              </p>
              <p className="text-turmeric font-semibold">
                ₹{c.total_spent.toFixed(2)}
              </p>
            </div>
          </div>

          {/* ORDER HISTORY */}
          <div className="border-t pt-3 space-y-3">
            {c.orders.map((o) => (
              <div
                key={o.id}
                className="rounded-md bg-paper p-3 text-sm"
              >
                <div className="flex justify-between">
                  <p className="font-semibold">
                    #{o.order_number}
                  </p>
                  <Badge className={statusColors[o.status]}>
                    {o.status}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground">
                  {format(new Date(o.createdAt), "PPP p")}
                </p>

                <ul className="list-disc ml-5 mt-2">
                  {o.items.map((i, idx) => (
                    <li key={idx}>
                      {i.product_name} × {i.quantity}
                    </li>
                  ))}
                </ul>

                <p className="text-right font-semibold mt-2">
                  ₹{o.total_amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>


          {/* ================= ANALYTICS ================= */}
{/* ================= ANALYTICS ================= */}
<TabsContent value="analytics">
  <div className="grid gap-4 md:grid-cols-4">

    {/* KPI CARDS */}
    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Total Orders</p>
        <p className="text-2xl font-bold">
          {analytics?.totalOrders}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Total Revenue</p>
        <p className="text-2xl font-bold text-turmeric">
          ₹{analytics?.totalRevenue}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Pending Orders</p>
        <p className="text-2xl font-bold">
          {analytics?.pendingOrders}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Confirmed Orders</p>
        <p className="text-2xl font-bold">
          {analytics?.confirmedOrders}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Shipped Orders</p>
        <p className="text-2xl font-bold">
          {analytics?.shippedOrders}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Delivered Orders</p>
        <p className="text-2xl font-bold text-forest">
          {analytics?.deliveredOrders}
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">Cancelled Orders</p>
        <p className="text-2xl font-bold text-brick">
          {analytics?.cancelledOrders}
        </p>
      </CardContent>
    </Card>
  </div>

  {/* STATUS BREAKDOWN */}
  <div className="mt-6">
    <h3 className="font-display text-lg mb-3">
      Order Status Breakdown
    </h3>

    <div className="grid gap-3 md:grid-cols-5">
      {analytics &&
        Object.entries(analytics.statusBreakdown).map(
          ([status, count]) => (
            <Card key={status}>
              <CardContent className="p-4 text-center">
                <p className="capitalize text-sm text-muted-foreground">
                  {status}
                </p>
                <p className="text-xl font-bold">
                  {count}
                </p>
              </CardContent>
            </Card>
          )
        )}
    </div>
  </div>

  {/* TOP PRODUCTS */}
  <div className="mt-6">
    <h3 className="font-display text-lg mb-3">
      Top Selling Products
    </h3>

    <Card>
      <CardContent className="p-4 space-y-2">
        {analytics?.topProducts?.length === 0 && (
          <p className="text-muted-foreground">
            No product data yet
          </p>
        )}

        {analytics?.topProducts?.map(
          (p: { name: string; count: number }) => (
            <div
              key={p.name}
              className="flex justify-between text-sm"
            >
              <span className="capitalize">
                {p.name}
              </span>
              <span className="font-semibold">
                {p.count} sold
              </span>
            </div>
          )
        )}
      </CardContent>
    </Card>
  </div>
</TabsContent>

        </Tabs>
      </main>
    </div>
  );
}
