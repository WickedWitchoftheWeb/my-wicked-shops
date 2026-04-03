import Link from "next/link";

export default function HomePage() {
  return (
    <>

      <main className="grimoire-wrap">
        <div className="grimoire-container">
          <div className="grimoire-content">
            <section className="grimoire-section">
              {/* HERO IMAGE (the word “Power” lives inside the image) */}
              <section className="grimoire-hero">
                <img
                  src="https://ik.imagekit.io/w1ck3d/domicile/The%20Five%20Wicked%20Points.png?updatedAt=1769632431584"
                  alt="Five Wicked Points"
                  className="grimoire-hero-img"
                />
              </section>

              <span className="wicked-signature">
                Giving Power Back to the People
              </span>

              <footer className="grimoire-footer">
                <p>
                  <Link href="/about" className="grimoire-footer-link">
                    About
                  </Link>
                </p>

                <p>
                  <Link href="/grimoire" className="grimoire-footer-link">
                    Grimoire
                  </Link>
                </p>

                <p>
                  <Link href="/wicked-shops" className="grimoire-footer-link">
                    Wicked Shop
                  </Link>
                </p>
              </footer>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}