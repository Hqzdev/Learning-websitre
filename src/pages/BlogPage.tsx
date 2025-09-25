import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const BlogPage = () => {
  const featuredPost = {
    title: 'The Future of AI: What to Expect in 2024',
    excerpt: 'Exploring the latest trends in artificial intelligence and how they will shape the future of technology and business.',
    author: 'Alex Chen',
    date: 'January 15, 2024',
    readTime: '8 min read',
    category: 'AI Trends',
    image: 'Featured'
  }

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right AI Model for Your Business',
      excerpt: 'A comprehensive guide to selecting the perfect AI model based on your specific needs and requirements.',
      author: 'Sarah Johnson',
      date: 'January 12, 2024',
      readTime: '6 min read',
      category: 'Tutorial',
      tags: ['AI Models', 'Business', 'Guide']
    },
    {
      id: 2,
      title: 'Cognify Platform Updates: New Features and Improvements',
      excerpt: 'Discover the latest updates to our platform, including enhanced training capabilities and improved API performance.',
      author: 'Michael Rodriguez',
      date: 'January 10, 2024',
      readTime: '4 min read',
      category: 'Product Updates',
      tags: ['Updates', 'Features', 'Platform']
    },
    {
      id: 3,
      title: 'Case Study: How a Law Firm Automated Document Review',
      excerpt: 'Learn how a leading law firm used Cognify to automate their document review process, saving 40 hours per week.',
      author: 'Emily Zhang',
      date: 'January 8, 2024',
      readTime: '7 min read',
      category: 'Case Study',
      tags: ['Legal', 'Automation', 'Success Story']
    },
    {
      id: 4,
      title: 'Understanding Large Language Models: A Beginner\'s Guide',
      excerpt: 'Everything you need to know about LLMs, from basic concepts to practical applications in your business.',
      author: 'Alex Chen',
      date: 'January 5, 2024',
      readTime: '10 min read',
      category: 'Education',
      tags: ['LLM', 'Beginner', 'Guide']
    },
    {
      id: 5,
      title: 'AI Ethics: Building Responsible AI Systems',
      excerpt: 'Exploring the importance of ethical AI development and how to build systems that benefit everyone.',
      author: 'Sarah Johnson',
      date: 'January 3, 2024',
      readTime: '9 min read',
      category: 'Ethics',
      tags: ['Ethics', 'Responsible AI', 'Development']
    },
    {
      id: 6,
      title: 'API Best Practices: Optimizing Your AI Integrations',
      excerpt: 'Tips and tricks for getting the most out of your AI API integrations, including performance optimization.',
      author: 'Michael Rodriguez',
      date: 'December 28, 2023',
      readTime: '5 min read',
      category: 'Technical',
      tags: ['API', 'Integration', 'Performance']
    }
  ]

  const categories = [
    'All',
    'AI Trends',
    'Tutorial',
    'Product Updates',
    'Case Study',
    'Education',
    'Ethics',
    'Technical'
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
              <a href="/blog" className="text-black font-medium">Blog</a>
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
              Blog & News
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, platform updates, 
              and insights from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-2xl flex items-center justify-center h-64">
                <span className="text-2xl font-bold text-gray-600">{featuredPost.image}</span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black text-white">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                  </div>
                  <button className="flex items-center text-black hover:text-gray-600">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center mb-6">
                  <span className="text-lg font-bold text-gray-600">Post {post.id}</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-black hover:text-gray-600">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest AI insights and platform updates delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="btn-primary rounded-l-none">
                Subscribe
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

export default BlogPage
