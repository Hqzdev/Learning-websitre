import { CheckCircle, Clock, Star, ArrowRight, Calendar } from 'lucide-react'

const RoadmapPage = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      title: 'Platform Launch',
      description: 'Initial release of Cognify platform with basic AI model training capabilities',
      features: [
        'User authentication and dashboard',
        'Basic model training (2B, 7B)',
        'File upload and processing',
        'API access and documentation'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      title: 'Enhanced Training',
      description: 'Advanced training features and improved model performance',
      features: [
        '13B and 16B model support',
        'Advanced training parameters',
        'Model fine-tuning capabilities',
        'Training progress visualization'
      ]
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      title: 'Enterprise Features',
      description: 'Enterprise-grade features for large organizations',
      features: [
        'Team collaboration tools',
        'Advanced analytics dashboard',
        'Custom model deployment',
        'Enterprise security features'
      ]
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      title: 'AI Marketplace',
      description: 'Community-driven AI model marketplace',
      features: [
        'Public model sharing',
        'Model monetization',
        'Community ratings and reviews',
        'Pre-trained model library'
      ]
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      title: 'Advanced AI Features',
      description: 'Cutting-edge AI capabilities and integrations',
      features: [
        'Multimodal AI support (text, image, audio)',
        'Real-time model inference',
        'AutoML capabilities',
        'Advanced model optimization'
      ]
    },
    {
      quarter: 'Q2 2025',
      status: 'planned',
      title: 'Global Expansion',
      description: 'International expansion and localization',
      features: [
        'Multi-language support',
        'Regional data centers',
        'Local compliance features',
        'International partnerships'
      ]
    }
  ]

  const upcomingFeatures = [
    {
      title: 'Real-time Collaboration',
      description: 'Work together on AI models with your team in real-time',
      priority: 'High',
      timeline: 'Q3 2024'
    },
    {
      title: 'Visual Model Builder',
      description: 'Drag-and-drop interface for building AI models without code',
      priority: 'Medium',
      timeline: 'Q4 2024'
    },
    {
      title: 'Mobile App',
      description: 'Native mobile apps for iOS and Android',
      priority: 'Medium',
      timeline: 'Q1 2025'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep insights into model performance and usage patterns',
      priority: 'High',
      timeline: 'Q3 2024'
    },
    {
      title: 'API Rate Limiting',
      description: 'Intelligent rate limiting and usage optimization',
      priority: 'Low',
      timeline: 'Q4 2024'
    },
    {
      title: 'Model Versioning',
      description: 'Version control for your AI models with rollback capabilities',
      priority: 'High',
      timeline: 'Q3 2024'
    }
  ]

  const communityRequests = [
    {
      title: 'GraphQL API Support',
      votes: 127,
      status: 'Under Review',
      description: 'Add GraphQL support for more flexible API queries'
    },
    {
      title: 'Docker Integration',
      votes: 89,
      status: 'Planned',
      description: 'Native Docker support for model deployment'
    },
    {
      title: 'Webhook Support',
      votes: 156,
      status: 'In Development',
      description: 'Real-time notifications for training completion'
    },
    {
      title: 'Batch Processing',
      votes: 203,
      status: 'Planned',
      description: 'Process large datasets in batches for better performance'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case 'in-progress':
        return <Clock className="h-6 w-6 text-yellow-600" />
      case 'planned':
        return <Star className="h-6 w-6 text-gray-400" />
      default:
        return <Clock className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'planned':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
              <a href="/resources" className="text-gray-600 hover:text-black">Resources</a>
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
              Product Roadmap
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See what we're building and what's coming next. 
              We're committed to transparency and keeping our community informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Request a Feature
              </button>
              <button className="btn-secondary">
                Join Our Community
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Development Timeline</h2>
            <p className="text-lg text-gray-600">Our journey and future plans</p>
          </div>
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="card">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    {getStatusIcon(item.status)}
                    <div className="ml-4">
                      <div className="flex items-center space-x-4">
                        <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{item.quarter}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <div>
                  <h4 className="font-semibold text-black mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Upcoming Features</h2>
            <p className="text-lg text-gray-600">What we're working on next</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    feature.priority === 'High' ? 'bg-red-100 text-red-800' :
                    feature.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {feature.priority} Priority
                  </span>
                  <span className="text-sm text-gray-500">{feature.timeline}</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Requests */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Community Requests</h2>
            <p className="text-lg text-gray-600">Features requested by our community</p>
          </div>
          <div className="space-y-4">
            {communityRequests.map((request, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-black">{request.title}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        request.status === 'In Development' ? 'bg-green-100 text-green-800' :
                        request.status === 'Planned' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{request.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-black">{request.votes}</div>
                      <div className="text-xs text-gray-500">votes</div>
                    </div>
                    <button className="btn-secondary text-sm">
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Have a Feature Request?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We value your input. Submit your ideas and help shape the future of Cognify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Submit Feature Request
              </button>
              <button className="btn-secondary">
                Join Discussion
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
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

export default RoadmapPage
