// File: /src/app/solutions/page.tsx

import type {Metadata} from 'next';
import {CallToAction} from '@/components/layout/CallToAction';
import {Lightbulb} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Solutions | Innovative SaaS & Apps | YourCompanyName',
  description: "Discover the proprietary SaaS, mobile, and desktop applications we've built to tackle real-world challenges in education, health, and more."
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Our In-House Solutions</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">This is where we showcase the innovative SaaS products and applications we've built from the ground up to address global challenges.</p>
      </section>

      {/* Section 2: "Coming Soon" Placeholder */}
      <section className="container pb-20 md:pb-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-lg border bg-muted p-12 text-center">
          <Lightbulb className="h-16 w-16 text-primary mb-6" />
          <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
          <p className="text-muted-foreground">We are currently preparing the detailed showcase for our proprietary applications. Please check back soon to see the exciting solutions we're building.</p>
        </div>
      </section>

      {/* Section 3: Final Call to Action */}
      <CallToAction />
    </div>
  );
}
