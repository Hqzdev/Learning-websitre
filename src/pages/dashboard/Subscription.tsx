import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { CheckCircle, CreditCard, Download, Calendar } from 'lucide-react'

const Subscription = () => {
  const { user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState(user?.subscription || 'basic')

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      period: '/month',
      features: [
        '2B model access',
        '10GB storage',
        '100 API calls/month',
        'Email support'
      ],
      current: user?.subscription === 'basic'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 99,
      period: '/month',
      features: [
        '7B model access',
        '50GB storage',
        '1000 API calls/month',
        'Priority support',
        'Advanced analytics'
      ],
      current: user?.subscription === 'pro',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      period: '/month',
      features: [
        'All model sizes (up to 16B)',
        'Unlimited storage',
        'Unlimited API calls',
        '24/7 support',
        'Custom integrations',
        'Dedicated infrastructure'
      ],
      current: user?.subscription === 'enterprise'
    }
  ]

  const billingHistory = [
    {
      id: '1',
      date: '2024-01-15',
      amount: 49,
      status: 'paid',
      description: 'Basic Plan - January 2024'
    },
    {
      id: '2',
      date: '2023-12-15',
      amount: 49,
      status: 'paid',
      description: 'Basic Plan - December 2023'
    },
    {
      id: '3',
      date: '2023-11-15',
      amount: 49,
      status: 'paid',
      description: 'Basic Plan - November 2023'
    }
  ]

  const usageStats = {
    apiCalls: { used: 85, limit: 100 },
    storage: { used: 2.3, limit: 10 },
    models: { used: 3, limit: 5 }
  }

  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId)
    // In a real app, this would trigger the payment flow
    console.log(`Upgrading to ${planId} plan`)
  }

  const getCurrentPlan = () => {
    return plans.find(plan => plan.current)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Subscription</h1>
        <p className="text-gray-600 mt-2">Manage your subscription and billing</p>
      </div>

      {/* Current Plan */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Current Plan</h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-black">
              {getCurrentPlan()?.name} Plan
            </h3>
            <p className="text-gray-600">
              ${getCurrentPlan()?.price}{getCurrentPlan()?.period}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Next billing date</p>
            <p className="font-medium text-black">February 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Usage Overview */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Usage This Month</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">API Calls</span>
              <span className="text-sm text-black">
                {usageStats.apiCalls.used}/{usageStats.apiCalls.limit}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full"
                style={{ width: `${(usageStats.apiCalls.used / usageStats.apiCalls.limit) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Storage</span>
              <span className="text-sm text-black">
                {usageStats.storage.used}GB/{usageStats.storage.limit}GB
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full"
                style={{ width: `${(usageStats.storage.used / usageStats.storage.limit) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Models</span>
              <span className="text-sm text-black">
                {usageStats.models.used}/{usageStats.models.limit}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full"
                style={{ width: `${(usageStats.models.used / usageStats.models.limit) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-semibold text-black mb-6">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative ${plan.popular ? 'ring-2 ring-black' : ''} ${
                plan.current ? 'bg-gray-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {plan.current && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Current Plan
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-black">${plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.current ? (
                  <button className="w-full py-3 px-6 border-2 border-gray-300 text-gray-500 rounded-2xl font-medium cursor-not-allowed">
                    Current Plan
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpgrade(plan.id)}
                    className={`w-full py-3 px-6 rounded-2xl font-medium transition-colors ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'border-2 border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Upgrade'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">Billing History</h2>
          <button className="btn-secondary text-sm">
            <Download className="h-4 w-4 mr-2" />
            Download All
          </button>
        </div>
        
        <div className="space-y-3">
          {billingHistory.map((bill) => (
            <div key={bill.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-black">{bill.description}</p>
                  <p className="text-sm text-gray-600">{bill.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-black">${bill.amount}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {bill.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Payment Method</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-gray-400 mr-3" />
            <div>
              <p className="font-medium text-black">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-600">Expires 12/25</p>
            </div>
          </div>
          <button className="btn-secondary text-sm">
            Update
          </button>
        </div>
      </div>

      {/* Billing Settings */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Billing Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black">Email Invoices</h3>
              <p className="text-sm text-gray-600">Receive invoices via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black">Auto-renewal</h3>
              <p className="text-sm text-gray-600">Automatically renew subscription</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
