"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BrainCircuit, GraduationCap, User } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <User className="mr-2" /> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4">
              I &apos;m a passionate developer with a deep passion for crafting modern web applications.
               With 1+ years working with React, Node.js, and cloud technologies, 
               I focus on building robust solutions that drive growth and efficiency.
            </p>
            <p className="text-lg mb-4">
            Starting my tech journey at 17, I &apos;ve transformed my passion into a career,
             working with both startups and established enterprises.
              My focus is on crafting modern web applications that not only solve problems but also scale with ambition.
            </p>
          </motion.div>
          <div className="space-y-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="mr-2" />
                      <h3 className="font-semibold">Education</h3>
                    </div>
                    <p>Bachelor in Computer Application</p>
                    <p className="text-sm text-muted-foreground">
                      Aryabhatt Knowlwdge University 2022-Present
                    </p>
                  </Card>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <p className="text-sm">Major coursework in:</p>
                  <ul className="text-sm list-disc list-inside">
                    <li>Algorithms & Data Structures</li>
                    <li>Software Engineering</li>
                    <li>Database Systems</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <BrainCircuit className="mr-2" />
                      <h3 className="font-semibold">Experience</h3>
                    </div>
                    <p>Full Stack Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Zumnex Tech Solutions. 2022-Present
                    </p>
                  </Card>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <p className="text-sm">Key responsibilities:</p>
                  <ul className="text-sm list-disc list-inside">
                    <li>Leading development team of 5</li>
                    <li>Architecture design</li>
                    <li>Database design</li>
                    <li>Code review & mentoring</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </motion.section>
  );
}