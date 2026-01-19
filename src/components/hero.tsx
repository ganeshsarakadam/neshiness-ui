"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrollParallax } from "@/hooks/use-scroll-parallax";
import { useIntersectionFade } from "@/hooks/use-intersection-fade";

const heroVariants = cva(
  "relative flex items-center justify-center overflow-hidden",
  {
    variants: {
      size: {
        sm: "min-h-[60vh]",
        md: "min-h-[75vh]",
        lg: "min-h-[90vh]",
        xl: "min-h-screen",
      },
      alignment: {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
      },
    },
    defaultVariants: {
      size: "lg",
      alignment: "center",
    },
  }
);

export interface HeroProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants> {}

export function Hero({ size, alignment, className, ...props }: HeroProps) {
  // Parallax effects for different layers
  const backgroundParallax = useScrollParallax({ speed: 0.3 });
  const contentParallax = useScrollParallax({ speed: 0.5 });

  // Fade-in animations with staggered delays
  const headlineFade = useIntersectionFade({
    threshold: 0.3,
    delay: 0,
    duration: 700,
    direction: "up",
  });

  const taglineFade = useIntersectionFade({
    threshold: 0.3,
    delay: 200,
    duration: 700,
    direction: "up",
  });

  const descriptionFade = useIntersectionFade({
    threshold: 0.3,
    delay: 400,
    duration: 700,
    direction: "up",
  });

  const ctaPrimaryFade = useIntersectionFade({
    threshold: 0.3,
    delay: 600,
    duration: 500,
    direction: "up",
  });

  const ctaSecondaryFade = useIntersectionFade({
    threshold: 0.3,
    delay: 700,
    duration: 500,
    direction: "up",
  });

  return (
    <section
      className={cn(heroVariants({ size, alignment }), className)}
      {...props}
    >
      {/* Background Layer - Parallax 0.3x */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 -z-10"
        style={backgroundParallax}
      >
        {/* Decorative gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4" style={contentParallax}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <h1
            ref={headlineFade.ref}
            className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
              headlineFade.animationClass
            )}
            style={headlineFade.animationStyle}
          >
            Build the Future of{" "}
            <span className="text-primary bg-clip-text">AI Interfaces</span>
          </h1>

          {/* Tagline */}
          <h2
            ref={taglineFade.ref}
            className={cn(
              "text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground",
              taglineFade.animationClass
            )}
            style={taglineFade.animationStyle}
          >
            A futuristic design system purpose-built for AI-powered applications
            and intelligent agent experiences
          </h2>

          {/* Description */}
          <p
            ref={descriptionFade.ref}
            className={cn(
              "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto",
              descriptionFade.animationClass
            )}
            style={descriptionFade.animationStyle}
          >
            Nesh UI combines Golden Hour aesthetics with modern, accessible
            components. Build beautiful AI chat interfaces, agent dashboards,
            and conversational applications with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <div
              ref={ctaPrimaryFade.ref}
              className={ctaPrimaryFade.animationClass}
              style={ctaPrimaryFade.animationStyle}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link href="/components">Get Started</Link>
              </Button>
            </div>

            <div
              ref={ctaSecondaryFade.ref}
              className={ctaSecondaryFade.animationClass}
              style={ctaSecondaryFade.animationStyle}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() => {
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
