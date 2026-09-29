import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** vertical travel distance in px */
  y?: number;
  className?: string;
  /** only animate the first time it scrolls into view */
  once?: boolean;
}

/**
 * Sleek scroll-triggered reveal: fades and slides content up
 * the first time it enters the viewport. Respects reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-64px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
