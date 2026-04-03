// app/wicked-shops/wicked-guides/law-of-attraction/stability-principle/page.tsx
"use client";

import { useState } from "react";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";
import Link from "next/link";

export default function StabilityPrinciplePage() {
  const images = [
    "https://ik.imagekit.io/w1ck3d/shops/stability-principle/sp-cover.png",
    "https://ik.imagekit.io/w1ck3d/shops/stability-principle/sp-2.jpg",
    "https://ik.imagekit.io/w1ck3d/shops/stability-principle/sp-3.jpg",
  ];

  const product = {
    id: "stability-principle",
    name: "The Stability Principle",
    price: 44,
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
        title="The Stability Principle"
        subtitle="How to Stop Resetting Your Life Every Week"
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
              transform: "translateY(6px)",
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
                aria-label="Previous image"
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                  padding: 0,
                  opacity: 0.85,
                  lineHeight: "1",
                }}
              >
                ←
              </button>

              <img
                src={images[active]}
                alt="The Stability Principle"
                onClick={() => setViewerOpen(true)}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "block",
                }}
              />

              <button
                onClick={nextImage}
                aria-label="Next image"
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "2rem",
                  padding: 0,
                  opacity: 0.85,
                  lineHeight: "1",
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
                aria-label={`Go to image ${i + 1}`}
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
            <p className="grimoire-subheading">The Stability Principle</p>

            <p className="grimoire-text">
              Most people believe their life changes. But if it is observed
              closely enough, something else becomes visible. It does not simply
              change. It resets.
            </p>

            <p className="grimoire-text">
              Momentum builds. Confidence rises. Opportunities appear, and then
              everything quietly returns to the same patterns. Not because you
              failed, but because the signal underneath never stabilized.
            </p>

            <p className="grimoire-text">
              This guide reveals the mechanism behind that reset and shows you
              how to stop collapsing your own progress. Not by trying harder,
              but by stabilizing the internal state reality is responding to.
            </p>
          </div>

          {/* PRICE */}
          <div
            style={{
              margin: "2rem 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
                textDecoration: "line-through",
                opacity: 0.75,
                marginBottom: "0.5rem",
              }}
            >
              $55
            </p>

            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
              }}
            >
              $44
            </p>

            <p
              className="grimoire-text"
              style={{
                marginTop: "0.75rem",
                fontSize: "0.95rem",
                opacity: 0.85,
              }}
            >
              Limited pricing for the Law of Attraction Month
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
                transition: "0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
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
                transition: "0.2s",
              }}
              onMouseOver={(e) => {
                if (!buyingNow) e.currentTarget.style.opacity = "0.8";
              }}
              onMouseOut={(e) => {
                if (!buyingNow) e.currentTarget.style.opacity = "1";
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              style={{
                position: "absolute",
                left: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              ←
            </button>

            <img
              src={images[active]}
              alt="The Stability Principle enlarged preview"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "6px",
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              style={{
                position: "absolute",
                right: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        )}

        <footer className="grimoire-footer">
          <p>
            <Link
              href="/wicked-shops/wicked-guides"
              className="grimoire-footer-link"
            >
              ← Back to Wicked Guides
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