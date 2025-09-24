import { useState } from 'react'
import { Send, Bot, User, Trash2, Download, RotateCcw } from 'lucide-react'

interface ChatMessage {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: string
}

const Testing = () => {
  const [selectedModel, setSelectedModel] = useState('Customer Support Bot')
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date().toISOString()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const availableModels = [
    'Customer Support Bot',
    'Legal Document Analyzer',
    'Product Q&A Assistant'
  ]

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'I understand your question. Let me help you with that.',
        'Based on the information provided, here\'s what I can tell you...',
        'That\'s a great question! Here\'s my analysis:',
        'I can help you with that. Let me provide some insights...',
        'Thank you for your question. Here\'s what I found...'
      ]
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)] + 
          ' This is a simulated response from your AI model. In a real implementation, this would be the actual output from your trained model.',
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const clearHistory = () => {
    setMessages([
      {
        id: '1',
        type: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date().toISOString()
      }
    ])
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Testing</h1>
        <p className="text-gray-600 mt-2">Test your trained models with real questions</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Model Selection & Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-black mb-4">Model Selection</h3>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="input-field mb-4"
            >
              {availableModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-600">
              Currently testing: <strong>{selectedModel}</strong>
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-black mb-4">Controls</h3>
            <div className="space-y-3">
              <button
                onClick={clearHistory}
                className="w-full btn-secondary text-sm"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Clear History
              </button>
              <button className="w-full btn-secondary text-sm">
                <Download className="h-4 w-4 mr-2" />
                Export Chat
              </button>
            </div>
          </div>

          {/* Model Info */}
          <div className="card">
            <h3 className="text-lg font-semibold text-black mb-4">Model Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="text-black">7B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Accuracy:</span>
                <span className="text-black">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Trained:</span>
                <span className="text-black">2 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600">Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="card h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="h-6 w-6 text-black mr-2" />
                  <div>
                    <h3 className="font-semibold text-black">{selectedModel}</h3>
                    <p className="text-sm text-gray-600">AI Assistant</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {messages.length} messages
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-black'
                    }`}
                  >
                    <div className="flex items-start">
                      {message.type === 'assistant' && (
                        <Bot className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      {message.type === 'user' && (
                        <User className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl p-4">
                    <div className="flex items-center">
                      <Bot className="h-5 w-5 mr-2" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message here..."
                  className="flex-1 input-field"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Press Enter to send, or click the send button
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Suggestions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-black mb-4">Test Suggestions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-black mb-2">For Customer Support Bot</h4>
            <div className="space-y-2">
              <button
                onClick={() => setInputMessage("How do I reset my password?")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "How do I reset my password?"
              </button>
              <button
                onClick={() => setInputMessage("What are your business hours?")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "What are your business hours?"
              </button>
              <button
                onClick={() => setInputMessage("I need help with my order")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "I need help with my order"
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-black mb-2">For Product Q&A Assistant</h4>
            <div className="space-y-2">
              <button
                onClick={() => setInputMessage("What features does this product have?")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "What features does this product have?"
              </button>
              <button
                onClick={() => setInputMessage("How do I install this software?")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "How do I install this software?"
              </button>
              <button
                onClick={() => setInputMessage("What are the system requirements?")}
                className="text-left text-sm text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-50 w-full"
              >
                "What are the system requirements?"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testing
