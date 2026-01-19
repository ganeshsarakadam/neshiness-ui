"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionFade } from "@/hooks/use-intersection-fade";

const features = [
  {
    title: "AI-First Design",
    description: "Purpose-built for AI applications",
    content:
      "Optimized components for conversational AI, chat interfaces, and agent dashboards. Every element designed with AI-powered experiences in mind.",
    icon: "🤖",
  },
  {
    title: "Golden Hour Aesthetics",
    description: "Warm, futuristic color palette",
    content:
      "Beautiful OKLCH color system with warm oranges, terracotta, and lavender accents. Perfect for creating inviting AI interfaces.",
    icon: "🌅",
  },
  {
    title: "Fully Accessible",
    description: "Built on Radix UI primitives",
    content:
      "WCAG-compliant components with proper ARIA attributes, keyboard navigation, and screen reader support. AI for everyone.",
    icon: "♿",
  },
  {
    title: "Modern Tech Stack",
    description: "Next.js 15 with Tailwind CSS v4",
    content:
      "Built with the latest technologies: Next.js App Router, Turbopack, Tailwind CSS v4, and TypeScript strict mode.",
    icon: "⚡",
  },
];

export type FeaturesSectionProps = React.HTMLAttributes<HTMLElement>;

export function FeaturesSection({ className, ...props }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn(
        "py-24 md:py-32 bg-gradient-to-b from-background to-muted/20",
        className
      )}
      {...props}
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FeatureSectionHeader />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSectionHeader() {
  const titleFade = useIntersectionFade({
    threshold: 0.3,
    delay: 0,
    duration: 700,
    direction: "up",
  });

  const descriptionFade = useIntersectionFade({
    threshold: 0.3,
    delay: 200,
    duration: 700,
    direction: "up",
  });

  return (
    <>
      <h2
        ref={titleFade.ref}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
          titleFade.animationClass
        )}
        style={titleFade.animationStyle}
      >
        Why Choose <span className="text-primary">Nesh UI</span>?
      </h2>
      <p
        ref={descriptionFade.ref}
        className={cn(
          "text-lg text-muted-foreground",
          descriptionFade.animationClass
        )}
        style={descriptionFade.animationStyle}
      >
        A design system crafted specifically for the next generation of
        AI-powered applications
      </p>
    </>
  );
}

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    content: string;
    icon: string;
  };
  delay: number;
}

function FeatureCard({ feature, delay }: FeatureCardProps) {
  const cardFade = useIntersectionFade({
    threshold: 0.2,
    delay,
    duration: 600,
    direction: "up",
  });

  return (
    <article
      ref={cardFade.ref}
      className={cardFade.animationClass}
      style={cardFade.animationStyle}
    >
      <div className="h-full p-6 rounded-lg border border-border bg-card transition-transform duration-300">
        <div className="mb-4">
          <div className="text-5xl mb-4" aria-hidden="true">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.content}
          </p>
        </div>
      </div>
    </article>
  );
}
