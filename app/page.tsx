"use client";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/SideBar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import {
  personalInfo,
  socialLinks,
  techStack,
  experiences,
  projects,
} from "@/lib/data";

export default function Portfolio() {
  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <SideBar personalInfo={personalInfo} socialLinks={socialLinks} />

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <h1 className="font-semibold">
              Mace Akkari · From Prototype to Production
            </h1>
          </header>

          <main className="flex-1">
            <HeroSection />
            <ExperienceSection experiences={experiences} />
            <TechStack techStack={techStack} />
            <ProjectsSection projects={projects} />
            <ContactSection
              personalInfo={personalInfo}
              socialLinks={socialLinks}
            />
            <footer className="text-center text-xs text-muted-foreground py-4 border-t border-gray-200/20">
              Designed & built by Mace Akkari
            </footer>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
