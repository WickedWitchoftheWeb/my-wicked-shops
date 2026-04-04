"use client";

import { useState } from "react";
import Link from "next/link";
import LimitedHeader from "../../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TheInitiateBundlePage() {
  const image = "/initiate-bundle.png";

  const product = {
    id: "the-initiate-bundle",
    name: "The Initiate Bundle",
    price: 66,
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

      <SectionPage title="The Initiate Bundle" subtitle="">
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
              src="https://ik.imagekit.io/w1ck3d/shops/the-initiate-nt.png"
              alt="The Initiate Bundle"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "block",
                transform: "translateY(6px)",
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
            <p className="grimoire-subheading">Bundle</p>

            <p className="grimoire-text">
              Four weekly guides. One complete month of progression.
            </p>

            <p className="grimoire-text">
              This bundle is for the person who wants the full weekly Law of
              Attraction arc in order: clear, structured, and complete.
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
              $88
            </p>

            <p
              className="grimoire-subheading"
              style={{
                fontSize: "2.5rem",
              }}
            >
              $66
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
        </section>

        <div className="grimoire-divider" />

        {/* POSITIONING */}
        <section className="grimoire-section" style={{ textAlign: "center" }}>
          <h2 className="grimoire-card-title">Who This Is For</h2>

          <p className="grimoire-text">
            The Initiate Bundle is the cleanest entry into the series.
          </p>

          <p className="grimoire-text">
            It gives you the full weekly teaching arc without the added tarot
            spreads, toolkits, or deeper expansion pieces.
          </p>

          <p className="grimoire-text">
            If you want the core structure of the month in its simplest complete
            form, this is where you start.
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