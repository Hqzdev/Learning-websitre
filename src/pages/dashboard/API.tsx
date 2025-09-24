import { useState } from 'react'
import { Copy, Key, Code, Terminal, CheckCircle, Eye, EyeOff } from 'lucide-react'

const API = () => {
  const [apiKey, setApiKey] = useState('ak_live_1234567890abcdef')
  const [showApiKey, setShowApiKey] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateNewKey = () => {
    const newKey = 'ak_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setApiKey(newKey)
  }

  const curlExample = `curl -X POST "https://api.cognify.com/v1/chat/completions" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "customer-support-bot",
    "messages": [
      {
        "role": "user",
        "content": "How can I reset my password?"
      }
    ],
    "max_tokens": 150,
    "temperature": 0.7
  }'`

  const pythonExample = `import requests

url = "https://api.cognify.com/v1/chat/completions"
headers = {
    "Authorization": f"Bearer ${apiKey}",
    "Content-Type": "application/json"
}
data = {
    "model": "customer-support-bot",
    "messages": [
        {"role": "user", "content": "How can I reset my password?"}
    ],
    "max_tokens": 150,
    "temperature": 0.7
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`

  const javascriptExample = `const response = await fetch('https://api.cognify.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'customer-support-bot',
    messages: [
      { role: 'user', content: 'How can I reset my password?' }
    ],
    max_tokens: 150,
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data);`

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">API Access</h1>
        <p className="text-gray-600 mt-2">Integrate your AI models into your applications</p>
      </div>

      {/* API Key Section */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">API Key</h2>
          <button
            onClick={generateNewKey}
            className="btn-secondary text-sm"
          >
            Generate New Key
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Key className="h-5 w-5 text-gray-400 mr-2" />
              <code className="text-sm font-mono">
                {showApiKey ? apiKey : '••••••••••••••••••••••••••••••••'}
              </code>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button
                onClick={() => copyToClipboard(apiKey)}
                className="text-gray-400 hover:text-gray-600"
              >
                {copied ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-3">
          Keep your API key secure and never share it publicly. 
          <a href="#" className="text-black hover:underline ml-1">Learn more about API security</a>
        </p>
      </div>

      {/* API Documentation */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">API Documentation</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-black mb-2">Base URL</h3>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">https://api.cognify.com/v1</code>
          </div>

          <div>
            <h3 className="text-lg font-medium text-black mb-2">Authentication</h3>
            <p className="text-gray-600 mb-2">Include your API key in the Authorization header:</p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">Authorization: Bearer YOUR_API_KEY</code>
          </div>

          <div>
            <h3 className="text-lg font-medium text-black mb-2">Available Models</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">customer-support-bot</span>
                <span className="text-sm text-gray-600">7B parameters</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">legal-document-analyzer</span>
                <span className="text-sm text-gray-600">13B parameters</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">product-qa-assistant</span>
                <span className="text-sm text-gray-600">2B parameters</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* cURL Example */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">cURL</h3>
            <button
              onClick={() => copyToClipboard(curlExample)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
            <code>{curlExample}</code>
          </pre>
        </div>

        {/* Python Example */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">Python</h3>
            <button
              onClick={() => copyToClipboard(pythonExample)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
            <code>{pythonExample}</code>
          </pre>
        </div>

        {/* JavaScript Example */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black">JavaScript</h3>
            <button
              onClick={() => copyToClipboard(javascriptExample)}
              className="text-gray-400 hover:text-gray-600"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
            <code>{javascriptExample}</code>
          </pre>
        </div>
      </div>

      {/* API Usage Stats */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Usage Statistics</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">1,247</div>
            <div className="text-sm text-gray-600">Requests This Month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">98.5%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">245ms</div>
            <div className="text-sm text-gray-600">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">$12.47</div>
            <div className="text-sm text-gray-600">This Month's Cost</div>
          </div>
        </div>
      </div>

      {/* Rate Limits */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">Rate Limits</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Basic Plan</h4>
              <p className="text-sm text-gray-600">100 requests per month</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-black">85/100 used</div>
              <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> You're approaching your monthly limit. 
              <a href="/dashboard/subscription" className="text-black hover:underline ml-1">
                Upgrade your plan
              </a> to increase your limits.
            </p>
          </div>
        </div>
      </div>

      {/* SDKs and Libraries */}
      <div className="card">
        <h2 className="text-xl font-semibold text-black mb-4">SDKs and Libraries</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Python SDK</h4>
              <p className="text-sm text-gray-600">pip install cognify-python</p>
            </div>
            <button className="btn-secondary text-sm">Install</button>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Node.js SDK</h4>
              <p className="text-sm text-gray-600">npm install cognify-js</p>
            </div>
            <button className="btn-secondary text-sm">Install</button>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">PHP SDK</h4>
              <p className="text-sm text-gray-600">composer require cognify/php</p>
            </div>
            <button className="btn-secondary text-sm">Install</button>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-black">Go SDK</h4>
              <p className="text-sm text-gray-600">go get github.com/cognify/go</p>
            </div>
            <button className="btn-secondary text-sm">Install</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default API
