"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Mail, MapPin, Download } from "lucide-react";

interface SidebarProps {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    location: string;
    avatar: string;
    bio: string;
    resumeUrl: string;
  };
  socialLinks: { name: string; icon: any; url: string; username: string }[];
}

export default function PortfolioSidebar({
  personalInfo,
  socialLinks,
}: SidebarProps) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-24 h-24 ring-2 ring-primary">
            <AvatarImage
              src="/images/portfolio-avatar.png"
              alt="Mace Akkari"
              className="object-cover"
            />
            <AvatarFallback>Mace</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">{personalInfo.name}</h1>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-6">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-2">About Me</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <Separator className="my-2 border-t border-primary" />

          <div>
            <h2 className="font-semibold mb-3">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm leading-tight">
                <Mail className="w-[18px] h-[18px] shrink-0 text-muted-foreground" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-dark transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-[18px] h-[18px] shrink-0 text-muted-foreground" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <Separator className="my-2 border-t border-primary" />

          <div>
            <h2 className="font-semibold mb-3">Social</h2>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="flex items-center gap-2 text-sm"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground" />
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-dark transition-colors"
                  >
                    {social.username}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-6">
        <Button className="w-full" asChild>
          <a href={personalInfo.resumeUrl} download>
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
