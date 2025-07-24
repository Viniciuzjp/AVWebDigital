import { Button } from "@av-digital/components";
import "@av-digital/components/styles";
import { Copy, ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./App.css";
export default function App() {
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
            <nav className="hidden md:flex space-x-8">
              <a
                href="https://github.com/Viniciuzjp/AVDigital_components.git"
                className="text-gray-600 hover:text-gray-900"
              >
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
                Components
              </h3>
              <Link
                to={"/"}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Overview
              </Link>
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
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Button</h1>
              <p className="text-xl text-gray-600 mb-8">
                A versatile button component with multiple variants and states
                for user interactions.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
                <div className="flex flex-wrap gap-4 items-center justify-center">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Quick Start</h3>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`import { Button } from "@av-digital/components"
import '@av-digital/components/styles'

function App() {
  return <Button variant="primary">Click me</Button>
}`}</code>
                </pre>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Installation
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <code className="text-sm text-gray-800">
                  npm install @av-digital/components
                </code>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Props</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Prop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Default
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        variant
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          'primary' | 'secondary'
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        'primary'
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        The visual style variant of the button
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        size
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          'sm' | 'md' | 'lg'
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        'md'
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        The size of the button
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        disabled
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          boolean
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Whether the button is disabled
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        loading
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          boolean
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Shows loading spinner when true
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Variables
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The following variables can be used to override the default
                colors.
                <br />
                You can insert variables in your main css file
              </p>
              <pre className="text-green-400 bg-black rounded-md p-4 mb-8 text-sm overflow-x-auto">
                <code>{`:root {
  --root-avdig-button-secondary-background: #ffe600;
  --root-avdig-button-secondary-color: #ffffff;
  --root-avdig-button-primary-background: #00ccff;
  --root-avdig-button-primary-color: #ffffff;
  --root-avdig-button-primary-text-color: #ffffff;
  --root-avdig-button-secondary-text-color: #000000;
}`}</code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Examples
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Variants
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sizes
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary" size="sm">
                      Small
                    </Button>
                    <Button variant="primary" size="md">
                      Medium
                    </Button>
                    <Button variant="primary" size="lg">
                      Large
                    </Button>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  States
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary">Normal</Button>
                    <Button variant="primary">Disabled</Button>
                    <Button variant="primary">Loading</Button>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Button >Normal</Button>
<Button variant="primary" >Disabled</Button>
<Button variant="primary" >Loading</Button>`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  With Icons
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      External Link
                    </Button>
                    <Button variant="secondary">
                      <Code2 className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Button variant="primary">
  <Github className="w-4 h-4 mr-2" />
  GitHub
</Button>`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Best Practices
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 bg-green-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>Do:</strong> Use primary buttons for the main
                        action on a page or section.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-green-400 bg-green-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>Do:</strong> Use loading state for async
                        operations to provide user feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-red-400 bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Don't:</strong> Use multiple primary buttons in
                        the same section.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-red-400 bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Don't:</strong> Use buttons for navigation - use
                        links instead.
                      </p>
                    </div>
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
