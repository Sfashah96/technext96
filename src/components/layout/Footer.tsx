// File: /src/components/layout/Footer.tsx

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {currentYear} YourCompanyName, Inc. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {/* Add social media links here in the future */}
          <Link href="/privacy-policy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
