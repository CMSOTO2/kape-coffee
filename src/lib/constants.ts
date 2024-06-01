import Stripe from "stripe";

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CHECKOUT_SUCCESS: "/checkout/success",
  CHECKOUT_ERROR: "/checkout/error",
  OUR_STORY: "/our-story",
} as const;

export const navLinks = [
  { label: "Home", href: routes.HOME },
  { label: "About", href: routes.ABOUT },
  { label: "Contact", href: routes.CONTACT },
] as const;

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
