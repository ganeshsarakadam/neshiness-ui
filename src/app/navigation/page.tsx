"use client";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Sidebar } from "@/components/ui/sidebar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Tabs } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { Separator, Divider } from "@/components/ui/separator";
import {
  Layout,
  LayoutMain,
  LayoutSidebar,
  LayoutContent,
  Container
} from "@/components/ui/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  Settings,
  FileText,
  BarChart3,
  Mail,
  Bell,
  Search,
  Edit,
  User,
  LogOut
} from "lucide-react";

export default function NavigationPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
      active: true,
    },
    {
      label: "Components",
      href: "/components",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Forms",
      href: "/forms",
      icon: <Edit className="h-4 w-4" />,
    },
    {
      label: "Products",
      icon: <BarChart3 className="h-4 w-4" />,
      children: [
        { label: "All Products", href: "/products" },
        { label: "Categories", href: "/products/categories" },
        { label: "Inventory", href: "/products/inventory" },
      ],
    },
    {
      label: "Users",
      href: "/users",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  const sidebarItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
      active: true,
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: <BarChart3 className="h-4 w-4" />,
      badge: "3",
    },
    {
      label: "Projects",
      icon: <FileText className="h-4 w-4" />,
      children: [
        { label: "All Projects", href: "/projects" },
        { label: "My Projects", href: "/projects/mine" },
        { label: "Shared", href: "/projects/shared" },
      ],
    },
    {
      label: "Messages",
      href: "/messages",
      icon: <Mail className="h-4 w-4" />,
      badge: "12",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", active: true },
  ];

  const tabItems = [
    {
      value: "overview",
      label: "Overview",
      icon: <BarChart3 className="h-4 w-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="text-muted-foreground">
            This is the overview tab content. It contains general information about the current section.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-muted-foreground">+23% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      value: "analytics",
      label: "Analytics",
      icon: <BarChart3 className="h-4 w-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Analytics</h3>
          <p className="text-muted-foreground">
            Detailed analytics and insights about your application performance and user behavior.
          </p>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Analytics Chart Placeholder</p>
          </div>
        </div>
      ),
    },
    {
      value: "settings",
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Settings</h3>
          <p className="text-muted-foreground">
            Configure your application settings and preferences.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive email updates</p>
              </div>
              <Button variant="outline" size="sm">Toggle</Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-medium">Dark Mode</h4>
                <p className="text-sm text-muted-foreground">Use dark theme</p>
              </div>
              <Button variant="outline" size="sm">Toggle</Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const accordionItems = [
    {
      value: "what-is",
      title: "What is this component library?",
      content: (
        <div className="space-y-2">
          <p>
            This is a comprehensive component library built with React, TypeScript, and Tailwind CSS.
            It provides a set of reusable, accessible, and customizable UI components for building modern web applications.
          </p>
          <p>
            The library includes components for forms, navigation, layout, and more, all designed to work seamlessly together.
          </p>
        </div>
      ),
    },
    {
      value: "features",
      title: "What features does it include?",
      content: (
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Fully accessible components built with Radix UI</li>
            <li>Dark mode support with theme switching</li>
            <li>Responsive design for all screen sizes</li>
            <li>TypeScript support with full type safety</li>
            <li>Customizable design tokens and variants</li>
            <li>Comprehensive documentation and examples</li>
          </ul>
        </div>
      ),
    },
    {
      value: "installation",
      title: "How do I install and use it?",
      content: (
        <div className="space-y-2">
          <p>Installation is straightforward:</p>
          <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
            <code>npm install @your-org/component-library</code>
          </pre>
          <p>Then import and use components in your React application:</p>
          <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
            <code>{`import { Button } from '@your-org/component-library'

function App() {
  return <Button>Click me</Button>
}`}</code>
          </pre>
        </div>
      ),
    },
    {
      value: "customization",
      title: "Can I customize the components?",
      content: (
        <div className="space-y-2">
          <p>
            Yes! All components are highly customizable. You can:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Override default styles with custom CSS classes</li>
            <li>Modify design tokens to change colors, spacing, and typography</li>
            <li>Create custom variants using the built-in variant system</li>
            <li>Extend components with additional props and functionality</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Navigation & Layout</h1>
              <p className="text-muted-foreground mt-2">Comprehensive navigation and layout components</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={toggleTheme} variant="outline">
                {isDark ? "☀️" : "🌙"} Toggle Dark
              </Button>
              <Button asChild variant="outline">
                <Link href="/">🏠 Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/components">🧩 Components</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/forms">📝 Forms</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Theme Switcher */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Theme Switcher</h2>
            <p className="text-lg text-muted-foreground">
              Switch between different color themes to see how navigation adapts
            </p>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </section>

          {/* Navigation Component */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Navigation Component</h2>
              <p className="text-muted-foreground">Responsive navigation with dropdown menus</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Navigation</CardTitle>
                <CardDescription>
                  A responsive navigation bar with brand, menu items, and actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Navigation
                  brand={
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">N</span>
                      </div>
                      <span className="font-bold text-lg">Neshiness UI</span>
                    </div>
                  }
                  items={navigationItems}
                  actions={
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Bell className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  }
                />
              </CardContent>
            </Card>
          </section>

          {/* Sidebar Component */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Sidebar Component</h2>
              <p className="text-muted-foreground">Collapsible sidebar with navigation items</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expanded Sidebar */}
              <Card>
                <CardHeader>
                  <CardTitle>Expanded Sidebar</CardTitle>
                  <CardDescription>
                    Full-width sidebar with navigation items and badges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-lg overflow-hidden">
                    <Sidebar
                      header={
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">N</span>
                          </div>
                          <span className="font-bold">Dashboard</span>
                        </div>
                      }
                      items={sidebarItems}
                      footer={
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent cursor-pointer">
                            <User className="h-4 w-4" />
                            <span className="text-sm">John Doe</span>
                          </div>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign Out
                          </Button>
                        </div>
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Collapsed Sidebar */}
              <Card>
                <CardHeader>
                  <CardTitle>Collapsed Sidebar</CardTitle>
                  <CardDescription>
                    Compact sidebar that can be toggled to save space
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-lg overflow-hidden">
                    <Sidebar
                      collapsed={true}
                      header={
                        <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">N</span>
                        </div>
                      }
                      items={sidebarItems}
                      footer={
                        <div className="flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Breadcrumb Component */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Breadcrumb Component</h2>
              <p className="text-muted-foreground">Navigation trail showing current location</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Default Breadcrumb</CardTitle>
                  <CardDescription>Standard breadcrumb with chevron separators</CardDescription>
                </CardHeader>
                <CardContent>
                  <Breadcrumb items={breadcrumbItems} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Slash Separator</CardTitle>
                  <CardDescription>Breadcrumb with slash separators</CardDescription>
                </CardHeader>
                <CardContent>
                  <Breadcrumb items={breadcrumbItems} separator="slash" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dot Separator</CardTitle>
                  <CardDescription>Breadcrumb with dot separators</CardDescription>
                </CardHeader>
                <CardContent>
                  <Breadcrumb items={breadcrumbItems} separator="dot" />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tabs Component */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Tabs Component</h2>
              <p className="text-muted-foreground">Organize content into tabbed interfaces</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Default Tabs</CardTitle>
                  <CardDescription>
                    Standard tabs with icons and content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" items={tabItems} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Tabs</CardTitle>
                  <CardDescription>
                    Tabs with card styling and pill indicators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs variant="card" defaultValue="overview" items={tabItems} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Underline Tabs</CardTitle>
                  <CardDescription>
                    Tabs with underline styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs variant="outline" defaultValue="overview">
                    <div className="flex border-b border-border">
                      <button className="px-4 py-2 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                        Overview
                      </button>
                      <button className="px-4 py-2 border-b-2 border-transparent hover:border-primary text-sm font-medium">
                        Analytics
                      </button>
                      <button className="px-4 py-2 border-b-2 border-primary text-sm font-medium">
                        Settings
                      </button>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">Settings</h3>
                      <p className="text-muted-foreground">
                        Configure your application settings and preferences.
                      </p>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Accordion Component */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Accordion Component</h2>
              <p className="text-muted-foreground">Collapsible content sections</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Default Accordion</CardTitle>
                  <CardDescription>
                    Standard accordion with single selection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible items={accordionItems} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Accordion</CardTitle>
                  <CardDescription>
                    Accordion with card styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion variant="card" type="multiple" items={accordionItems} />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Separators and Dividers */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Separators & Dividers</h2>
              <p className="text-muted-foreground">Visual separators for content organization</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Separator Variants</CardTitle>
                <CardDescription>
                  Different separator styles and orientations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Horizontal Separators</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Default</p>
                      <Separator />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Muted</p>
                      <Separator variant="muted" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Subtle</p>
                      <Separator variant="subtle" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Strong</p>
                      <Separator variant="strong" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Dividers with Text</h4>
                  <div className="space-y-4">
                    <Divider />
                    <Divider text="OR" />
                    <Divider text="Continue with" />
                    <Divider variant="muted" text="Section Break" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Vertical Separators</h4>
                  <div className="flex items-center space-x-4 h-20">
                    <span>Left</span>
                    <Separator orientation="vertical" />
                    <span>Center</span>
                    <Separator orientation="vertical" variant="muted" />
                    <span>Right</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Layout Examples */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Layout Components</h2>
              <p className="text-muted-foreground">Complete layout system for organizing content</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sidebar Layout</CardTitle>
                <CardDescription>
                  Layout with sidebar and main content area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 border rounded-lg overflow-hidden">
                  <Layout variant="sidebar">
                    <LayoutMain variant="sidebar">
                      <LayoutSidebar size="sm">
                        <div className="p-4">
                          <h3 className="font-semibold mb-4">Sidebar</h3>
                          <nav className="space-y-2">
                            <a href="#" className="block px-3 py-2 text-sm hover:bg-accent rounded">Dashboard</a>
                            <a href="#" className="block px-3 py-2 text-sm hover:bg-accent rounded">Analytics</a>
                            <a href="#" className="block px-3 py-2 text-sm hover:bg-accent rounded">Settings</a>
                          </nav>
                        </div>
                      </LayoutSidebar>
                      <LayoutContent>
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
                          <p className="text-muted-foreground mb-4">
                            This is the main content area. It takes up the remaining space next to the sidebar.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg">
                              <h3 className="font-semibold">Card 1</h3>
                              <p className="text-sm text-muted-foreground">Content here</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h3 className="font-semibold">Card 2</h3>
                              <p className="text-sm text-muted-foreground">Content here</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <h3 className="font-semibold">Card 3</h3>
                              <p className="text-sm text-muted-foreground">Content here</p>
                            </div>
                          </div>
                        </div>
                      </LayoutContent>
                    </LayoutMain>
                  </Layout>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Container Layout</CardTitle>
                <CardDescription>
                  Centered container with responsive max-width
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Container size="sm" centered>
                    <div className="p-6 border rounded-lg text-center">
                      <h3 className="font-semibold mb-2">Small Container</h3>
                      <p className="text-sm text-muted-foreground">Max width: 2xl (672px)</p>
                    </div>
                  </Container>

                  <Container size="md" centered>
                    <div className="p-6 border rounded-lg text-center">
                      <h3 className="font-semibold mb-2">Medium Container</h3>
                      <p className="text-sm text-muted-foreground">Max width: 4xl (896px)</p>
                    </div>
                  </Container>

                  <Container size="lg" centered>
                    <div className="p-6 border rounded-lg text-center">
                      <h3 className="font-semibold mb-2">Large Container</h3>
                      <p className="text-sm text-muted-foreground">Max width: 6xl (1152px)</p>
                    </div>
                  </Container>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
    </div>
  );
}
