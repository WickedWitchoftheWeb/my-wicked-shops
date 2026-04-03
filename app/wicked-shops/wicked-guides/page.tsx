// app/wicked-shops/wicked-guides/page.tsx
import Link from "next/link";
import LimitedHeader from "../../../components/shops/LimitedHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function WickedGuidesLandingPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Wicked Guides" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/guides-landing.png?updatedAt=1769661975247"
            alt="Wicked Guides"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* GUIDE CATEGORIES */}
        <section className="grimoire-single-column-links">
          <div>
            <Link href="/wicked-shops/wicked-guides/law-of-attraction">
              <h2 className="grimoire-subheading">Law of Attraction</h2>
            </Link>
            <div className="grimoire-divider" />
          </div>
        </section>
      </SectionPage>
    </>
  );
}