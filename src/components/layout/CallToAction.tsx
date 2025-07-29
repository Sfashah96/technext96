// File: /src/components/layout/CallToAction.tsx

import Link from 'next/link';
import {Button} from '@/components/ui/button';

export function CallToAction() {
  return (
    <section id="cta" className="bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Let's Build Something Great Together</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/90">Have a project in mind or need a skilled team to bring your vision to life? We're here to help.</p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
