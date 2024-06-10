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

const isProduction = process.env.NODE_ENV === "production";

export const ENV_KEYS = {
  STRIPE_PUBLIC_KEY: isProduction
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_PROD
    : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_DEV,
  STRIPE_PRIVATE_KEY: isProduction
    ? process.env.STRIPE_SECRET_KEY_PROD
    : process.env.STRIPE_SECRET_KEY_DEV,
} as const;

export const stripe = new Stripe(ENV_KEYS.STRIPE_PRIVATE_KEY!);
