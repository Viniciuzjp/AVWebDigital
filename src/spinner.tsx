"use client";

import { Button, Spinner } from "@av-digital/components";
import "@av-digital/components/styles";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SpinnerDocumentation() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Spinner</h1>
              <p className="text-xl text-gray-600 mb-8">
                A Spinner indicator component used to indicate during
                asynchronous operations and data loading states.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
                <div className="flex flex-wrap gap-8 items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner />
                    <span className="text-sm text-gray-600">Default</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-sm text-gray-600">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-sm text-gray-600">Large</span>
                  </div>
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
                  <code>{`import { Spinner } from "@av-digital/components"
import '@av-digital/components/styles'

function App() {
  return <Spinner />
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
                        The size of the spinner
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Variant
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          'primary' | 'secondary'
                        </code>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Primary
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        The variant of the spinner
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CSS Variables
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The following variables can be used to override the default
                colors.
                <br />
                You can insert variables in your main css file
              </p>
              <pre className="text-green-400 bg-black rounded-md p-4 mb-8 text-sm overflow-x-auto">
                <code>{`:root {
  --root-avdig-spinner-primary-color: #3b82f6;
  --root-avdig-spinner-secondary-color: #6b7280;
  --root-avdig-spinner-size-sm: 16px;
  --root-avdig-spinner-size-md: 24px;
  --root-avdig-spinner-size-lg: 32px;
  --root-avdig-spinner-border-width: 2px;
}`}</code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Examples
              </h2>

              {/* Basic Usage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Basic Usage
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Spinner />`}</code>
                  </pre>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Sizes
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-8 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="sm" />
                      <span className="text-sm text-gray-600">
                        Small (48px)
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="md" />
                      <span className="text-sm text-gray-600">
                        Medium (64px)
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Spinner size="lg" />
                      <span className="text-sm text-gray-600">
                        Large (80px)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  With Loading Text
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-3">
                      <Spinner />
                      <span className="text-sm text-gray-600">Loading...</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Spinner />
                      <span className="text-gray-700">
                        Processing your request
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Spinner />
                      <span className="text-lg text-gray-800">Please wait</span>
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<div className="flex items-center gap-3">
  <Spinner size="sm" />
  <span>Loading...</span>
</div>`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  In Buttons
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <Button variant="primary" onClick={handleAsyncAction}>
                      {isLoading ? (
                        <>
                          <Spinner />
                          Loading...
                        </>
                      ) : (
                        "Start Loading"
                      )}
                    </Button>
                    <Button variant="secondary">
                      <Spinner variant={"secondary"} />
                      Processing
                    </Button>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner size="sm" className="mr-2" />
      Loading...
    </>
  ) : (
    'Submit'
  )}
</Button>`}</code>
                  </pre>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Centered Loading State
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-4">
                  <div className="h-32 flex flex-col items-center justify-center gap-3">
                    <Spinner />
                    <p className="text-gray-600">Loading content...</p>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`<div className="h-32 flex flex-col items-center justify-center gap-3">
  <Spinner size="lg" />
  <p className="text-gray-600">Loading content...</p>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Form Submissions
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Show loading state while forms are being processed
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <Button variant="primary" className="w-full">
                      <Spinner />
                      Submitting...
                    </Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Data Loading
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Indicate when content is being fetched from an API
                  </p>
                  <div className="bg-gray-50 p-4 rounded flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Spinner />
                      <span className="text-sm text-gray-600">
                        Loading data...
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Page Transitions
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Show loading during navigation or route changes
                  </p>
                  <div className="bg-gray-50 p-4 rounded flex justify-center">
                    <Spinner />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Async Operations
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Provide feedback during file uploads or processing
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex items-center gap-3">
                      <Spinner />
                      <div className="flex-1">
                        <div className="text-sm text-gray-700">
                          Uploading file...
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <strong>Do:</strong> Use spinners for operations that
                        take more than 1 second
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-green-400 bg-green-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>Do:</strong> Provide descriptive text alongside
                        the spinner when possible
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-green-400 bg-green-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        <strong>Do:</strong> Use appropriate sizes - small for
                        buttons, large for page loading
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-red-400 bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Don't:</strong> Use spinners for very quick
                        operations (under 500ms)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 border-red-400 bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        <strong>Don't:</strong> Show multiple spinners for the
                        same operation
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
