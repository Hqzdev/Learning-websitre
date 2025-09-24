import React, { useState, useRef, useEffect } from 'react';
import { 
  PaperAirplaneIcon, 
  MicrophoneIcon, 
  SpeakerWaveIcon,
  LanguageIcon,
  CogIcon,
  UserIcon,
  CpuChipIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  language?: string;
  confidence?: number;
  sources?: string[];
}

interface Model {
  id: string;
  name: string;
  type: 'finetuned' | 'rag' | 'streaming';
  accuracy: number;
  language: string;
  isActive: boolean;
}

const ModelChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I am your trained AI assistant. How can I help you?',
      timestamp: new Date(),
      confidence: 95
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('auto');
  const [selectedModel, setSelectedModel] = useState('1');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const models: Model[] = [
    {
      id: '1',
      name: 'Legal Assistant v2.1',
      type: 'finetuned',
      accuracy: 94,
      language: 'Russian',
      isActive: true
    },
    {
      id: '2',
      name: 'Company Knowledge Base',
      type: 'rag',
      accuracy: 91,
      language: 'English',
      isActive: false
    },
    {
      id: '3',
      name: 'Technical Support',
      type: 'streaming',
      accuracy: 89,
      language: 'Multi',
      isActive: false
    }
  ];

  const languages = [
    { code: 'auto', name: 'Auto-detect' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        confidence: Math.floor(Math.random() * 20) + 80,
        sources: ['Legal Documents', 'Company Wiki', 'FAQ Database']
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (input: string): string => {
    const responses = [
      'Based on the provided documentation, I can suggest the following solution...',
      'According to corporate policies, I recommend the following approach...',
      'In our knowledge base, there are several relevant cases. Here's what I found...',
      'This is an interesting question. Let me analyze the available information...',
      'Based on training on your data, here's my answer...'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Simulate voice recording
    if (!isRecording) {
      setTimeout(() => {
        setInputMessage('Voice message recognized');
        setIsRecording(false);
      }, 2000);
    }
  };

  const handleVoiceOutput = (message: Message) => {
    setIsSpeaking(true);
    // Simulate TTS
    setTimeout(() => {
      setIsSpeaking(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Model Chat</h1>
        <p className="text-gray-600">Communicate with your trained model in real-time</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200 h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CpuChipIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {models.find(m => m.id === selectedModel)?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Accuracy: {models.find(m => m.id === selectedModel)?.accuracy}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Online</span>
                  </div>
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
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs opacity-70">
                        {formatTime(message.timestamp)}
                      </span>
                      {message.type === 'assistant' && (
                        <div className="flex items-center space-x-2">
                          {message.confidence && (
                            <span className="text-xs opacity-70">
                              {message.confidence}%
                            </span>
                          )}
                          <button
                            onClick={() => handleVoiceOutput(message)}
                            className="p-1 hover:bg-gray-200 rounded"
                            disabled={isSpeaking}
                          >
                            <SpeakerWaveIcon className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    {message.sources && (
                      <div className="mt-2 pt-2 border-t border-gray-300">
                        <p className="text-xs opacity-70 mb-1">Источники:</p>
                        <div className="flex flex-wrap gap-1">
                          {message.sources.map((source, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                            >
                              {source}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2">
                <div className="flex-1">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows={2}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg ${
                      isRecording 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    title="Voice input"
                  >
                    <MicrophoneIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Model Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Select Model</h3>
            <div className="space-y-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg border ${
                    selectedModel === model.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{model.name}</p>
                      <p className="text-xs text-gray-500">{model.language}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{model.accuracy}%</p>
                      <p className="text-xs text-gray-500">{model.type}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Language Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Language</h3>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center space-x-2">
                <DocumentTextIcon className="h-4 w-4" />
                <span>Upload Document</span>
              </button>
              <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center space-x-2">
                <LightBulbIcon className="h-4 w-4" />
                <span>Example Questions</span>
              </button>
              <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center space-x-2">
                <ArrowPathIcon className="h-4 w-4" />
                <span>Clear History</span>
              </button>
            </div>
          </div>

          {/* Context Info */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Contextual Learning</h3>
            <p className="text-sm text-blue-700 mb-3">
              The model remembers previous answers and query history for more accurate responses.
            </p>
            <div className="text-xs text-blue-600">
              <p>• Remembers conversation context</p>
              <p>• Considers previous questions</p>
              <p>• Adapts to communication style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelChat;
