import Link from "next/link";
import LimitedHeader from "../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function WickedTarotSpreadsLandingPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Law of Attraction" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/tarot-spreads-cover.png"
            alt="Law of Attraction"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* PRODUCTS */}
        <section className="grimoire-grid">

          {/* BUNDLES */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Bundles
            </p>

            <Link
              href="/wicked-shops/law-of-attraction/bundles"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/the-supreme-nt.png"
                alt="Law of Attraction Bundles"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/law-of-attraction/bundles"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                Explore the Bundles
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
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/pattern-reveal-spread"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-one/ts-w1.png"
                alt="The Pattern Reveal Spread"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/pattern-reveal-spread"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Pattern Reveal Spread
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
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/interference-spread"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-two/ts-w2.png?updatedAt=1775152147314"
                alt="The Interference Spread"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/interference-spread"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Interference Spread
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
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/influence-vs-control-spread"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-three/ts-w3.png?updatedAt=1775152122110"
                alt="Influence vs Control"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/influence-vs-control-spread"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                Influence vs Control
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
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/unfolding-sequence-spread"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-four/ts-w4.png?updatedAt=1775152100120"
                alt="The Unfolding Sequence Spread"
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-tarot-spreads/law-of-attraction/unfolding-sequence-spread"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Unfolding Sequence Spread
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

        </section>

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/wicked-shops/wicked-tarot-spreads" className="grimoire-footer-link">
              ← Back to Wicked Tarot Spreads
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