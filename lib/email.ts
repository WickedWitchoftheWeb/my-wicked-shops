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

/* =========================
   PRODUCT DATABASE
========================= */

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

  // TOOLKITS
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

  // TAROT
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
  "influence-vs-control": {
    title: "The Influence vs Control Spread",
    url: "https://drive.google.com/file/d/1e4OKPKJXA5_PitOKofEHTwxN9pfZlSt9/view?usp=sharing",
    available: true,
  },
  "unfolding-sequence-spread": {
    title: "The Unfolding Sequence Spread",
    url: "https://drive.google.com/file/d/1LwRIJT1zQ0rkiuTJiJ4KJEgHdXXMIRBw/view?usp=sharing",
    available: true,
  },
};

/* =========================
   BUNDLE MAP (THE FIX)
========================= */

const BUNDLE_CONTENTS: Record<string, string[]> = {
  "the-initiate-bundle": [
    "mechanics-of-response",
    "how-alignment-actually-works",
    "limits-of-control",
    "how-manifestation-actually-unfolds",
  ],

  "the-conduit-bundle": [
    "mechanics-of-response",
    "how-alignment-actually-works",
    "limits-of-control",
    "how-manifestation-actually-unfolds",
    "pattern-reveal-spread",
    "interference-spread",
    "influence-vs-control",
    "unfolding-sequence-spread",
    "stability-principle",
  ],

  "the-supreme-bundle": [
    "deliberate-creation",
    "stability-principle",
    "mechanics-of-response",
    "how-alignment-actually-works",
    "limits-of-control",
    "how-manifestation-actually-unfolds",
    "5-minute-state-reset",
    "interference-interrupt",
    "control-release",
    "sequence-awareness",
    "pattern-reveal-spread",
    "interference-spread",
    "influence-vs-control",
    "unfolding-sequence-spread",
  ],
};

/* =========================
   EMAIL SETUP
========================= */

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   CORE LOGIC
========================= */

function expandBundles(purchasedItems: PurchasedItem[]) {
  const expanded: PurchasedItem[] = [];

  for (const item of purchasedItems) {
    if (BUNDLE_CONTENTS[item.id]) {
      const bundleItems = BUNDLE_CONTENTS[item.id];
      bundleItems.forEach((id) => {
        expanded.push({ id, quantity: 1 });
      });
    } else {
      expanded.push(item);
    }
  }

  return expanded;
}

function buildDownloadsHtml(purchasedItems: PurchasedItem[]) {
  const expandedItems = expandBundles(purchasedItems);

  const uniqueIds = [...new Set(expandedItems.map((item) => item.id))];

  const availableDownloads = uniqueIds
    .map((id) => PRODUCT_DOWNLOADS[id])
    .filter(
      (product): product is ProductDownload =>
        Boolean(product && product.available && product.url)
    );

  return `
    <h2>Your purchase is complete</h2>
    <p>Your downloads are below:</p>

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
  `;
}

/* =========================
   SEND EMAIL
========================= */

export async function sendGuideEmail(
  to: string,
  purchasedItems: PurchasedItem[]
) {
  await transporter.sendMail({
    from: `"Wicked | The Wicked Witch of the Web" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Wicked purchase is ready",
    html: buildDownloadsHtml(purchasedItems),
  });
}