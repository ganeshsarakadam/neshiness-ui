"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Sparkles, Zap, Heart, Code2 } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 hero-ambient-gradient opacity-50" />

                <div className="container px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
                            <Sparkles className="w-4 h-4" />
                            Documentation
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                            Why <span className="text-neshiness">Nesh UI</span>?
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A personal journey to create components that feel alive in the AI era.
                        </p>
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <section className="py-16 border-t border-border/50">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Heart className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">The Motivation</h2>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                In a world where AI is reshaping how we interact with technology,
                                I felt that the UI components we use should evolve too. Many existing
                                component libraries felt <strong>outdated</strong>—functional, but lacking
                                the spark that makes interfaces feel truly modern.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                What frustrated me even more was seeing premium, beautifully designed
                                components locked behind <strong>paywalls</strong>. I believe that
                                high-quality, intuitive design should be accessible to everyone building
                                for the AI era.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
                                <p className="text-foreground italic text-lg">
                                    "In the AI era, components should feel <strong>advanced</strong> and
                                    <strong> intuitive</strong> — not just work, but inspire."
                                </p>
                            </blockquote>

                            <p className="text-muted-foreground leading-relaxed">
                                That led me to create <span className="text-neshiness">Nesh UI</span>—a
                                component library infused with my own taste (leaving a room to customize). Every component is crafted to
                                feel like it belongs in the future we're building with AI, featuring
                                smooth animations, thoughtful micro-interactions, and a cohesive
                                visual language.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 border-t border-border/50 bg-muted/30">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">Design Philosophy</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-background border border-border/50">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    AI-Native Feel
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Components designed specifically for AI-powered applications,
                                    with animations and interactions that feel intelligent.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-background border border-border/50">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Heart className="w-4 h-4 text-primary" />
                                    Personal Touch
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Every component reflects a unique aesthetic—warm golden-hour
                                    colors and thoughtful design decisions.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-background border border-border/50">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-primary" />
                                    Micro-Interactions
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Subtle animations and feedback that make every interaction
                                    feel responsive and delightful.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-background border border-border/50">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    Open Source
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Free and open source. No paywalls for premium components—just
                                    beautiful, accessible design for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Component Status Section */}
            <section className="py-16 border-t border-border/50">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Code2 className="w-5 h-5 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold">Component Status</h2>
                        </div>

                        {/* Ready Components */}
                        <div className="mb-10">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                Ready to Use
                            </h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium">Button</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                                            Ready
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Animated buttons with multiple variants and sizes.
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium">TextArea</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                                            Ready
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Smart text areas with character counting and validation.
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium">Answer Pad</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                                            Ready
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        AI response display with streaming and markdown support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* In Progress */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-primary" />
                                In Progress
                            </h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {["Input", "Card", "Dialog", "Dropdown", "Tabs", "Toggle", "Tooltip", "Avatar", "Badge"].map((component) => (
                                    <div key={component} className="p-4 rounded-lg border border-border bg-muted/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium">{component}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                                                Coming Soon
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Being crafted with care.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 border-t border-border/50">
                <div className="container px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to explore?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Check out the components that are ready to use in your projects.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg">
                                <Link href="/components">
                                    View Components
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    Star on GitHub
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 py-8">
                <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>Built by Ga<span className="text-neshiness">Nesh</span>. Open source.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/docs" className="hover:text-foreground transition-colors">
                            Docs
                        </Link>
                        <Link href="/components" className="hover:text-foreground transition-colors">
                            Components
                        </Link>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
