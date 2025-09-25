import { MapPin, Clock, Users, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of our core AI platform and machine learning infrastructure.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience with ML frameworks',
        'Experience with large language models',
        'Strong Python and TensorFlow/PyTorch skills'
      ],
      benefits: ['$150k - $200k', 'Equity', 'Health Insurance', 'Remote Work']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and roadmap for our AI platform.',
      requirements: [
        '3+ years product management experience',
        'Experience with B2B SaaS products',
        'Strong analytical and communication skills',
        'Technical background preferred'
      ],
      benefits: ['$120k - $160k', 'Equity', 'Health Insurance', 'Flexible Hours']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and intuitive user interfaces for our AI platform.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Experience with modern CSS frameworks',
        'Strong UX/UI design sense',
        'Experience with data visualization'
      ],
      benefits: ['$100k - $140k', 'Equity', 'Health Insurance', 'Learning Budget']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise with AWS/GCP/Azure',
        'Experience with Kubernetes',
        'Strong automation and scripting skills'
      ],
      benefits: ['$130k - $170k', 'Equity', 'Health Insurance', 'Conference Budget']
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Help customers succeed with our AI platform and drive adoption.',
      requirements: [
        '2+ years customer success experience',
        'Experience with technical products',
        'Strong communication skills',
        'Analytical mindset'
      ],
      benefits: ['$80k - $110k', 'Equity', 'Health Insurance', 'Remote Work']
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead our marketing efforts and drive customer acquisition.',
      requirements: [
        '3+ years marketing experience',
        'Experience with B2B SaaS marketing',
        'Strong content creation skills',
        'Analytical and creative mindset'
      ],
      benefits: ['$90k - $120k', 'Equity', 'Health Insurance', 'Marketing Budget']
    }
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries and equity participation'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours'
    },
    {
      title: 'Learning & Development',
      description: 'Conference budget and learning opportunities'
    },
    {
      title: 'Team Events',
      description: 'Regular team building and company events'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take time off when you need it'
    }
  ]

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and creative problem-solving'
    },
    {
      title: 'Collaborative Environment',
      description: 'Work with talented people who share your passion'
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and personal development'
    },
    {
      title: 'Impact Driven',
      description: 'Build products that make a real difference'
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI. We're looking for talented individuals 
              who share our passion for making AI accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Open Positions
              </button>
              <button className="btn-secondary">
                Learn About Our Culture
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">Join our growing team</p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                  </div>
                  <button className="btn-primary">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-3">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">We take care of our team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-2xl mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Culture</h2>
            <p className="text-lg text-gray-600">What makes Cognify a great place to work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Numbers that matter</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50%</div>
              <div className="text-gray-600">Remote Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">4.8</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Simple and transparent</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Apply</h3>
              <p className="text-gray-600">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Initial Review</h3>
              <p className="text-gray-600">We review your application within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Interview</h3>
              <p className="text-gray-600">Video interview with the hiring manager</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">Decision</h3>
              <p className="text-gray-600">We make a decision within 1 week</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented people. Send us your resume!
          </p>
          <button className="btn-secondary bg-white text-black hover:bg-gray-100">
            Send Resume
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
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

export default CareersPage
