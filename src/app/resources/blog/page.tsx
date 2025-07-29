// File: /src/app/resources/blog/page.tsx

import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Resources | Blog | YourCompanyName',
  description: 'Insights, tutorials, and analysis from our world-class team on technology, software development, and solving global challenges.'
};

// This data will eventually come from your Sanity.io CMS
const blogPosts = [
  {
    title: 'The Future of SaaS: Trends to Watch in 2025',
    description: 'From AI integration to vertical SaaS, we explore the key trends that will shape the software-as-a-service industry in the coming year.',
    imageUrl: '/images/blog-1.png',
    category: 'SaaS',
    author: 'Jane Doe',
    date: 'July 29, 2025',
    link: '/resources/blog/future-of-saas-2025'
  },
  {
    title: 'Building Scalable Systems: Our Approach to AWS Architecture',
    description: 'A deep dive into the architectural principles we use to build robust, scalable, and cost-effective systems on Amazon Web Services.',
    imageUrl: '/images/blog-2.png',
    category: 'Development',
    author: 'John Smith',
    date: 'July 22, 2025',
    link: '/resources/blog/scalable-aws-architecture'
  }
];

export default function BlogListingPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Our Knowledge Hub</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Insights, tutorials, and analysis from our world-class team on technology, software development, and solving global challenges.</p>
      </section>

      {/* Section 2: Blog Post Grid */}
      <section className="container pb-20 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map(post => (
            <Link key={post.title} href={post.link} className="block group">
              <Card className="h-full transition-shadow duration-300 group-hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="overflow-hidden rounded-t-lg">
                    <Image src={post.imageUrl} alt={post.title} width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="font-semibold">
                    {post.category}
                  </Badge>
                  <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    {post.author} • {post.date}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
