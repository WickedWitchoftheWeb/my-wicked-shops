"use client";

import { useState } from "react";
import Link from "next/link";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TheSupremePage() {
  const product = {
    id: "the-supreme-bundle",
    name: "The Supreme",
    price: 200,
  };

  const [added, setAdded] = useState(false);
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

      <SectionPage title="The Supreme" subtitle="">
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
              className="grimoire-card-img"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "650px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                padding: "1rem",
                transform: "translateY(6px)",
              }}
            >
              The Supreme Bundle Cover Placeholder
            </div>
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
            <p className="grimoire-subheading">Bundle</p>

            <p className="grimoire-text">
              The complete Law of Attraction month. Nothing held back.
            </p>

            <p className="grimoire-text">
              This bundle is for the person who wants the entire structure, the
              deeper mechanics, the practical integration, and the reflective
              layer all at once.
            </p>

            <p className="grimoire-text">
              It gives you every guide, every toolkit, every tarot spread, and
              the master-level expansion so you can move through the month with
              the full system in your hands.
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
              className="grimoire-text"
              style={{
                fontSize: "2.5rem",
                textDecoration: "line-through",
                opacity: 0.7,
                marginBottom: "0.35rem",
              }}
            >
              $275.20
            </p>

            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
              }}
            >
              $200
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

        <div className="grimoire-divider" />

        {/* INCLUDED */}
        <section className="grimoire-section" style={{ textAlign: "center" }}>
          <h2 className="grimoire-card-title">What&apos;s Included</h2>

          <p className="grimoire-subheading" style={{ marginTop: "1rem" }}>
            Master Guide
          </p>

          <p className="grimoire-text">Deliberate Creation</p>

          <div className="grimoire-divider" />

          <p className="grimoire-subheading" style={{ marginTop: "1rem" }}>
            Monthly Guide
          </p>

          <p className="grimoire-text">The Stability Principle</p>

          <div className="grimoire-divider" />

          <p className="grimoire-subheading" style={{ marginTop: "1rem" }}>
            Weekly Guides
          </p>

          <p className="grimoire-text">
            Week One: The Mechanics of Response
          </p>
          <p className="grimoire-text">
            Week Two: How Alignment Actually Works
          </p>
          <p className="grimoire-text">
            Week Three: The Limits of Control
          </p>
          <p className="grimoire-text">
            Week Four: How Manifestation Actually Unfolds
          </p>

          <div className="grimoire-divider" />

          <p className="grimoire-subheading" style={{ marginTop: "1rem" }}>
            Toolkits
          </p>

          <p className="grimoire-text">
            Week One: The 5 Minute State Reset
          </p>
          <p className="grimoire-text">
            Week Two: The Interference Interrupt
          </p>
          <p className="grimoire-text">
            Week Three: The Control Release Protocol
          </p>
          <p className="grimoire-text">
            Week Four: The Sequence Awareness Practice
          </p>

          <div className="grimoire-divider" />

          <p className="grimoire-subheading" style={{ marginTop: "1rem" }}>
            Tarot Spreads
          </p>

          <p className="grimoire-text">
            Week One: The Pattern Reveal Spread
          </p>
          <p className="grimoire-text">
            Week Two: The Interference Spread
          </p>
          <p className="grimoire-text">
            Week Three: Influence vs Control
          </p>
          <p className="grimoire-text">
            Week Four: The Unfolding Sequence Spread
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* POSITIONING */}
        <section className="grimoire-section" style={{ textAlign: "center" }}>
          <h2 className="grimoire-card-title">Who This Is For</h2>

          <p className="grimoire-text">
            The Supreme is for the person who does not want the stripped down
            version.
          </p>

          <p className="grimoire-text">
            It is for the person who wants the complete framework: the
            philosophy, the weekly progression, the practical tools, the tarot
            reflection, and the deeper master-level understanding of how to move
            from accidental response into deliberate creation.
          </p>

          <p className="grimoire-text">
            If The Initiate gives you the structure, and The Conduit gives you
            the structure plus depth, The Supreme gives you the entire system.
          </p>
        </section>

        <footer className="grimoire-footer">
          <p>
            <Link
              href="/wicked-shops/law-of-attraction/bundles"
              className="grimoire-footer-link"
            >
              ← Back to Bundles
            </Link>
          </p>
          <p>
            <Link
              href="/wicked-shops/law-of-attraction"
              className="grimoire-footer-link"
            >
              ← Back to Law of Attraction Assets
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