"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export function HeroSection() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "software",
    },
    {
      text: "with",
    },
    {
      text: "Badal Kumar",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center text-center py-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-2 ring-primary/20">
            <AvatarImage src="/Badal.jpg" />
            <AvatarFallback>[Badal Kumar]</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <TypewriterEffect words={words} />
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-x-4"
        >
          <Button size="lg" className="group">
            <Link href="#projects" passHref>
              <span className="flex items-center">
                <span className="hidden md:inline">View Projects</span>
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </Button>

          <Link href="#contact" passHref>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}