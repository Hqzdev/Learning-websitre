import { DollarSign, Users, TrendingUp, CheckCircle, ArrowRight, Copy, ExternalLink } from 'lucide-react'

const AffiliatePage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn 30% Commission',
      description: 'Get 30% commission on every successful referral for the first year'
    },
    {
      icon: Users,
      title: 'Unlimited Referrals',
      description: 'No limit on how many customers you can refer'
    },
    {
      icon: TrendingUp,
      title: 'Recurring Commissions',
      description: 'Earn commissions on subscription renewals for up to 24 months'
    },
    {
      icon: CheckCircle,
      title: 'Easy Tracking',
      description: 'Real-time dashboard to track your referrals and earnings'
    }
  ]

  const steps = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Create your affiliate account and get approved within 24 hours'
    },
    {
      step: '2',
      title: 'Get Your Link',
      description: 'Receive your unique referral link and marketing materials'
    },
    {
      step: '3',
      title: 'Share & Earn',
      description: 'Share your link and start earning commissions on every conversion'
    }
  ]

  const marketingMaterials = [
    {
      title: 'Banner Ads',
      description: 'High-converting banner ads in multiple sizes',
      formats: ['728x90', '300x250', '160x600', '320x50']
    },
    {
      title: 'Social Media Posts',
      description: 'Ready-to-use posts for LinkedIn, Twitter, and Facebook',
      formats: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram']
    },
    {
      title: 'Email Templates',
      description: 'Professional email templates for your campaigns',
      formats: ['HTML', 'Plain Text', 'Newsletter']
    },
    {
      title: 'Landing Pages',
      description: 'Custom landing pages with your affiliate tracking',
      formats: ['Custom Domain', 'Tracking Pixels', 'A/B Testing']
    }
  ]

  const faq = [
    {
      question: 'How much can I earn?',
      answer: 'Earnings depend on your referrals. Top affiliates earn $10,000+ monthly. With our 30% commission rate and recurring commissions, the earning potential is significant.'
    },
    {
      question: 'When do I get paid?',
      answer: 'We pay commissions monthly via PayPal, bank transfer, or cryptocurrency. Minimum payout is $50.'
    },
    {
      question: 'How long do I earn commissions?',
      answer: 'You earn commissions for 24 months on each referral. If a customer stays for 2 years, you earn commissions the entire time.'
    },
    {
      question: 'Can I use paid advertising?',
      answer: 'Yes, you can use paid advertising as long as you comply with our advertising guidelines and don\'t use trademarked terms in your ads.'
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
              Affiliate Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Earn up to 30% commission by referring customers to Cognify. 
              Join our partner program and start earning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Join Affiliate Program
              </button>
              <button className="btn-secondary">
                View Terms & Conditions
                <ExternalLink className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Why Join Our Affiliate Program?</h2>
            <p className="text-lg text-gray-600">Competitive commissions and comprehensive support</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started in just 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Commission Structure</h2>
            <p className="text-lg text-gray-600">Transparent and competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-black mb-2">Basic Plan</h3>
              <div className="text-4xl font-bold text-black mb-4">30%</div>
              <p className="text-gray-600 mb-6">Commission on $49/month</p>
              <div className="text-sm text-gray-500">
                Earn $14.70 per referral per month
              </div>
            </div>
            <div className="card text-center ring-2 ring-black">
              <h3 className="text-2xl font-bold text-black mb-2">Pro Plan</h3>
              <div className="text-4xl font-bold text-black mb-4">30%</div>
              <p className="text-gray-600 mb-6">Commission on $99/month</p>
              <div className="text-sm text-gray-500">
                Earn $29.70 per referral per month
              </div>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-black mb-4">30%</div>
              <p className="text-gray-600 mb-6">Commission on $299/month</p>
              <div className="text-sm text-gray-500">
                Earn $89.70 per referral per month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Marketing Materials</h2>
            <p className="text-lg text-gray-600">Everything you need to promote Cognify</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingMaterials.map((material, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-black mb-3">{material.title}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <div className="flex flex-wrap gap-2">
                  {material.formats.map((format, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Affiliate Dashboard</h2>
            <p className="text-lg text-gray-600">Track your performance in real-time</p>
          </div>
          <div className="card">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">127</div>
                <div className="text-gray-600">Total Referrals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">$3,240</div>
                <div className="text-gray-600">Total Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">12.5%</div>
                <div className="text-gray-600">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">$25.50</div>
                <div className="text-gray-600">Avg. Commission</div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Your Referral Link</h3>
              <div className="flex items-center space-x-4">
                <code className="flex-1 bg-white px-4 py-2 rounded-lg text-sm">
                  https://cognify.com/ref/your-affiliate-id
                </code>
                <button className="btn-secondary text-sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our affiliate program</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-black mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our affiliate program and start earning commissions today
          </p>
          <button className="btn-secondary bg-white text-black hover:bg-gray-100">
            Apply Now
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

export default AffiliatePage
