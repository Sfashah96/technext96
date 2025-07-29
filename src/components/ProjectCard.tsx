// File: /src/components/ProjectCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

/**
 * Defines the required properties for the ProjectCard component.
 * This acts as a strict contract for how to use this component.
 */
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

/**
 * A reusable, presentational component to display a single project.
 * It relies entirely on props for its data.
 */
export function ProjectCard({title, description, imageUrl, category, link}: ProjectCardProps) {
  return (
    <Link href={link} className="block group">
      <Card className="h-full transition-shadow duration-300 group-hover:shadow-xl">
        <CardHeader className="p-0">
          <div className="overflow-hidden rounded-t-lg">
            <Image src={imageUrl} alt={title} width={600} height={400} className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="secondary" className="font-semibold">
            {category}
          </Badge>
          <CardTitle className="mt-2 text-xl">{title}</CardTitle>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
