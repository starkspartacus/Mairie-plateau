"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

interface FlashInfoProps {
  messages: string[];
}

const FlashInfo: React.FC<FlashInfoProps> = ({ messages }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { x: 100 },
    visible: {
      x: [-100, 0],
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-ivory-orange to-ivory-orange-dark text-white py-4 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-ivory-orange via-ivory-orange-dark to-ivory-orange">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="mr-6 flex-shrink-0"
          >
            <Badge
              variant="secondary"
              className="bg-white text-ivory-orange font-bold px-4 py-2 animate-pulse"
            >
              FLASH INFOS
            </Badge>
          </motion.div>

          {/* Scrolling text */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center space-x-12 text-sm whitespace-nowrap"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {messages.map((message, index) => (
                <motion.span
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="text-ivory-gold">🔴</span>
                  <span>{message}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-0 w-2 h-2 bg-ivory-gold/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/4 right-0 w-1 h-1 bg-ivory-gold/20 rounded-full"
              animate={{
                x: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FlashInfo;
