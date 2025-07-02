"use client";

import { Calendar, Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description?: string;
  achievements?: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section
      id="experience"
      className="px-6 py-16 bg-gradient-to-l from-blue-dark/5 to-blue-light/10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-blue-light/20 hover:shadow-lg hover:shadow-blue-light/10 transition-all"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.company}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-dark">
                      {exp.position}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground bg-blue-light/10 px-2 py-1 rounded">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-1">
                  {exp.achievements?.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Star className="w-3 h-3 text-blue-dark fill-blue-light" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
