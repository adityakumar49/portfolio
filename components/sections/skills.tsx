"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 60 },
    ],
    technologies: ["Redux", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 50 },
      { name: "GraphQL", level: 65 },
    ],
    technologies: ["Express", "FastAPI", "Apollo"],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "MySQL", level: 60 },
    ],
    technologies: ["Prisma", "Mongoose", "TypeORM","Drizzle"],
  },
  {
    title: "Other Skills",
    icon: Code2,
    skills: [
      { name: "DevOps", level: 20 },
      { name: "Testing", level: 70 },
      { name: "UI/UX", level: 80 },
      { name: "Docker", level: 50 },
      { name: "Jest", level: 30 },
      { name: "Figma", level: 30 },
    ],
    technologies: ["Docker", "Jest", "Figma"],
  },
];

export function SkillsSection() {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (categoryIndex * category.skills.length + index) * 0.1,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}