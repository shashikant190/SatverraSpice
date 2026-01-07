import Link from "next/link";
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              🌿 Satverra Spice Co.
            </h3>
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
              Bringing farm-fresh, 100% pure spices from India’s finest farms to
              your kitchen. No additives, no chemicals — just pure goodness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product/turmeric"
                  className="hover:text-secondary text-sm"
                >
                  Turmeric Powder
                </Link>
              </li>
              <li>
                <Link
                  href="/product/chilli"
                  className="hover:text-secondary text-sm"
                >
                  Chilli Powder
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-secondary text-sm"
                >
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+7559372735">+91 75593 72735</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/7559372735"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>
                  Farm Fresh Spices,
                  <br />
                  Kerala, India 682001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="flex items-center justify-center gap-1 text-sm">
            Made with <Heart size={14} className="text-accent fill-accent" /> in
            India
          </p>
          <p className="text-xs opacity-60 mt-1">
            © 2024 Satverra Spice Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
