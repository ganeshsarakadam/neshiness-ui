// Animation presets for Motion (Framer Motion)
// Reusable animation variants for consistent animations across components

import { Variants, Transition } from "motion/react";

// ============================================================================
// STANDARD TRANSITIONS
// ============================================================================

export const transitions = {
  spring: { type: "spring", stiffness: 400, damping: 17 } as Transition,
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition,
  bounce: { type: "spring", stiffness: 300, damping: 10 } as Transition,
  slow: { duration: 0.5, ease: "easeInOut" } as Transition,
  fast: { duration: 0.15, ease: "easeOut" } as Transition,
};

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================================================
// STAGGER VARIANTS (for lists/grids)
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ============================================================================
// GLOW EFFECTS (Box Shadow based)
// ============================================================================

export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 0 0 rgba(var(--primary), 0)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(var(--primary), 0.4)",
      "0 0 20px 10px rgba(var(--primary), 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
};

export const hoverGlow = {
  rest: {
    boxShadow: "0 0 0 0 rgba(var(--primary), 0)"
  },
  hover: {
    boxShadow: "0 0 20px 5px rgba(var(--primary), 0.3)",
    transition: transitions.smooth
  },
};

// ============================================================================
// HOVER EFFECTS
// ============================================================================

export const hoverLift = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  },
  hover: {
    y: -4,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: transitions.smooth
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: transitions.spring
  },
};

// ============================================================================
// TAP/PRESS EFFECTS
// ============================================================================

export const tapScale = {
  scale: 0.98,
  transition: transitions.fast,
};

// ============================================================================
// DIALOG/MODAL VARIANTS
// ============================================================================

export const dialogOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const dialogContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
  },
};

// ============================================================================
// LOADING/SPINNER VARIANTS
// ============================================================================

export const spinnerRotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }
  },
};

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
};
