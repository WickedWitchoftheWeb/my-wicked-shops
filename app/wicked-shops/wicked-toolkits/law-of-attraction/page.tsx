import Link from "next/link";
import LimitedHeader from "../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function WickedToolkitsLandingPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Law of Attraction" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/toolkits-cover.png"
            alt="Law of Attraction"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* PRODUCTS */}
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
                alt="The 5 Minute State Reset "
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Link>

            <Link
               href="/wicked-shops/wicked-toolkits/law-of-attraction/5-minute-state-reset"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The 5 Minute State Resest
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
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
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
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
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
                style={{
                  maxWidth: "320px",
                  margin: "0 auto",
                  display: "block",
                }}
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

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/wicked-shops/wicked-toolkits" className="grimoire-footer-link">
              ← Back to Wicked Toolkits
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