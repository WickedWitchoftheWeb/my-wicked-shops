import Link from "next/link";
import LimitedHeader from "../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function WickedGuidesLandingPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Law of Attraction" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/loa-guide.png"
            alt="Law of Attraction"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* PRODUCTS */}
        <section className="grimoire-grid">

          {/* DELIBERATE CREATION */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Master Guide
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/deliberate-creation"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/deliberate-creation-april-guide/dc-cover-1.png?updatedAt=1775103851328"
                alt="Deliberate Creation"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/deliberate-creation"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                Deliberate Creation
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* STABILITY PRINCIPLE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Monthly Guide
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/stability-principle"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/stability-principle/sp-cover.png?updatedAt=1775104526827"
                alt="The Stability Principle"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/stability-principle"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Stability Principle
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* WEEK ONE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Week One
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/mechanics-of-response"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-one/w1-cover1.png?updatedAt=1775109232736"
                alt="The Mechanics of Response"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/mechanics-of-response"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Mechanics of Response
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* WEEK TWO */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Week Two
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/how-alignment-actually-works"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-two/w2-cover.png?updatedAt=1775108841265"
                alt="How Alignment Actually Works"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/how-alignment-actually-works"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                How Alignment Actually Works
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* WEEK THREE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Week Three
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/limits-of-control"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-three/w3-cover.png?updatedAt=1775108865131"
                alt="The Limits of Control"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/limits-of-control"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Limits of Control
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* WEEK FOUR */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Week Four
            </p>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/how-manifestation-actually-unfolds"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-four/w4-cover.png?updatedAt=1775108887152"
                alt="How Manifestation Actually Unfolds"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-guides/law-of-attraction/how-manifestation-actually-unfolds"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                How Manifestation Actually Unfolds
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

        </section>

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/wicked-shops/wicked-guides" className="grimoire-footer-link">
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