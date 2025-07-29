// File: /src/app/layout.tsx

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {cn} from '@/lib/utils'; // A utility for cleaner class names

// Setup the font
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'YourCompanyName | Building Technology for a Better World',
  description: "We build innovative SaaS solutions and provide elite development teams to solve the world's most pressing problems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
