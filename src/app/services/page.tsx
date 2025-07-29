// File: /src/app/services/page.tsx

import type {Metadata} from 'next';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Code, Users, GanttChartSquare} from 'lucide-react';
import Link from 'next/link';
import {CallToAction} from '@/components/layout/CallToAction';

export const metadata: Metadata = {
  title: 'World-Class Development Services | YourCompanyName',
  description: 'We provide elite custom software development and skilled developer hiring to help you build and scale your most ambitious projects.'
};

const technologies = ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'iOS', 'Android', 'Figma'];

const processSteps = [
  {number: '01', title: 'Discover & Plan', description: 'We listen to your needs, define goals, and map out a strategic plan for success.'},
  {number: '02', title: 'Design & Develop', description: 'We build your solution with clean code, user-centric design, and continuous feedback.'},
  {number: '03', title: 'Test & Deploy', description: 'We ensure quality through rigorous testing before a seamless, successful launch.'},
  {number: '04', title: 'Support & Scale', description: 'We provide ongoing support and strategic guidance to help you grow and evolve.'}
];

export default function ServicesPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">World-Class Services to Power Your Vision</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">From end-to-end project delivery to augmenting your team with our elite developers, we provide the technical expertise you need to succeed.</p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Project Estimate</Link>
          </Button>
        </div>
      </section>

      {/* Section 2: Core Service Offerings */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How We Can Help You</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader className="items-center text-center">
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">End-to-End Solution Development</CardTitle>
                <CardDescription>Have a bold idea? We manage the entire product lifecycle for you.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">From initial strategy and design to development, deployment, and ongoing support. We build robust and scalable applications for web, mobile, and desktop.</p>
                {/* <Button variant="outline" className="mt-6">Learn About Our Process</Button> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Hire Our Skilled Developers</CardTitle>
                <CardDescription>Need to scale your team quickly? We provide elite, vetted talent.</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Seamlessly integrate our highly skilled developers into your existing projects. Get the exact expertise you need, right when you need it, without the hiring overhead.</p>
                {/* <Button variant="outline" className="mt-6">Browse Our Talent Pool</Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Our Technical Expertise */}
      <section className="container py-20 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Master</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {technologies.map(tech => (
            <div key={tech} className="border rounded-md px-4 py-2 bg-muted text-muted-foreground font-medium">
              {/* In a real project, you might use actual logos here */}
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: How We Work (Our Process) */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Path to Success</h2>
          <div className="relative">
            {/* The connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="grid gap-12 md:grid-cols-4">
              {processSteps.map(step => (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary text-primary font-bold text-2xl mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final Call to Action */}
      <CallToAction />
    </div>
  );
}
