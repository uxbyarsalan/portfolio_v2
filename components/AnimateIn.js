"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function AnimateIn({ children, delay = 0, className = "", y = 30 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  // Respect prefers-reduced-motion: render in the final state with no
  // transform/opacity animation for users who've asked to reduce motion.
  const from = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const to = { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={from}
      animate={isInView ? to : from}
      transition={reduce ? { duration: 0 } : { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
