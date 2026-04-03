// app/wicked-shops/wicked-guides/page.tsx
import Link from "next/link";
import LimitedHeader from "../../../components/shops/LimitedHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function WickedToolkitsLandingPage() {
  return (
    <>
      <LimitedHeader />

      <SectionPage title="Wicked Toolkits" subtitle="">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/shops/toolkit-loa-spread.png"
            alt="Wicked Toolkits"
            className="grimoire-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        {/* GUIDE CATEGORIES */}
        <section className="grimoire-single-column-links">
          <div>
            <Link href="/wicked-shops/wicked-toolkits/law-of-attraction">
              <h2 className="grimoire-subheading">Law of Attraction</h2>
            </Link>
            <div className="grimoire-divider" />
          </div>
        </section>
      </SectionPage>
    </>
  );
}