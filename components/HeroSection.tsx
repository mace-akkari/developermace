"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-blue-light/20 via-background to-blue-dark/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-gradient opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Code that&apos;s clean.
          <span className="text-primary">Products that work.</span>
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I turn ideas into scalable web apps that are easy to use, quick to
          ship, and built to last.
        </motion.p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
