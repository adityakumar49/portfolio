"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      className="py-12 border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-2">Badal Kumar</h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/raobadalyadav11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/raobadalyadav11/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com/raobadalyadav11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}