// File: /src/app/page.tsx

import {Button} from '@/components/ui/button';
import {ProjectCard} from '@/components/ProjectCard';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Rocket, Gem, Handshake} from 'lucide-react';
import Link from 'next/link';

// This data will eventually come from your Sanity.io CMS
const featuredProjects = [
  {
    title: 'Aura Health - Mental Wellness App',
    description: 'A mobile app connecting users with certified mental health professionals.',
    imageUrl: '/images/placeholder-project-1.png', // Ensure you have this image in /public/images/
    category: 'Mobile App',
    link: '/work/aura-health'
  },
  {
    title: 'QuantumLeap - SaaS Analytics',
    description: 'A B2B SaaS platform for visualizing complex data streams.',
    imageUrl: '/images/placeholder-project-2.png', // Ensure you have this image in /public/images/
    category: 'SaaS',
    link: '/work/quantum-leap'
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="container grid place-content-center gap-6 pb-20 pt-16 text-center md:pb-32 md:pt-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Building Technology for a Better World</h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">We design and build world-class SaaS, mobile, and desktop applications, and provide the elite development teams to make it happen.</p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/solutions">Explore Our Solutions</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Hire Our Experts</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Core Missions */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Core Missions</h2>
        </div>
        <div className="mx-auto mt-12 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Rocket className="mx-auto h-10 w-10 text-primary" />
              <CardTitle className="mt-4">Our Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We create our own SaaS and apps to tackle global challenges in education, health, and the environment.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Handshake className="mx-auto h-10 w-10 text-primary" />
              <CardTitle className="mt-4">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We provide world-class development teams to help companies build their most ambitious projects.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Gem className="mx-auto h-10 w-10 text-primary" />
              <CardTitle className="mt-4">Our Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We share our expertise through articles and webinars to empower the next generation of developers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Featured Work */}
      <section className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Work in Action</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">See how we transform complex problems into elegant, effective software solutions.</p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 md:max-w-[64rem] md:grid-cols-2">
          {featuredProjects.map(project => (
            <ProjectCard key={project.title} title={project.title} description={project.description} imageUrl={project.imageUrl} category={project.category} link={project.link} />
          ))}
        </div>
      </section>
    </div>
  );
}
