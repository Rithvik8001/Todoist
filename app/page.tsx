"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground lg:text-9xl">
          Todoist
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Simplify your tasks, amplify your productivity
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/todos">
            <Button size="lg" className="font-semibold px-8 py-2 rounded-full">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
