import { Link } from 'react-router-dom'
import { Upload, Play, Brain, CheckCircle, Star } from 'lucide-react'

const HomePage = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Data',
      description: 'Upload your documents (docx, pdf, txt, csv) to train your AI model'
    },
    {
      icon: Play,
      title: 'Start Training',
      description: 'Choose your model size and launch the training process'
    },
    {
      icon: Brain,
      title: 'Use Your Model',
      description: 'Test your model and integrate it via API into your applications'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      features: [
        '2B model access',
        '10GB storage',
        '100 API calls/month',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      features: [
        '7B model access',
        '50GB storage',
        '1000 API calls/month',
        'Priority support',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: [
        'All model sizes (up to 16B)',
        'Unlimited storage',
        'Unlimited API calls',
        '24/7 support',
        'Custom integrations',
        'Dedicated infrastructure'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'We built our customer support AI in just 2 hours. The results are incredible.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The API integration was seamless. Our developers love how easy it is to use.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'DataFlow Inc',
      content: 'Finally, a platform that makes AI accessible without the complexity.'
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
              <a href="#features" className="text-gray-600 hover:text-black">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-black">
                Sign In
              </Link>
              <Link to="/register" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Build Your AI in 5 Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose your model, upload your data, train and get answers. 
              Simple, fast, and powerful AI for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                Create Model
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your AI model</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'ring-2 ring-black' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-black mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/register" 
                    className={`w-full block text-center py-3 px-6 rounded-2xl font-medium ${
                      plan.popular 
                        ? 'bg-black text-white hover:bg-gray-800' 
                        : 'border-2 border-black text-black hover:bg-black hover:text-white'
                    } transition-colors`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">Real feedback from real users</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Build Your AI?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of users who are already building with AI</p>
            <Link to="/register" className="btn-primary text-lg px-8 py-4">
              Start Building Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Cognify</h3>
              <p className="text-gray-600">Build, train, and deploy AI models in minutes.</p>
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
              <h4 className="font-semibold text-black mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black">Privacy</a></li>
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

export default HomePage
