"use client";

import { useEffect, useState, useRef } from "react";

export interface UseScrollParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export interface ScrollParallaxResult {
  transform: string;
  willChange: "transform" | "auto";
}

/**
 * Custom hook for parallax scrolling effect
 * Uses requestAnimationFrame for smooth 60fps performance
 * Automatically disables on mobile devices (< 1024px)
 *
 * @param options - Configuration options
 * @param options.speed - Parallax speed multiplier (0-1), default 0.5
 * @param options.disabled - Force disable parallax
 * @returns CSS transform string and willChange property
 */
export function useScrollParallax({
  speed = 0.5,
  disabled = false,
}: UseScrollParallaxOptions = {}): ScrollParallaxResult {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafId = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();

    // Re-check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Disable parallax if explicitly disabled or on mobile
    if (disabled || isMobile) {
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      return;
    }

    const handleScroll = () => {
      // Cancel previous frame if it hasn't run yet
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      // Schedule update for next frame
      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [disabled, isMobile]);

  // If disabled or mobile, return identity transform
  if (disabled || isMobile) {
    return {
      transform: "translate3d(0, 0, 0)",
      willChange: "auto",
    };
  }

  // Calculate parallax offset
  const offset = scrollY * speed;

  return {
    transform: `translate3d(0, ${offset}px, 0)`,
    willChange: "transform",
  };
}
