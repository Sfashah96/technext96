// File: /src/app/work/page.tsx

import type {Metadata} from 'next';
import {ProjectCard} from '@/components/ProjectCard';
import {CallToAction} from '@/components/layout/CallToAction';

export const metadata: Metadata = {
  title: 'Our Work | Case Studies | YourCompanyName',
  description: 'Explore our portfolio of successful projects and see how we transform complex challenges into elegant, effective software solutions.'
};

// This data will eventually come from your Sanity.io CMS
const projects = [
  {
    title: 'Aura Health - Mental Wellness App',
    description: 'A mobile app connecting users with certified mental health professionals.',
    imageUrl: '/images/placeholder-project-1.png',
    category: 'Mobile App',
    link: '/work/aura-health'
  },
  {
    title: 'QuantumLeap - SaaS Analytics',
    description: 'A B2B SaaS platform for visualizing complex data streams.',
    imageUrl: '/images/placeholder-project-2.png',
    category: 'SaaS',
    link: '/work/quantum-leap'
  },
  {
    title: 'Nexus Logistics - Supply Chain OS',
    description: 'A comprehensive web application for optimizing global supply chains.',
    imageUrl: '/images/placeholder-project-3.png', // Ensure you have this placeholder image
    category: 'Web App',
    link: '/work/nexus-logistics'
  },
  {
    title: 'EduSphere - E-learning Platform',
    description: 'An interactive e-learning platform designed to make education accessible to all.',
    imageUrl: '/images/placeholder-project-4.png', // Ensure you have this placeholder image
    category: 'Web App',
    link: '/work/edusphere'
  }
];

export default function WorkPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Transforming Ideas into Real-World Success</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">We are proud of the work we do. Explore our portfolio to see how we've helped businesses like yours launch innovative products and solve complex challenges.</p>
      </section>

      {/* Section 2: Project Gallery */}
      <section className="container pb-20 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.title} title={project.title} description={project.description} imageUrl={project.imageUrl} category={project.category} link={project.link} />
          ))}
        </div>
        {/* Optional: Add pagination here in the future if you have many projects */}
      </section>

      {/* Section 3: Final Call to Action */}
      <CallToAction />
    </div>
  );
}
