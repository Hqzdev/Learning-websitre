import { Book, Video, FileText, Download, ExternalLink, Play, Code, Users } from 'lucide-react'

const ResourcesPage = () => {
  const documentation = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up your first AI model with Cognify',
      type: 'Guide',
      time: '15 min read',
      icon: Book
    },
    {
      title: 'API Reference',
      description: 'Comprehensive API documentation with examples and endpoints',
      type: 'Documentation',
      time: '30 min read',
      icon: Code
    },
    {
      title: 'Best Practices',
      description: 'Learn how to optimize your AI models for better performance',
      type: 'Guide',
      time: '20 min read',
      icon: FileText
    },
    {
      title: 'Security Guidelines',
      description: 'Keep your data and models secure with our security best practices',
      type: 'Security',
      time: '10 min read',
      icon: FileText
    }
  ]

  const tutorials = [
    {
      title: 'Building Your First AI Model',
      description: 'Step-by-step tutorial to create and train your first AI model',
      duration: '12:30',
      difficulty: 'Beginner',
      views: '15.2K',
      icon: Play
    },
    {
      title: 'Advanced Training Techniques',
      description: 'Learn advanced techniques for fine-tuning and optimizing models',
      duration: '18:45',
      difficulty: 'Advanced',
      views: '8.7K',
      icon: Play
    },
    {
      title: 'API Integration Tutorial',
      description: 'How to integrate Cognify API into your applications',
      duration: '25:10',
      difficulty: 'Intermediate',
      views: '12.1K',
      icon: Play
    },
    {
      title: 'Deployment Strategies',
      description: 'Best practices for deploying AI models in production',
      duration: '22:15',
      difficulty: 'Advanced',
      views: '6.3K',
      icon: Play
    }
  ]

  const downloads = [
    {
      title: 'SDK for Python',
      description: 'Official Python SDK for Cognify API',
      version: 'v2.1.0',
      size: '2.3 MB',
      downloads: '15.2K',
      icon: Download
    },
    {
      title: 'SDK for JavaScript',
      description: 'Official JavaScript/Node.js SDK',
      version: 'v1.8.2',
      size: '1.8 MB',
      downloads: '12.7K',
      icon: Download
    },
    {
      title: 'Postman Collection',
      description: 'Pre-configured API requests for testing',
      version: 'v1.0',
      size: '0.5 MB',
      downloads: '8.9K',
      icon: Download
    },
    {
      title: 'Sample Datasets',
      description: 'Ready-to-use datasets for training your models',
      version: 'v1.2',
      size: '45.2 MB',
      downloads: '5.1K',
      icon: Download
    }
  ]

  const community = [
    {
      title: 'Discord Community',
      description: 'Join our Discord server for real-time support and discussions',
      members: '2.5K',
      icon: Users
    },
    {
      title: 'GitHub Repository',
      description: 'Open source examples and community contributions',
      stars: '1.2K',
      icon: Code
    },
    {
      title: 'Stack Overflow',
      description: 'Get help from the community on Stack Overflow',
      questions: '500+',
      icon: ExternalLink
    },
    {
      title: 'Reddit Community',
      description: 'Join discussions on r/CognifyAI',
      members: '3.1K',
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Cognify</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-black">Home</a>
              <a href="/about" className="text-gray-600 hover:text-black">About</a>
              <a href="/blog" className="text-gray-600 hover:text-black">Blog</a>
              <a href="/cases" className="text-gray-600 hover:text-black">Use Cases</a>
              <a href="/resources" className="text-black font-medium">Resources</a>
              <a href="/faq" className="text-gray-600 hover:text-black">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-600 hover:text-black">Sign In</a>
              <a href="/register" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to get started with Cognify. 
              Documentation, tutorials, SDKs, and community resources.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Documentation</h2>
            <p className="text-lg text-gray-600">Comprehensive guides and references</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentation.map((doc, index) => {
              const Icon = doc.icon
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-black mr-3" />
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{doc.time}</span>
                    <button className="text-black hover:text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Video Tutorials</h2>
            <p className="text-lg text-gray-600">Step-by-step video guides</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon
              return (
                <div key={index} className="card">
                  <div className="bg-gray-900 rounded-2xl h-48 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Icon className="h-12 w-12 text-white mx-auto mb-2" />
                      <span className="text-white font-medium">{tutorial.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">{tutorial.views} views</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{tutorial.title}</h3>
                  <p className="text-gray-600">{tutorial.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Downloads</h2>
            <p className="text-lg text-gray-600">SDKs, tools, and sample data</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download, index) => {
              const Icon = download.icon
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-black mr-3" />
                    <span className="text-sm text-gray-500">{download.version}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{download.title}</h3>
                  <p className="text-gray-600 mb-4">{download.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{download.size}</span>
                    <span>{download.downloads} downloads</span>
                  </div>
                  <button className="w-full btn-primary">
                    Download
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Community</h2>
            <p className="text-lg text-gray-600">Connect with other developers and get support</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {community.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-black mr-3" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {item.members || item.stars || item.questions}
                    </span>
                    <button className="text-black hover:text-gray-600">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow our quick start guide to build your first AI model in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn-primary">
                Start Building
              </a>
              <a href="#" className="btn-secondary">
                View Quick Start Guide
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Cognify</h3>
              <p className="text-gray-600">Making AI accessible to everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-black">Blog</a></li>
                <li><a href="/cases" className="text-gray-600 hover:text-black">Use Cases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-600 hover:text-black">FAQ</a></li>
                <li><a href="/resources" className="text-gray-600 hover:text-black">Resources</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">&copy; 2024 Cognify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ResourcesPage
