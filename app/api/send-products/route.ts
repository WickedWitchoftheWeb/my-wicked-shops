import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";
import { sendGuideEmail } from "../../../lib/email";

type PurchasedItem = {
  id: string;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing session ID" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const customerEmail = session.customer_details?.email;

    if (!customerEmail) {
      return NextResponse.json(
        { error: "No customer email found" },
        { status: 400 }
      );
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    const purchasedItems: PurchasedItem[] = lineItems.data
      .map((item) => ({
        id: item.description || "",
        quantity: item.quantity || 1,
      }))
      .filter((item) => item.id);

    if (purchasedItems.length === 0) {
      return NextResponse.json(
        { error: "No valid purchased items found" },
        { status: 400 }
      );
    }

    await sendGuideEmail(customerEmail, purchasedItems);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send guide error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to send guide email",
      },
      { status: 500 }
    );
  }
}