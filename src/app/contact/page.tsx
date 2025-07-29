// File: /src/app/contact/page.tsx

import type {Metadata} from 'next';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Mail, Phone, MapPin} from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us | Let's Build Together | YourCompanyName",
  description: 'Get in touch with our team to discuss your project, ask a question, or explore how we can work together.'
};

export default function ContactPage() {
  // This is the Server Action that will handle form submission.
  // It will only ever run on the server, keeping your email logic secure.
  async function handleContactForm(formData: FormData) {
    'use server'; // This directive marks the function as a Server Action

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    console.log('--- FORM SUBMISSION ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('-----------------------');

    // --- PRODUCTION EMAIL LOGIC ---
    // In a real project, you would uncomment and use a service like Resend.
    // const { data, error } = await resend.emails.send({
    //     from: 'Your Site <onboarding@resend.dev>', // Must be a verified domain on Resend
    //     to: ['your-company-email@example.com'],
    //     subject: `New Contact Form Submission from ${name}`,
    //     react: (
    //         <div>
    //             <h1>New Message from your Website</h1>
    //             <p><strong>Name:</strong> {name}</p>
    //             <p><strong>Email:</strong> {email}</p>
    //             <p><strong>Message:</strong></p>
    //             <p>{message}</p>
    //         </div>
    //     ),
    // });
    // if (error) {
    //   // Handle error state
    //   console.error(error);
    //   return;
    // }

    // In a real app, you would redirect to a "thank you" page here.
    // For now, we just log to the server console.
  }

  return (
    <div>
      {/* Section 1: Hero */}
      <section className="container text-center py-20 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">Let's Talk</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Whether you have a project in mind, a question about our solutions, or just want to say hello, we'd love to hear from you.</p>
      </section>

      {/* Section 2: Form & Details */}
      <section className="container pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: The Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form action={handleContactForm} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" type="text" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project or question..." required rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Column 2: Contact Details */}
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">Reach out to our team directly.</p>
                  <a href="mailto:contact@yourcompany.com" className="text-primary font-medium hover:underline">
                    contact@yourcompany.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Available during business hours.</p>
                  <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive, Suite 100
                    <br />
                    Tech City, ST 54321
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
