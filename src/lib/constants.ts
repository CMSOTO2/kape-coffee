import Stripe from "stripe";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
