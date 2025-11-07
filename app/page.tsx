import React from "react";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow">
        <Hero />
      </section>

      {/* About Section */}
      <AboutSection />
    </main>
  );
}
