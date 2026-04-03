"use client";

import { useState } from "react";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";
import Link from "next/link";

export default function SequenceAwarenessPracticePage() {
  const images = [
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-four/tkw4-cover.png?updatedAt=1775151337719",
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-four/tkw4-2.jpg?updatedAt=1775108886060",
  ];

  const product = {
    id: "sequence-awareness",
    name: "The Sequence Awareness Practice",
    price: 11,
  };

  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [buyingNow, setBuyingNow] = useState(false);

  const nextImage = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
        title="The Sequence Awareness Practice"
        subtitle="See the Process While It&apos;s Happening"
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <button
                onClick={prevImage}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              >
                ←
              </button>

              <img
                src={images[active]}
                alt="The Sequence Awareness Practice"
                onClick={() => setViewerOpen(true)}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              />

              <button
                onClick={nextImage}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* DOTS */}
          <div style={{ marginTop: "1rem" }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  margin: "0 0.4rem",
                  cursor: "pointer",
                  opacity: active === i ? 1 : 0.3,
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "1.2rem",
                }}
              >
                {active === i ? "●" : "○"}
              </button>
            ))}
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
            <p className="grimoire-subheading">
              Week Four: Awareness
            </p>

            <p className="grimoire-text">
              Most people only notice the outcome. They see the result, react to
              the event, and miss the chain that led there. By the time they
              recognize what happened, the pattern has already completed itself.
            </p>

            <p className="grimoire-text">
              This toolkit trains you to see the sequence in motion so you can
              recognize the build, catch the shift, and understand the process
              before it finishes writing the result.
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
              $11
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
            <img
              src={images[active]}
              alt="Preview"
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
              href="/wicked-shops/wicked-toolkits"
              className="grimoire-footer-link"
            >
              ← Back to Toolkits
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