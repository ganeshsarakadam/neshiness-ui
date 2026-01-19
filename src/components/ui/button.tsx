"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/animations";

// ============================================================================
// BUTTON VARIANTS
// ============================================================================

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02] [-webkit-font-smoothing:antialiased]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary/20 shadow-md hover:bg-primary/95 hover:shadow-lg hover:border-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground border border-secondary/20 shadow-md hover:bg-secondary/95 hover:shadow-lg",
        outline:
          "border-2 border-primary/40 bg-background/80 hover:bg-primary/10 hover:border-primary/60 shadow-sm",
        ghost:
          "bg-transparent hover:bg-accent/60",
        glow:
          "bg-primary text-primary-foreground border border-primary/30 shadow-[0_0_20px_-5px] shadow-primary/40 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/60",
        "moving-border":
          "bg-primary text-primary-foreground border border-primary/20 shadow-md hover:bg-primary/95",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-13 px-8 py-3 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// ============================================================================
// MOVING BORDER EFFECT COMPONENT
// ============================================================================

interface MovingBorderEffectProps {
  borderWidth?: number;
  duration?: number;
  segmentLength?: number;
}

function MovingBorderEffect({
  borderWidth = 2,
  duration = 1500,
  segmentLength = 0.5,
}: MovingBorderEffectProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pathRef = React.useRef<SVGRectElement>(null);
  const glowRef = React.useRef<SVGRectElement>(null);
  const strokeRef = React.useRef<SVGRectElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const [pathLength, setPathLength] = React.useState(0);

  // Track dimensions with ResizeObserver
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    // Initial measurement
    updateDimensions();

    // Observe resize
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  // Measure path length after SVG renders
  React.useEffect(() => {
    const path = pathRef.current;
    if (path && dimensions.width > 0) {
      setPathLength(path.getTotalLength());
    }
  }, [dimensions]);

  // Animate stroke dashoffset using refs (no state updates in RAF)
  React.useEffect(() => {
    if (pathLength === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate progress (0 to 1, looping)
      const progress = (elapsed % duration) / duration;
      const offset = -progress * pathLength;

      // Update DOM directly via refs (no React re-render)
      if (glowRef.current) {
        glowRef.current.style.strokeDashoffset = `${offset}`;
      }
      if (strokeRef.current) {
        strokeRef.current.style.strokeDashoffset = `${offset}`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [pathLength, duration]);

  const calculatedSegmentLength = pathLength * segmentLength;
  const gapLength = pathLength - calculatedSegmentLength;
  const glowWidth = borderWidth * 2;
  const dashArray = `${calculatedSegmentLength} ${gapLength}`;

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible">
      {dimensions.width > 0 && (
        <svg
          className="absolute inset-0"
          width={dimensions.width}
          height={dimensions.height}
          style={{ overflow: "visible" }}
        >
          {/* Invisible path for measurement */}
          <rect
            ref={pathRef}
            x="0"
            y="0"
            width={dimensions.width}
            height={dimensions.height}
            rx={dimensions.height / 2}
            fill="none"
            stroke="none"
          />

          {/* Moving border segments */}
          {pathLength > 0 && (
            <>
              {/* Glow effect (blurred background) */}
              <rect
                ref={glowRef}
                x="0"
                y="0"
                width={dimensions.width}
                height={dimensions.height}
                rx={dimensions.height / 2}
                fill="none"
                style={{ stroke: "var(--moving-border-glow)" }}
                strokeWidth={glowWidth}
                strokeDasharray={dashArray}
                filter="blur(4px)"
                strokeLinecap="round"
              />
              {/* Solid border segment */}
              <rect
                ref={strokeRef}
                x="0"
                y="0"
                width={dimensions.width}
                height={dimensions.height}
                rx={dimensions.height / 2}
                fill="none"
                style={{ stroke: "var(--moving-border-color)" }}
                strokeWidth={borderWidth}
                strokeDasharray={dashArray}
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      )}
    </div>
  );
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  asChild?: boolean;
  // Moving border customization (only for moving-border variant)
  borderWidth?: number;
  animationDuration?: number;
  segmentLength?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    isLoading,
    children,
    disabled,
    asChild = false,
    borderWidth,
    animationDuration,
    segmentLength,
    ...props
  }, ref) => {
    const hasMovingBorder = variant === "moving-border";

    // When asChild is true, render children directly without wrappers
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), "overflow-visible")}
        disabled={isLoading || disabled}
        {...props}
      >
        {/* Moving Border Effect - SVG Path Based */}
        {hasMovingBorder && !disabled && !isLoading && (
          <MovingBorderEffect
            borderWidth={borderWidth}
            duration={animationDuration}
            segmentLength={segmentLength}
          />
        )}

        {/* Button Content */}
        <span className="relative z-10">
          {isLoading ? (
            <>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transitions.fast}
              >
                <Spinner />
              </motion.span>
              <span className="invisible">{children}</span>
            </>
          ) : (
            children
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

// ============================================================================
// SPINNER COMPONENT (for loading state)
// ============================================================================

function Spinner() {
  return (
    <motion.svg
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </motion.svg>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export { Button, buttonVariants };
