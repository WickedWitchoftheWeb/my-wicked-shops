import Link from "next/link";
import Image from "next/image";

export default function SecondaryHeader() {
  return (
    <header className="secondary-header">
      <div className="secondary-header-inner">
        {/* Left Nav */}
        <nav className="secondary-nav secondary-nav-left">
          <Link href="/" className="wicked-link secondary-nav-link">
            Domicile
          </Link>
          <Link href="/about" className="wicked-link secondary-nav-link">
            About
          </Link>
          <Link href="/grimoire/codex" className="wicked-link secondary-nav-link">
            Codex
          </Link>
        </nav>

        {/* Center Logo */}
        <Link
          href="/"
          className="secondary-logo-link"
          aria-label="Return to Domicile"
        >
          <Image
            src="https://ik.imagekit.io/w1ck3d/logos/white-wicked-moon-transparent.png"
            alt="The Wicked Witch of the Web logo"
            width={60}
            height={120}
            className="secondary-logo"
            priority
          />
        </Link>

        {/* Right Nav */}
        <nav className="secondary-nav secondary-nav-right">
          <Link href="/grimoire" className="wicked-link secondary-nav-link">
            Wicked Grimoire
          </Link>
          <Link href="/wicked-shops" className="wicked-link secondary-nav-link">
            Wicked Shops
          </Link>
        </nav>
      </div>
    </header>
  );
}