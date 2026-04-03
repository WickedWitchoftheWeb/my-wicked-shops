import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty or invalid" },
        { status: 400 }
      );
    }

    const normalizedCart = (cart as CartItem[]).map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const line_items = normalizedCart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.id,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items,
      success_url:
        "https://www.thewickedwitchoftheweb.net/wicked-shops/cart?success=true&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:
        "https://www.thewickedwitchoftheweb.net/wicked-shops/cart?canceled=true",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create checkout session",
      },
      { status: 500 }
    );
  }
}