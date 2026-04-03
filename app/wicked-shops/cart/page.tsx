// app/wicked-shops/cart/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LimitedHeader from "../../../components/shops/LimitedHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isSuccess = params.get("success") === "true";
    const sessionId = params.get("session_id");

    const handleSuccess = async () => {
      if (isSuccess && sessionId) {
        try {
          await fetch("/api/send-products", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId }),
          });
        } catch (error) {
          console.error("Send products error:", error);
        }

        localStorage.removeItem("wicked-cart");
        setCart([]);
        setSuccess(true);
        return;
      }

      const savedCart = localStorage.getItem("wicked-cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    handleSuccess();
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("wicked-cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  const changeQuantity = (id: string, amount: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );

    updateCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <LimitedHeader />

      <SectionPage title="Cart" subtitle="">
        {success ? (
          <section className="grimoire-section">
            <p className="grimoire-subheading">Payment Received</p>

            <p className="grimoire-text">Your order was successful.</p>

            <p className="grimoire-text">
              Your guide has been sent to your email.
            </p>

            <footer className="grimoire-footer">
              <p>
                <Link href="/wicked-shops" className="grimoire-footer-link">
                  ← Back to Wicked Shops
                </Link>
              </p>
            </footer>
          </section>
        ) : cart.length === 0 ? (
          <section className="grimoire-section">
            <p className="grimoire-text">Your cart is currently empty.</p>

            <footer className="grimoire-footer">
              <p>
                <Link href="/wicked-shops" className="grimoire-footer-link">
                  ← Back to Wicked Shops
                </Link>
              </p>
            </footer>
          </section>
        ) : (
          <>
            <section className="grimoire-section">
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "3rem" }}>
                  <p className="grimoire-subheading">{item.name}</p>

                  <p className="grimoire-text">
                    ${item.price.toFixed(2)} each
                  </p>

                  <p className="grimoire-text">Quantity: {item.quantity}</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="grimoire-text"
                      style={{
                        border: "1px solid white",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        background: "black",
                        color: "white",
                      }}
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      −
                    </button>

                    <button
                      className="grimoire-text"
                      style={{
                        border: "1px solid white",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        background: "black",
                        color: "white",
                      }}
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>

                    <button
                      className="grimoire-text"
                      style={{
                        border: "1px solid white",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                        background: "black",
                        color: "white",
                      }}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grimoire-divider" />
                </div>
              ))}
            </section>

            <section className="grimoire-section">
              <p className="grimoire-subheading">
                Subtotal: $
                {subtotal.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>

              <button
                className="grimoire-text"
                style={{
                  marginTop: "1.5rem",
                  border: "1px solid white",
                  padding: "0.75rem 1.5rem",
                  cursor: "pointer",
                  background: "black",
                  color: "white",
                }}
                onClick={async () => {
                  try {
                    const response = await fetch("/api/checkout", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ cart }),
                    });

                    const data = await response.json();

                    if (data.url) {
                      window.location.href = data.url;
                    } else {
                      alert("Checkout failed.");
                    }
                  } catch (error) {
                    console.error("Checkout error:", error);
                    alert("Something went wrong.");
                  }
                }}
              >
                Proceed to Checkout
              </button>
            </section>

            <footer className="grimoire-footer">
              <p>
                <Link href="/wicked-shops" className="grimoire-footer-link">
                  ← Back to Wicked Shops
                </Link>
              </p>
            </footer>
          </>
        )}
      </SectionPage>
    </>
  );
}