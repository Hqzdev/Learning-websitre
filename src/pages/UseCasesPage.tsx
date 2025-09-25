import { ArrowRight, Users, FileText, ShoppingCart, Stethoscope, Scale, TrendingUp, Building } from 'lucide-react'

const UseCasesPage = () => {
  const useCases = [
    {
      icon: Stethoscope,
      title: 'Healthcare & Medicine',
      description: 'AI-powered diagnostic tools, patient data analysis, and medical research assistance.',
      examples: [
        'Medical image analysis and diagnosis',
        'Patient symptom assessment',
        'Drug interaction checking',
        'Medical literature research'
      ],
      benefits: [
        'Reduced diagnostic time by 60%',
        'Improved accuracy in early detection',
        'Automated patient data processing',
        'Enhanced research capabilities'
      ],
      color: 'text-green-600'
    },
    {
      icon: Scale,
      title: 'Legal Services',
      description: 'Document review, legal research, contract analysis, and case preparation.',
      examples: [
        'Contract review and analysis',
        'Legal document summarization',
        'Case law research',
        'Compliance monitoring'
      ],
      benefits: [
        '40 hours saved per week on document review',
        '99% accuracy in contract analysis',
        'Faster case preparation',
        'Reduced legal research time'
      ],
      color: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'Customer service automation, product recommendations, and inventory management.',
      examples: [
        '24/7 customer support chatbots',
        'Personalized product recommendations',
        'Inventory demand forecasting',
        'Price optimization'
      ],
      benefits: [
        '30% increase in customer satisfaction',
        '25% boost in sales conversion',
        'Reduced support costs by 50%',
        'Improved inventory turnover'
      ],
      color: 'text-purple-600'
    },
    {
      icon: Building,
      title: 'Finance & Banking',
      description: 'Risk assessment, fraud detection, customer service, and financial analysis.',
      examples: [
        'Credit risk assessment',
        'Fraud detection and prevention',
        'Customer service automation',
        'Investment analysis'
      ],
      benefits: [
        '90% reduction in false positives',
        'Real-time fraud detection',
        'Improved customer experience',
        'Enhanced risk management'
      ],
      color: 'text-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Sales',
      description: 'Lead generation, content creation, customer segmentation, and campaign optimization.',
      examples: [
        'Automated lead scoring',
        'Content generation for campaigns',
        'Customer behavior analysis',
        'Sales forecasting'
      ],
      benefits: [
        '40% increase in lead quality',
        '50% faster content creation',
        'Improved campaign ROI',
        'Better customer targeting'
      ],
      color: 'text-red-600'
    },
    {
      icon: FileText,
      title: 'Education & Training',
      description: 'Personalized learning, content creation, student assessment, and tutoring.',
      examples: [
        'Personalized learning paths',
        'Automated essay grading',
        'Interactive tutoring systems',
        'Content generation for courses'
      ],
      benefits: [
        'Personalized learning experience',
        'Reduced grading time by 70%',
        'Improved student engagement',
        'Scalable tutoring solutions'
      ],
      color: 'text-indigo-600'
    }
  ]

  const successStories = [
    {
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Manual medical image analysis was time-consuming and error-prone',
      solution: 'Implemented AI-powered diagnostic tools using Cognify',
      results: [
        '60% reduction in analysis time',
        '95% accuracy in early disease detection',
        'Processed 10,000+ images daily'
      ],
      quote: 'Cognify transformed our diagnostic capabilities. We can now process medical images faster and more accurately than ever before.',
      author: 'Dr. Sarah Williams, Chief Medical Officer'
    },
    {
      company: 'Legal Associates',
      industry: 'Legal',
      challenge: 'Document review was consuming 40+ hours per week',
      solution: 'Deployed AI document analysis system',
      results: [
        '40 hours saved per week',
        '99% accuracy in contract analysis',
        'Faster case preparation'
      ],
      quote: 'The AI system handles document review with incredible accuracy. Our lawyers can now focus on strategy instead of paperwork.',
      author: 'John Mitchell, Senior Partner'
    },
    {
      company: 'RetailMax',
      industry: 'E-commerce',
      challenge: 'Customer service was overwhelmed with repetitive inquiries',
      solution: 'Implemented AI chatbot for customer support',
      results: [
        '30% increase in customer satisfaction',
        '50% reduction in support costs',
        '24/7 customer service availability'
      ],
      quote: 'Our AI chatbot handles 80% of customer inquiries instantly. Customer satisfaction has never been higher.',
      author: 'Lisa Chen, Customer Success Manager'
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
              <a href="/cases" className="text-black font-medium">Use Cases</a>
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
              Use Cases
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how businesses across industries are using Cognify 
              to solve real-world problems and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-2xl mr-4`}>
                      <Icon className={`h-6 w-6 ${useCase.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-black">{useCase.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-black mb-3">Examples</h3>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-black mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real results from real companies</p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-gray-600">
                          {story.company.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black">{story.company}</h3>
                        <p className="text-gray-600">{story.industry}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-2">Challenge</h4>
                      <p className="text-gray-600 mb-4">{story.challenge}</p>
                      
                      <h4 className="font-semibold text-black mb-2">Solution</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-700 italic mb-2">"{story.quote}"</p>
                      <p className="text-sm text-gray-600">— {story.author}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-4">Results</h4>
                    <div className="space-y-4">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies already using Cognify to solve their challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="btn-primary">
                Start Your Journey
              </a>
              <a href="/resources" className="btn-secondary">
                View Resources
                <ArrowRight className="h-4 w-4 ml-2" />
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

export default UseCasesPage
