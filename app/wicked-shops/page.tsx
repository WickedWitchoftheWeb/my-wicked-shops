// app/wicked-shops/page.tsx
import Link from "next/link";
import LimitedHeader from "../../components/shops/LimitedHeader";
import SectionPage from "../../components/grimoire/SectionPage";


export default function WickedShopsIndex() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Wicked Shops" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/shops-landing.png"
            alt="Wicked Shops"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-single-column-links">
          <Link className="grimoire-index-link" href="/wicked-shops/wicked-guides">
            Wicked Guides
          </Link>

          <Link
            className="grimoire-index-link"
            href="/wicked-shops/wicked-toolkits"
          >
            Wicked Toolkits
          </Link>

           <Link
            className="grimoire-index-link"
            href="/wicked-shops/wicked-tarot-spreads"
          >
            Wicked Tarot Spreads
          </Link>

           <Link
            className="grimoire-index-link"
            href="/wicked-shops/law-of-attraction"
          >
            April - Law of Attraction Assets
          </Link>

        </section>
      </SectionPage>
    </>
  );
}