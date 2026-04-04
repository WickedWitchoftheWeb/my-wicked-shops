"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function LimitedHeader() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const existingCart = localStorage.getItem("wicked-cart");
      const cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);

    const interval = setInterval(updateCartCount, 500);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="secondary-header limited-header">
      <div className="secondary-header-inner">
        <nav className="secondary-nav secondary-nav-left" aria-hidden="true" />

        <Link href="/" className="secondary-logo-link">
          <Image
            src="https://ik.imagekit.io/w1ck3d/logos/white-wicked-moon-transparent.png"
            alt="The Wicked Witch of the Web logo"
            width={72}
            height={72}
            className="secondary-logo"
            priority
          />
        </Link>

        <nav
          className="secondary-nav secondary-nav-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/wicked-shops"
            className="wicked-link secondary-nav-link"
          >
            Wicked Shops
          </Link>

          <Link
            href="/wicked-shops/contact"
            className="wicked-link secondary-nav-link"
          >
            Contact
          </Link>

          <Link
            href="/wicked-shops/cart"
            className="wicked-link secondary-nav-link"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span className="secondary-cart">🛒</span>
            <span>Cart{cartCount > 0 ? ` (${cartCount})` : ""}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}