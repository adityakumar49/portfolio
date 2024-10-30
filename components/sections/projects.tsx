"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Weather Website",
    description: "A weather website built with Html Css and JavaScript",
    image: "https://github.com/raobadalyadav11/weather-website/raw/main/image/weather-website.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/raobadalyadav11/weather-website",
    demo: "https://github.com/raobadalyadav11/weather-website",
  },
  {
    title: "Freelance Platform",
    description: "A platform for freelancers to connect with clients",
    image: "https://images.unsplash.com/photo-1620344527458-28900b32d695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWVsYW5jZXJ8ZW58MHx8MHx8fDA%3D",
    technologies: ["Next.js", "TypeScript", "React", "Node.js","Express","PostgreSQL", "Docker", "Rajorpay"],
    github: "https://github.com/raobadalyadav11/freelance.git",
    demo: "https://freelance-seven-tau.vercel.app/",
  },
  {
    title: "Online caste and Other Certificates",
    description: "Online delegate and other certificate generator",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React",  "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "Apollo Client",
      "Tailwind CSS",
      "Framer Motion",
      "Jest",
      "Docker",
      "AWS",
      "Redux"],
    github: "https://github.com/raobadalyadav11/certifyplus.git",
    demo: "https://certifyplus.netlify.app/",
  },
  {
    title: "College Management System",
    description: "A college management system built with Next.js, TypeScript, React, Node.js, Express, and MongoDB",
    image: "https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/raobadalyadav11/vvitcollege.git",
    demo: "https://github.com/raobadalyadav11/vvitcollege.git",
  },
  {
    title: "Gym Website",
    description: "An Gym website  manage class mentorship and payment",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    technologies: ["Nextjs", "Typescipt", "Shadcn", "Express", "Nodejs", "Rajorpay"],
    github: "https://github.com/raobadalyadav11/gym",
    demo: "https://gym-xi-tan.vercel.app/",
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Code2 className="mr-2" /> Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group">
              <div className="relative">
                <Image width={500} height={300}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="text-white">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="text-white">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}