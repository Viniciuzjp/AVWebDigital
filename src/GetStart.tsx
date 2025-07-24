"use client";

import { Button, Spinner } from "@av-digital/components";
import "@av-digital/components/styles";
import { Link } from "react-router-dom";
import {
  Copy,
  CheckCircle,
  ArrowRight,
  Package,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function GettingStarted() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="max-h-screen bg-white overflow-y-scroll">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AV</span>
              </div>
              <span className="font-semibold text-lg">
                AV Digital Components
              </span>
            </div>
            <nav className=" md:flex space-x-8">
              <a href="https://github.com/Viniciuzjp/AVDigital_components.git" className="text-gray-600 hover:text-gray-900">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-screen overflow-y-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <nav className="sticky top-8 space-y-1">
              <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wide mb-4">
                Getting Started
              </h3>
              <a
                href="#overview"
                className="block px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md"
              >
                Overview
              </a>
              <a
                href="#installation"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Installation
              </a>
              <a
                href="#setup"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Setup
              </a>
              <a
                href="#first-component"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                First Component
              </a>
              <a
                href="#customization"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Customization
              </a>
              <a
                href="#next-steps"
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Next Steps
              </a>
              <Link
                to={"/Button"}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Button
              </Link>
              <Link
                to={"/Spinner"}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Spinner
              </Link>
            </nav>
          </aside>

          <main className="lg:col-span-3">
            {/* Hero Section */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Getting Started
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Welcome to AV Digital Components! Get up and running in minutes
                with our modern, accessible React component library.
              </p>

              {/* Quick Demo */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Try it now
                </h3>
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <div className="flex items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-sm text-gray-600">Loading...</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  These components are ready to use in your React application
                  with just a few lines of code.
                </p>
              </div>
            </div>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why AV Digital Components?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Easy to Use</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Simple API design with sensible defaults. Get started in
                    minutes, not hours.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      Customizable
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    CSS variables and className support for easy theming and
                    customization.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      TypeScript Ready
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Built with TypeScript for better developer experience and
                    type safety.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Lightweight</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Minimal bundle size with tree-shaking support. Only import
                    what you need.
                  </p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Installation
              </h2>
              <p className="text-gray-600 mb-6">
                Install AV Digital Components using your preferred package
                manager:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    npm
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard("npm install @av-digital/components", 1)
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 1 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm">
                      <code>npm install @av-digital/components</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    yarn
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard("yarn add @av-digital/components", 2)
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 2 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm">
                      <code>yarn add @av-digital/components</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    pnpm
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard("pnpm add @av-digital/components", 3)
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 3 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm">
                      <code>pnpm add @av-digital/components</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="setup" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Setup</h2>
              <p className="text-gray-600 mb-6">
                After installation, you need to import the CSS styles in your
                application:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Import Styles
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Add the following import to your main CSS file or at the
                    root of your application:
                  </p>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "import '@av-digital/components/styles'",
                          4
                        )
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 4 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm">
                      <code>import '@av-digital/components/styles'</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    💡 Pro Tip
                  </h4>
                  <p className="text-blue-800 text-sm">
                    For Next.js applications, add the import to your{" "}
                    <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                      _app.tsx
                    </code>{" "}
                    or{" "}
                    <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                      layout.tsx
                    </code>{" "}
                    file. For Create React App, add it to your{" "}
                    <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                      index.tsx
                    </code>{" "}
                    or{" "}
                    <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                      App.tsx
                    </code>{" "}
                    file.
                  </p>
                </div>
              </div>
            </section>

            {/* First Component */}
            <section id="first-component" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your First Component
              </h2>
              <p className="text-gray-600 mb-6">
                Let's create a simple example using the Button component:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Basic Example
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Button } from "@av-digital/components"
import '@av-digital/components/styles'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to AV Digital!</h1>
      <div className="space-x-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  )
}

export default App`,
                          5
                        )
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 5 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`import { Button } from "@av-digital/components"
import '@av-digital/components/styles'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to AV Digital!</h1>
      <div className="space-x-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  )
}

export default App`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Result
                  </h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                    <h1 className="text-2xl font-bold mb-4">
                      Welcome to AV Digital!
                    </h1>
                    <div className="space-x-4">
                      <Button variant="primary">Get Started</Button>
                      <Button variant="secondary">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Interactive Example
              </h2>
              <p className="text-gray-600 mb-6">
                Here's a more advanced example with state management and the
                Spinner component:
              </p>

              <div className="space-y-6">
                <div className="bg-black rounded-lg p-4 relative">
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import { Button, Spinner } from "@av-digital/components"
import '@av-digital/components/styles'
import { useState } from 'react'

function LoadingExample() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="p-8">
      <Button 
        variant="primary" 
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Loading...
          </>
        ) : (
          'Click me!'
        )}
      </Button>
    </div>
  )
}`,
                        6
                      )
                    }
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedStep === 6 ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`import { Button, Spinner } from "@av-digital/components"
import '@av-digital/components/styles'
import { useState } from 'react'

function LoadingExample() {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="p-8">
      <Button 
        variant="primary" 
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Spinner size="sm" className="mr-2" />
            Loading...
          </>
        ) : (
          'Click me!'
        )}
      </Button>
    </div>
  )
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Try it yourself
                  </h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                    <InteractiveExample />
                  </div>
                </div>
              </div>
            </section>

            <section id="customization" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Customization
              </h2>
              <p className="text-gray-600 mb-6">
                AV Digital Components can be easily customized using CSS
                variables:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    CSS Variables
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Add these variables to your CSS file to customize the
                    default colors:
                  </p>
                  <div className="bg-black rounded-lg p-4 relative">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `:root {
  /* Button Colors */
  --root-avdig-button-primary-background: #3b82f6;
  --root-avdig-button-primary-color: #ffffff;
  --root-avdig-button-secondary-background: #6b7280;
  --root-avdig-button-secondary-color: #ffffff;
  
  /* Spinner Colors */
  --root-avdig-spinner-primary-color: #3b82f6;
  --root-avdig-spinner-secondary-color: #6b7280;
}`,
                          7
                        )
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedStep === 7 ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      <code>{`:root {
  /* Button Colors */
  --root-avdig-button-primary-background: #3b82f6;
  --root-avdig-button-primary-color: #ffffff;
  --root-avdig-button-secondary-background: #6b7280;
  --root-avdig-button-secondary-color: #ffffff;
  
  /* Spinner Colors */
  --root-avdig-spinner-primary-color: #3b82f6;
  --root-avdig-spinner-secondary-color: #6b7280;
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-green-900 mb-2">
                    🎨 Theming Tip
                  </h4>
                  <p className="text-green-800 text-sm">
                    You can also use Tailwind CSS classes with the{" "}
                    <code className="bg-green-100 px-2 py-1 rounded text-xs">
                      className
                    </code>{" "}
                    prop for quick styling adjustments.
                  </p>
                </div>
              </div>
            </section>

            <section id="next-steps" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Next Steps
              </h2>
              <p className="text-gray-600 mb-8">
                Now that you have AV Digital Components set up, here's what you
                can explore next:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Explore Components
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Check out all available components with detailed examples
                    and API documentation.
                  </p>
                  <Link to="/Button">
                    <Button variant="primary" className="w-full">
                      View Components
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Examples & Templates
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Browse real-world examples and copy-paste templates for
                    common use cases.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Browse Examples
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Customization Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Learn advanced theming techniques and how to create your own
                    design system.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Learn Theming
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Community & Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join our community, report issues, or contribute to the
                    project on GitHub.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Join Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quick Reference
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Available Components
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Form Elements
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Button</li>
                      <li>• Input (coming soon)</li>
                      <li>• Select (coming soon)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Spinner</li>
                      <li>• Alert (coming soon)</li>
                      <li>• Toast (coming soon)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Layout</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Card (coming soon)</li>
                      <li>• Modal (coming soon)</li>
                      <li>• Grid (coming soon)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AV</span>
                </div>
                <span className="font-semibold">AV Digital</span>
              </div>
              <p className="text-sm text-gray-600">
                Modern React components for building beautiful user interfaces.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Documentation
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Components
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Theming
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Bug Reports
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 AV Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function InteractiveExample() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      {isLoading ? (
        <>
          <Spinner size="sm" />
          Loading...
        </>
      ) : (
        "Click me!"
      )}
    </Button>
  );
}
