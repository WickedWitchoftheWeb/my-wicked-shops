import nodemailer from "nodemailer";

type PurchasedItem = {
  id: string;
  quantity: number;
};

type ProductDownload = {
  title: string;
  url: string;
  available: boolean;
};

const PRODUCT_DOWNLOADS: Record<string, ProductDownload> = {
  // MAIN GUIDES
  "deliberate-creation": {
    title: "Deliberate Creation",
    url: "https://drive.google.com/file/d/1zRnZAYkgExz-cHw7W3l1GS975GbXHuTZ/view?usp=sharing",
    available: true,
  },
  "stability-principle": {
    title: "The Stability Principle",
    url: "https://drive.google.com/file/d/1SoOGqKhCYDw2yoRID-X9DKBXFKZ-i_yy/view?usp=sharing",
    available: true,
  },

  // WEEKLY GUIDES
  "mechanics-of-response": {
    title: "The Mechanics of Response",
    url: "https://drive.google.com/file/d/1n2mOs7tniA9303w7podK3tU9WjXqSLQQ/view?usp=sharing",
    available: true,
  },
  "how-alignment-actually-works": {
    title: "How Alignment Actually Works",
    url: "https://drive.google.com/file/d/17L9S9qHb6bxd1p8bnpIqCRMIOQjIKR3S/view?usp=drive_link",
    available: true,
  },
  "limits-of-control": {
    title: "The Limits of Control",
    url: "https://drive.google.com/file/d/1rl0VFnuRDQM6KeNj24CKd5U734ZPkbaP/view?usp=sharing",
    available: true,
  },
  "how-manifestation-actually-unfolds": {
    title: "How Manifestation Actually Unfolds",
    url: "https://drive.google.com/file/d/18ceO_WE0BxT5HcX9VIfgP2RaYn1KiK4i/view?usp=sharing",
    available: true,
  },

  // TOOLTIKS
  "5-minute-state-reset": {
    title: "The 5 Minute State Reset",
    url: "https://drive.google.com/file/d/1am4C9oGxvnnew0LprKJfPlYzxIQkA6s0/view?usp=sharing",
    available: true,
  },
  "interference-interrupt": {
    title: "The Interference Interrupt",
    url: "https://drive.google.com/file/d/1rxaWIpdzhKSqxZ3hEyK0a0l6Iu9gsrVH/view?usp=sharing",
    available: true,
  },
  "control-release": {
    title: "The Control Release Protocol",
    url: "https://drive.google.com/file/d/13YtaZrVpONGKTyvr93C8hM8Z7nGZl4XG/view?usp=drive_link",
    available: true,
  },
  "sequence-awareness": {
    title: "The Sequence Awareness Practice",
    url: "https://drive.google.com/file/d/1_RMNbX74t5DYrZr1mqMnSjEOKd9Kj9Uv/view?usp=sharing",
    available: true,
  },

  // TAROT SPREADS
  "pattern-reveal-spread": {
    title: "The Pattern Reveal Spread",
    url: "https://drive.google.com/file/d/18OwPyvrgu07c3YWr6RKMcp9OCIEcwZTC/view?usp=sharing",
    available: true,
  },
  "interference-spread": {
    title: "The Interference Spread",
    url: "https://drive.google.com/file/d/1raVnEOM4Kcohq9htmJsaS_pVHa4kbXb2/view?usp=drive_link",
    available: true,
  },
  "interference-vs-control": {
    title: "The Influence vs Control Spread",
    url: "https://drive.google.com/file/d/1e4OKPKJXA5_PitOKofEHTwxN9pfZlSt9/view?usp=sharing",
    available: true,
  },
  "unfolding-sequence-spread": {
    title: "The Unfolding Sequence Spread",
    url: "https://drive.google.com/file/d/1LwRIJT1zQ0rkiuTJiJ4KJEgHdXXMIRBw/view?usp=sharing",
    available: true,
  },

  // BUNDLES
  "guide-bundle": {
    title: "Guide Bundle",
    url: "",
    available: false,
  },
  "full-loa-set-bundle": {
    title: "Full LOA Set Bundle",
    url: "",
    available: false,
  },
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function buildDownloadsHtml(purchasedItems: PurchasedItem[]) {
  const uniqueIds = [...new Set(purchasedItems.map((item) => item.id))];

  const availableDownloads = uniqueIds
    .map((id) => PRODUCT_DOWNLOADS[id])
    .filter(
      (product): product is ProductDownload =>
        Boolean(product && product.available && product.url)
    );

  const unavailableDownloads = uniqueIds
    .map((id) => PRODUCT_DOWNLOADS[id])
    .filter(
      (product): product is ProductDownload =>
        Boolean(product && (!product.available || !product.url))
    );

  const unknownItems = uniqueIds.filter((id) => !PRODUCT_DOWNLOADS[id]);

  const availableSection =
    availableDownloads.length > 0
      ? `
        <h2>Your purchase is complete</h2>
        <p>Your available downloads are below:</p>
        <ul>
          ${availableDownloads
            .map(
              (product) => `
                <li style="margin-bottom: 12px;">
                  <strong>${product.title}</strong><br />
                  <a href="${product.url}">Download ${product.title}</a>
                </li>
              `
            )
            .join("")}
        </ul>
      `
      : `
        <h2>Your purchase is complete</h2>
        <p>Thank you for your order.</p>
      `;

  const unavailableSection =
    unavailableDownloads.length > 0
      ? `
        <p>The following items are not connected for automatic delivery yet:</p>
        <ul>
          ${unavailableDownloads
            .map(
              (product) => `
                <li style="margin-bottom: 8px;">
                  ${product.title}
                </li>
              `
            )
            .join("")}
        </ul>
        <p>Please send these manually until their delivery links are connected.</p>
      `
      : "";

  const unknownSection =
    unknownItems.length > 0
      ? `
        <p>The following product IDs were not recognized by the email system:</p>
        <ul>
          ${unknownItems
            .map(
              (id) => `
                <li style="margin-bottom: 8px;">
                  ${id}
                </li>
              `
            )
            .join("")}
        </ul>
      `
      : "";

  return `
    ${availableSection}
    ${unavailableSection}
    ${unknownSection}
  `;
}

export async function sendGuideEmail(to: string, purchasedItems: PurchasedItem[]) {
  await transporter.sendMail({
    from: `"Wicked | The Wicked Witch of the Web" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Wicked purchase is ready",
    html: buildDownloadsHtml(purchasedItems),
  });
}