import Link from "next/link";
import LimitedHeader from "../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LOABundlesPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Law of Attraction Bundles" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div
            className="grimoire-card-img"
            style={{
              maxWidth: "320px",
              height: "420px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            Bundle Cover Placeholder
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* BUNDLES */}
        <section className="grimoire-grid">
          {/* THE INITIATE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-initiate"
              className="wicked-link"
            >
              <div
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  height: "420px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                The Initiate Image Placeholder
              </div>
            </Link>

            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-initiate"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Initiate Bundle
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* THE CONDUIT */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-conduit"
              className="wicked-link"
            >
              <div
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  height: "420px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                The Conduit Image Placeholder
              </div>
            </Link>

            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-conduit"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Conduit
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* THE SUPREME */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-supreme"
              className="wicked-link"
            >
              <div
                className="grimoire-card-img"
                style={{
                  maxWidth: "320px",
                  height: "420px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                The Supreme Image Placeholder
              </div>
            </Link>

            <Link
              href="/wicked-shops/law-of-attraction/bundles/the-supreme"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title" style={{ marginTop: "1rem" }}>
                The Supreme
              </h2>
            </Link>

            <div className="grimoire-divider" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="grimoire-footer">
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