type Status =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

const steps: Status[] = [
  "pending",
  "confirmed",
  "shipped",
  "delivered",
];

export function OrderTimeline({ status }: { status: Status }) {
  return (
    <div className="flex items-center justify-between my-8">
      {steps.map((step, index) => {
        const isDone =
          steps.indexOf(status) >= index &&
          status !== "cancelled";

        return (
          <div key={step} className="flex-1 text-center">
            <div
              className={`mx-auto h-4 w-4 rounded-full ${
                isDone ? "bg-forest" : "bg-muted"
              }`}
            />
            <p className="text-xs mt-2 capitalize">{step}</p>
          </div>
        );
      })}
    </div>
  );
}
