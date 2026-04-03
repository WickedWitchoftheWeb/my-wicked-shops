// components/grimoire/SectionPage.tsx
import React from "react";

type SectionPageProps = {
  title: React.ReactNode;
  subtitle?: string;
  coverImage?: string;
  children: React.ReactNode;
};

export default function SectionPage({
  title,
  subtitle,
  coverImage,
  children,
}: SectionPageProps) {
  return (
    <main className="grimoire-wrap">
      <div className="grimoire-container">
        <header className="grimoire-section">
          <h1 className="grimoire-heading">{title}</h1>

          {subtitle && <p className="grimoire-subtitle">{subtitle}</p>}

          {coverImage && (
            <section className="grimoire-hero">
              <img
                src={coverImage}
                alt={typeof title === "string" ? title : ""}
                className="grimoire-hero-img"
              />
            </section>
          )}
        </header>

        <div className="grimoire-divider" />

        <section className="grimoire-content grimoire-section">{children}</section>
      </div>
    </main>
  );
}