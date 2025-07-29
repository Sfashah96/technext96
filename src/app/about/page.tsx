// File: /src/app/about/page.tsx

import type {Metadata} from 'next';
import Image from 'next/image';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent} from '@/components/ui/card';
import {CallToAction} from '@/components/layout/CallToAction';

export const metadata: Metadata = {
  title: 'About Us | Our Mission and Values | YourCompanyName',
  description: 'Learn about the mission, values, and the team driving YourCompanyName to create technology for a better world.'
};

const teamMembers = [
  {name: 'Jane Doe', role: 'CEO & Founder', avatarUrl: '/images/avatar-1.png'},
  {name: 'John Smith', role: 'CTO & Co-Founder', avatarUrl: '/images/avatar-2.png'},
  {name: 'Emily White', role: 'Head of Product', avatarUrl: '/images/avatar-3.png'}
];

const values = [
  {title: 'Purpose-Driven Innovation', description: "We don't just build software; we build solutions. Every project must have a positive and meaningful impact."},
  {title: 'Uncompromising Quality', description: 'From the first line of code to the final user experience, we are obsessed with quality, craftsmanship, and excellence.'},
  {title: 'Radical Transparency', description: 'We build trust with our clients and our team through open, honest communication at every stage.'},
  {title: 'Empowering Talent', description: 'We invest in our people, fostering a culture of continuous learning and growth to build the best team in the world.'}
];

export default function AboutPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">We're a Team of Innovators, Dreamers, and Builders</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">Our mission is to use technology to create meaningful solutions for the world's most pressing problems. We believe in the power of code to build a better future.</p>
      </section>

      {/* Section 2: Our Story */}
      <section className="bg-muted">
        <div className="container grid md:grid-cols-2 gap-12 items-center py-20 md:py-24">
          <div className="prose lg:prose-lg dark:prose-invert">
            <h2>Our Story</h2>
            <p>Founded on the principle that technology should be a force for good, YourCompanyName started not in a boardroom, but from a shared passion to solve real-world problems. We saw a world full of challenges that could be addressed with smart, well-crafted software, but a lack of teams willing to tackle them with both technical excellence and deep empathy.</p>
            <p>We set out to be that team. A software house that measures success not just by profits, but by the positive impact we create for our clients, our community, and the world.</p>
          </div>
          <div>
            <Image
              src="/images/team-collaborating.png" // Ensure you have this placeholder image
              alt="Our team collaborating"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="container py-20 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map(value => (
            <Card key={value.title} className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Meet the Team */}
      <section className="bg-muted py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Minds Behind the Mission</h2>
          <div className="flex justify-center flex-wrap gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
