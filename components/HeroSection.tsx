"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedTaskList } from "@/components/AnimatedTaskList";
import DotPattern from "./ui/dot-pattern";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex  flex-col items-center justify-center">
      <DotPattern />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary/10" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-col items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left space-y-8 flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Todoist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-md mx-auto md:mx-0"
          >
            Simplify your life, amplify your productivity with elegant task
            management
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/todos">
              <Button
                size="lg"
                className="font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <AnimatedTaskList />
        </motion.div>
      </div>
    </div>
  );
}
