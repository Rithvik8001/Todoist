"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tasks = [
  "Plan your day",
  "Stay focused",
  "Achieve more",
  "Reflect on progress",
];

export function AnimatedTaskList() {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <motion.div
          key={task}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Check className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>
          <span className="text-lg text-primary">{task}</span>
        </motion.div>
      ))}
    </div>
  );
}
