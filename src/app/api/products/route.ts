import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const GET = async (req: Request, res: Response) => {
  try {
    const products = await stripe.products.list();
    const prices = await stripe.prices.list({ active: true }); // Filter active prices

    // Combine product and price information
    const productsWithPrices = products.data.map((product) => {
      const matchingPrice = prices.data.find(
        (price) => price.product === product.id,
      );
      return {
        ...product,
        price: matchingPrice?.unit_amount, // Price if available, otherwise undefined
        currency: matchingPrice?.currency, // Currency if available, otherwise undefined
      };
    });

    return NextResponse.json(productsWithPrices);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to retrieve products" });
  }
};
