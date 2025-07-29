// File: /src/components/layout/Header.tsx

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Globe} from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-bold">YourCompanyName</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="/solutions" className="transition-colors hover:text-foreground/80">
              Solutions
            </Link>
            <Link href="/services" className="transition-colors hover:text-foreground/80">
              Services
            </Link>
            <Link href="/work" className="transition-colors hover:text-foreground/80">
              Our Work
            </Link>
            <Link href="/resources/blog" className="transition-colors hover:text-foreground/80">
              Resources
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
