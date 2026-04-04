import Link from "next/link";
import Image from "next/image";
import LimitedHeader from "../../../../components/shops/LimitedHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LOABundlesPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Law of Attraction Bundles" subtitle="">
        
        <div className="grimoire-divider" />

        {/* BUNDLES */}
        <section className="grimoire-grid">
          
          {/* THE INITIATE */}
          <div className="grimoire-card" style={{ textAlign: "center" }}>
            <Link href="/wicked-shops/law-of-attraction/bundles/the-initiate">
              <Image
                src="https://ik.imagekit.io/w1ck3d/shops/the-initiate-nt.png"
                alt="The Initiate Bundle"
                width={320}
                height={420}
                className="grimoire-card-img"
                style={{
                  margin: "0 auto",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
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
            <Link href="/wicked-shops/law-of-attraction/bundles/the-conduit">
              <Image
                src="https://ik.imagekit.io/w1ck3d/shops/the-conduit-nt.png"
                alt="The Conduit Bundle"
                width={320}
                height={420}
                className="grimoire-card-img"
                style={{
                  margin: "0 auto",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
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
            <Link href="/wicked-shops/law-of-attraction/bundles/the-supreme">
              <Image
                src="https://ik.imagekit.io/w1ck3d/shops/the-supreme-nt.png"
                alt="The Supreme Bundle"
                width={320}
                height={420}
                className="grimoire-card-img"
                style={{
                  margin: "0 auto",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
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