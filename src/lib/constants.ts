import Stripe from "stripe";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CHECKOUT_SUCCESS: "/checkout/success",
  CHECKOUT_ERROR: "/checkout/error",
  OUR_STORY: "/our-story",
  MENU: "/menu",
} as const;

export const navLinks = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
  { label: "Menu", href: ROUTES.MENU },
] as const;

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
