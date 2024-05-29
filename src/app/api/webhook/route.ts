import { stripe } from "@/lib/constants";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const response = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature");
  const dateTime = new Date(response?.created * 1000).toLocaleDateString;
  const timeString = new Date(response?.created * 1000).toLocaleTimeString;

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    console.log("Event", event.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created
    // case 'charge.failed':
    //   const chargeFailed = event.data.object;
    //   // Then define and call a function to handle the event charge.failed
    //   break;
    // case 'charge.pending':
    //   const chargePending = event.data.object;
    //   // Then define and call a function to handle the event charge.pending
    //   break;
    // case 'charge.refunded':
    //   const chargeRefunded = event.data.object;
    //   // Then define and call a function to handle the event charge.refunded
    //   break;
    // case 'charge.succeeded':
    //   const chargeSucceeded = event.data.object;
    //   // Then define and call a function to handle the event charge.succeeded
    //   break;
    // case 'payment_intent.created':
    //   const paymentIntentCreated = event.data.object;
    //   // Then define and call a function to handle the event payment_intent.created
    //   break;
    // case 'payment_intent.succeeded':
    //   const paymentIntentSucceeded = event.data.object;
    //   // Then define and call a function to handle the event payment_intent.succeeded
    //   break;

    // TODO: Create function here that sends all needed user data to store in DB

    return NextResponse.json({ status: "Success", event: event.type });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
