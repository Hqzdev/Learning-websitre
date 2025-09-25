import { Users, Target, Handshake, Award, Globe, Zap } from 'lucide-react'

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Former AI researcher at Google, 10+ years in machine learning',
      image: 'AC'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Ex-OpenAI engineer, PhD in Computer Science from MIT',
      image: 'SJ'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Former product lead at Anthropic, expert in AI product design',
      image: 'MR'
    },
    {
      name: 'Emily Zhang',
      role: 'Head of Engineering',
      bio: 'Ex-Meta AI engineer, specialist in large language models',
      image: 'EZ'
    }
  ]

  const partners = [
    { name: 'OpenAI', logo: 'OpenAI' },
    { name: 'Anthropic', logo: 'Anthropic' },
    { name: 'Google Cloud', logo: 'Google' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'AWS', logo: 'AWS' },
    { name: 'NVIDIA', logo: 'NVIDIA' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Democratize AI by making advanced machine learning accessible to everyone, regardless of technical expertise.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI, constantly improving our models and platform.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Complex AI technology should be simple to use. We believe in intuitive interfaces and clear documentation.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We\'re building tools that solve real-world problems and create meaningful change across industries.'
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
              <a href="/about" className="text-black font-medium">About</a>
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
              About Cognify
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to make AI accessible to everyone. 
              Our platform empowers businesses and individuals to build, 
              train, and deploy AI models without the complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">What drives us forward</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-2xl mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The people behind Cognify</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">{member.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">Trusted by industry leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 border border-gray-200 rounded-2xl hover:border-black transition-colors">
                <span className="text-lg font-semibold text-gray-600">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that matter</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50,000+</div>
              <div className="text-gray-600">Models Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">1M+</div>
              <div className="text-gray-600">API Calls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your AI models today
          </p>
          <a href="/register" className="btn-secondary bg-white text-black hover:bg-gray-100">
            Get Started Free
          </a>
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

export default AboutPage
