"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechStackProps {
  techStack: {
    category: string;
    icon: React.ElementType;
    skills: string[];
  }[];
}

const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <section
      id="techstack"
      className="px-6 py-16 bg-gradient-to-r from-blue-light/5 to-blue-dark/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category) => (
            <Card
              key={category.category}
              className="border-blue-light/20 hover:border-blue-dark/30 transition-colors"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-blue-dark" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-blue-light/20 text-blue-dark border-blue-light/30"
                    >
                      {skill}
                    </Badge>
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

export default TechStack;
