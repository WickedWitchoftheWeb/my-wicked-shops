// app/wicked-shops/wicked-guides/law-of-attraction/week-three/page.tsx
"use client";

import { useState } from "react";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";
import Link from "next/link";

export default function WeekThreePage() {
  const images = [
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-three/w3-cover.png?updatedAt=1775108865131",
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-three/w3-2.jpg?updatedAt=1775108863815",
    "https://ik.imagekit.io/w1ck3d/shops/loa-week-three/w3-3.jpg?updatedAt=1775108863886",
  ];

  const product = {
    id: "limits-of-control",
    name: "The Limits of Control",
    price: 22,
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
        title="The Limits of Control"
        subtitle="What You Influence and What You Don’t"
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
                  fontSize: "2rem",
                  cursor: "pointer",
                  opacity: 0.85,
                }}
              >
                ←
              </button>

              <img
                src={images[active]}
                alt="Week Three Guide"
                onClick={() => setViewerOpen(true)}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "block",
                  transform: "translateY(6px)",
                }}
              />

              <button
                onClick={nextImage}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                  opacity: 0.85,
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
            <p className="grimoire-subheading">Week Three: Influence</p>

            <p className="grimoire-text">
              Most people believe manifestation is about control. If the pattern
              is correct, the outcome should match exactly what they expect,
              when they expect it, and how they expect it.
            </p>

            <p className="grimoire-text">
              This guide dismantles that assumption. It shows the difference
              between control and influence, and why trying to force specific
              outcomes introduces pressure, destabilizes the pattern, and creates
              the very resistance you think you’re fighting.
            </p>

            <p className="grimoire-text">
              You are not controlling reality. You are influencing what becomes
              more likely to form. That influence moves through probability, not
              certainty, and understanding that shift changes everything about
              how the system responds.
            </p>

            <p className="grimoire-text">
              This is where obsession, forcing, and attachment to specific
              outcomes begin to break down. Not because they are wrong, but
              because they narrow the pattern into something that cannot hold.
            </p>

            <p className="grimoire-text">
              Once you see where control actually exists, and where it does not,
              the pressure drops. The pattern stabilizes. And what once felt like
              resistance begins to reveal itself as structure.
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
              $33
            </p>

            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
              }}
            >
              $22
            </p>

            <p
              className="grimoire-text"
              style={{
                marginTop: "0.75rem",
                fontSize: "0.95rem",
                opacity: 0.85,
              }}
            >
              Pricing for the Law of Attraction Month
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
              alt="Week Three enlarged preview"
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