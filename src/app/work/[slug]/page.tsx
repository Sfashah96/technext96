// File: /src/app/work/[slug]/page.tsx

import type {Metadata} from 'next';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {CallToAction} from '@/components/layout/CallToAction';

// This is a placeholder for the data that will come from Sanity.io
// In a real app, you would fetch this data based on the `params.slug`
const getProjectData = async (slug: string) => {
  // Simulating a fetch from a CMS
  const project = {
    title: 'Aura Health - Mental Wellness App',
    summary: 'How we built a scalable mobile platform that revolutionized access to mental healthcare, achieving a 4.8-star rating and increasing user engagement by 300%.',
    coverImageUrl: '/images/placeholder-project-1.png',
    services: ['UI/UX Design', 'Full-Stack Development', 'Mobile App (iOS & Android)'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    challenge: '<p>Aura Health identified a critical gap in the market: millions of people lacked convenient, affordable, and destigmatized access to mental wellness resources. They needed a platform that was not only clinically sound but also highly engaging and user-friendly. The primary challenges were ensuring user data privacy (HIPAA compliance), creating a seamless user journey from onboarding to therapy sessions, and building a scalable backend to support thousands of concurrent users.</p>',
    solution: '<h3>A Human-Centered Design Approach</h3><p>We began with an intensive discovery phase, interviewing therapists and potential users to map out the ideal user journey. Our UI/UX team crafted an interface that was calming, intuitive, and reassuring. Wireframes and prototypes were rigorously tested to ensure ease of use.</p><h3>Robust & Secure Technology Stack</h3><p>For the mobile app, we chose React Native to allow for a single codebase for both iOS and Android, accelerating development time. The backend was built on Node.js with a PostgreSQL database, all hosted on AWS for maximum scalability and security. We implemented end-to-end encryption for all user communications to ensure data privacy.</p>',
    results: '<ul><li><strong>300% Increase in User Engagement</strong> in the first quarter post-launch.</li><li>Achieved a <strong>4.8-star rating</strong> across both App Store and Google Play with over 10,000 reviews.</li><li>Reduced server costs by <strong>40%</strong> by implementing an optimized AWS architecture.</li><li>Successfully onboarded over <strong>500 certified therapists</strong> onto the platform.</li></ul>',
    testimonial: {
      text: "The team didn't just build an app; they understood our mission. Their expertise and dedication were instrumental in bringing Aura Health to life and making a real impact on people's lives.",
      author: 'Jane Doe, CEO of Aura Health'
    }
  };
  return project;
};

// Dynamic metadata for SEO
export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata> {
  const project = await getProjectData(params.slug);
  return {
    title: `${project.title} | Case Study`,
    description: project.summary
  };
}

export default async function CaseStudyPage({params}: {params: {slug: string}}) {
  const project = await getProjectData(params.slug);

  return (
    <div>
      {/* Section 1: Project Header */}
      <section className="container py-20 md:py-28 text-center">
        <Badge variant="secondary" className="font-semibold text-lg">
          Case Study
        </Badge>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">{project.summary}</p>
      </section>

      <div className="container">
        <Image src={project.coverImageUrl} alt={project.title} width={1200} height={600} className="rounded-lg object-cover shadow-lg" />
      </div>

      {/* Section 2: Project Overview */}
      <section className="container grid md:grid-cols-3 gap-8 md:gap-12 py-16">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Services Provided</h3>
          <div className="flex flex-col gap-2">
            {project.services.map(service => (
              <p key={service} className="text-muted-foreground">
                {service}
              </p>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
            <p>"{project.testimonial.text}"</p>
            <footer className="mt-2 text-sm font-bold not-italic">- {project.testimonial.author}</footer>
          </blockquote>
        </div>
      </section>

      {/* Article-style content section */}
      <section className="container pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <div className="prose lg:prose-xl dark:prose-invert">
            <h2>The Challenge</h2>
            <div dangerouslySetInnerHTML={{__html: project.challenge}} />

            <h2>Our Solution</h2>
            <div dangerouslySetInnerHTML={{__html: project.solution}} />

            <h2>The Results & Impact</h2>
            <div dangerouslySetInnerHTML={{__html: project.results}} />
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
