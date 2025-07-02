"use client";

import { Button } from "@/components/ui/button";
import LinkedInIcon from "@/components/icons/LinkedIn";

type ContactSectionProps = {
  personalInfo: {
    email: string;
    resumeUrl: string;
  };
  socialLinks: {
    name: string;
    url: string;
  }[];
};

export default function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="px-6 pt-16 bg-gradient-to-br from-blue-dark/10 via-blue-light/5 to-background mb-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let's connect</h2>
        <p className="text-muted-foreground mb-8">
          Available for full-time roles or freelance projects. Let's build
          something useful.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="outline" asChild>
            <a
              href={socialLinks.find((s) => s.name === "LinkedIn")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
