"use client";

import { useState } from "react";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";
import Link from "next/link";

export default function InterferenceSpreadPage() {
  const image =
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-two/ts-w2.png?updatedAt=1775152147314";

  const product = {
    id: "interference-spread",
    name: "The Interference Spread",
    price: 5.55,
  };

  const [added, setAdded] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [buyingNow, setBuyingNow] = useState(false);

  const addToCart = () => {
    const existingCart = localStorage.getItem("wicked-cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const existingItem = cart.find(
      (item: { id: string }) => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    localStorage.setItem("wicked-cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = async () => {
    try {
      setBuyingNow(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [
            {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
            },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to start checkout");
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("No checkout URL returned");
    } catch (error) {
      console.error("Buy Now error:", error);
      alert("Unable to start checkout right now.");
      setBuyingNow(false);
    }
  };

  return (
    <>
      <LimitedHeader />

      <SectionPage
        title="The Interference Spread"
        subtitle="See what keeps disrupting the natural unfoldment"
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <img
              src={image}
              alt="The Interference Spread"
              onClick={() => setViewerOpen(true)}
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "block",
                transform: "translateY(6px)", // ✅ FIX
              }}
            />
          </div>

          {/* DESCRIPTION */}
          <div
            style={{
              width: "100%",
              maxWidth: "620px",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <p className="grimoire-subheading">Week Two: Alignment</p>

            <p className="grimoire-text">
              Some things were already working until interference entered the
              process. Overthinking, checking, forcing, doubt, fear, and control
              can distort what might have unfolded cleanly on its own.
            </p>

            <p className="grimoire-text">
              This spread helps you identify where the disruption is happening,
              what is feeding it, and how your own energy may be interrupting
              the movement you want to receive.
            </p>
          </div>

          {/* PRICE */}
          <div
            style={{
              margin: "2rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
              }}
            >
              $5.55
            </p>
          </div>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.85rem",
              marginBottom: "1rem",
            }}
          >
            <button
              className="grimoire-text"
              style={{
                border: "1px solid white",
                padding: "0.75rem 1.5rem",
                background: "black",
                color: "white",
                width: "180px",
                cursor: "pointer",
              }}
              onClick={addToCart}
            >
              {added ? "Added!" : "Add to Cart"}
            </button>

            <button
              className="grimoire-text"
              style={{
                border: "1px solid white",
                padding: "0.75rem 1.5rem",
                background: "black",
                color: "white",
                width: "180px",
                cursor: buyingNow ? "default" : "pointer",
                opacity: buyingNow ? 0.7 : 1,
              }}
              onClick={handleBuyNow}
              disabled={buyingNow}
            >
              {buyingNow ? "Redirecting..." : "Buy Now"}
            </button>
          </div>
        </section>

        {viewerOpen && (
          <div
            onClick={() => setViewerOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <button
              onClick={() => setViewerOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <img
              src={image}
              alt="The Interference Spread enlarged preview"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "6px",
              }}
            />
          </div>
        )}

        <footer className="grimoire-footer">
          <p>
            <Link
              href="/wicked-shops/wicked-tarot-spreads"
              className="grimoire-footer-link"
            >
              ← Back to Tarot Spreads
            </Link>
          </p>

          <p>
            <Link href="/wicked-shops" className="grimoire-footer-link">
              ← Back to Wicked Shops
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}