import type { Variants } from "framer-motion";

export const staggerFadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export const hoverLift = {
  y: -3,
  transition: { duration: 0.18, ease: "easeOut" },
};

