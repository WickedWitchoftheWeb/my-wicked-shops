"use client";

export default function BuyButton() {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong creating checkout.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong starting checkout.");
    }
  };

  return (
    <button onClick={handleCheckout}>
      Buy Deliberate Creation
    </button>
  );
}