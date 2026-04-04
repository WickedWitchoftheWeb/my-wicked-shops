import Link from "next/link";
import LimitedHeader from "../../../components/shops/LimitedHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function LOAHubPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="April - Law of Attraction Assets" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/shops-landing.png"
            alt="April Law of Attraction Assets"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* BUNDLES */}
        <section className="grimoire-grid">
          {/* INITIATE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Bundle
            </p>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-initiate">
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/the-initiate-nt.png"
                alt="The Initiate Bundle"
                className="grimoire-card-img"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              />
            </Link>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-initiate">
              <h2
                className="grimoire-card-title"
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                The Initiate
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* CONDUIT */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Bundle
            </p>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-conduit">
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/the-conduit-nt.png"
                alt="The Conduit Bundle"
                className="grimoire-card-img"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              />
            </Link>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-conduit">
              <h2
                className="grimoire-card-title"
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                The Conduit
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* SUPREME */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Bundle
            </p>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-supreme">
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/the-supreme-nt.png"
                alt="The Supreme Bundle"
                className="grimoire-card-img"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              />
            </Link>

            <Link href="/wicked-shops/law-of-attraction/bundles/the-supreme">
              <h2
                className="grimoire-card-title"
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                The Supreme
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* GUIDES */}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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

        <div className="grimoire-divider" />

        {/* TOOLKITS */}
        <section className="grimoire-grid">
          {/* WEEK ONE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <p className="grimoire-subheading" style={{ marginBottom: "0.75rem" }}>
              Week One
            </p>

            <Link
              href="/wicked-shops/wicked-toolkits/law-of-attraction/5-minute-state-reset"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-one/tkw1-cover.png?updatedAt=1775151160679"
                alt="The 5 Minute State Reset"
                className="grimoire-card-img"
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-toolkits/law-of-attraction/5-minute-state-reset"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The 5 Minute State Reset
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
              href="/wicked-shops/wicked-toolkits/law-of-attraction/interference-interrupt"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-two/tkw2-cover.png?updatedAt=1775151180841"
                alt="The Interference Interrupt"
                className="grimoire-card-img"
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-toolkits/law-of-attraction/interference-interrupt"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Interference Interrupt
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
              href="/wicked-shops/wicked-toolkits/law-of-attraction/control-release"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-three/tkw3-cover1.png?updatedAt=1775151267866"
                alt="The Control Release Protocol"
                className="grimoire-card-img"
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-toolkits/law-of-attraction/control-release"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Control Release Protocol
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
              href="/wicked-shops/wicked-toolkits/law-of-attraction/sequence-awareness"
              className="wicked-link"
            >
              <img
                src="https://ik.imagekit.io/w1ck3d/shops/loa-week-four/tkw4-cover.png?updatedAt=1775151337719"
                alt="The Sequence Awareness Practice"
                className="grimoire-card-img"
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
              />
            </Link>

            <Link
              href="/wicked-shops/wicked-toolkits/law-of-attraction/sequence-awareness"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Sequence Awareness Practice
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* TAROT SPREADS */}
        <section className="grimoire-grid">
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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
                style={{ maxWidth: "320px", margin: "0 auto", display: "block" }}
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

        <footer className="grimoire-footer">
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