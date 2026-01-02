"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface UseIntersectionFadeOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  disabled?: boolean;
}

export interface IntersectionFadeResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
  animationClass: string;
}

/**
 * Custom hook for fade-in animations triggered by viewport intersection
 * Uses Intersection Observer API for better performance than scroll listeners
 * Supports staggered delays for sequential animations
 *
 * @param options - Configuration options
 * @param options.threshold - Visibility threshold (0-1) to trigger animation, default 0.3
 * @param options.delay - Animation delay in milliseconds, default 0
 * @param options.duration - Animation duration in milliseconds, default 700
 * @param options.direction - Slide direction (up, down, left, right), default 'up'
 * @param options.disabled - Force disable animations
 * @returns Object with ref, visibility state, and animation classes
 */
export function useIntersectionFade<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.3,
  delay = 0,
  duration = 700,
  direction = "up",
  disabled = false,
}: UseIntersectionFadeOptions = {}): IntersectionFadeResult<T> {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    // If disabled, show immediately
    if (disabled) {
      setIsVisible(true);
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay before showing
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }

          // Once visible, stop observing
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, delay, disabled]);

  // Map direction to tw-animate-css classes
  const directionClasses = {
    up: "slide-in-from-bottom-6",
    down: "slide-in-from-top-6",
    left: "slide-in-from-right-6",
    right: "slide-in-from-left-6",
  };

  // Generate animation class based on visibility and duration
  const animationClass = isVisible
    ? cn(
        "animate-in fade-in",
        directionClasses[direction],
        `duration-${duration}`
      )
    : "opacity-0 translate-y-6";

  return {
    ref,
    isVisible,
    animationClass,
  };
}
