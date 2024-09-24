"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ children }) {
  return (
    <>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          className="inline-block"
        >
          {word === "Creative" || word === "Design" ? (
            <span className="text-primary-green">{word}</span>
          ) : (
            word
          )}
          <span>&nbsp;</span>
        </motion.span>
      ))}
    </>
  );
}
