import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '0',
      period: 'forever',
      description: 'Perfect for experiments and small projects',
      features: [
        '2B parameter model',
        '5 training hours per month',
        '5 GB data',
        'Basic API access',
        'Email support',
        'Up to 1000 requests/month',
        'File upload',
        'Basic training templates',
        'Simple model chat'
      ],
      buttonText: 'Start Free',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '89',
      period: 'per month',
      description: 'For growing businesses and professional tasks',
      features: [
        '7B parameter model',
        '20 training hours per month',
        '100 GB data',
        'Full API access',
        'Priority support',
        'Up to 10,000 requests/month',
        'Advanced analytics',
        'All integrations (Telegram, Slack, Discord)',
        'Fine-tuning + RAG',
        'Streaming training',
        'Voice input/output',
        'Multilingual (10+ languages)',
        'AI assistant and automation',
        'Website parser',
        'Cloud integration',
        'Auto dataset translation',
        'Visual data editor',
        'Data heatmap',
        'Model comparison',
        'Pay-as-you-go billing'
      ],
      buttonText: 'Choose Pro',
      popular: true,
      color: 'from-primary-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '299',
      period: 'per month',
      description: 'For large organizations with high requirements',
      features: [
        '13B parameter model',
        '100 training hours per month',
        '1 TB data',
        'Unlimited API access',
        'Personal manager',
        'Unlimited requests',
        'Advanced analytics',
        'Custom integrations',
        '99.9% SLA',
        'Team training',
        'White-label solutions',
        'Custom training templates',
        'Team collaboration',
        'Roles and permissions',
        'Shared model chat',
        'Model marketplace',
        'Custom invoices',
        '24/7 priority support',
        'Personal training',
        'Custom workflows',
        'AI dataset editor',
        'Test generator',
        'Contextual learning',
        'Scenarios (workflows)',
        'Webhooks for external systems'
      ],
      buttonText: 'Contact Us',
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose a plan that fits your needs. 
            All plans include API access and technical support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative glass-effect rounded-2xl p-8 card-hover ${
                plan.popular ? 'ring-2 ring-primary-500/50 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold gradient-text">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'button-primary'
                    : plan.name === 'Basic'
                    ? 'bg-white/5 border border-white/20 text-white hover:bg-white/10'
                    : 'button-secondary'
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-primary-400" />
              <span className="text-white font-semibold">Money-back Guarantee</span>
            </div>
            <p className="text-gray-300 text-sm">
              Not satisfied with the result? We'll refund your money within 30 days, no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
