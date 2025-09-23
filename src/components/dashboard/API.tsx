import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Key, 
  Plus, 
  Copy, 
  Trash2, 
  Eye, 
  EyeOff, 
  Code, 
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const API = () => {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      key: 'sk-1234567890abcdef1234567890abcdef',
      created: '2024-01-10',
      lastUsed: '2024-01-15 14:30',
      requests: 1247,
      status: 'active'
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'sk-abcdef1234567890abcdef1234567890',
      created: '2024-01-12',
      lastUsed: '2024-01-14 09:15',
      requests: 89,
      status: 'active'
    }
  ])
  const [showKeys, setShowKeys] = useState<{ [key: number]: boolean }>({})
  const [selectedLanguage, setSelectedLanguage] = useState('python')

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'curl', name: 'cURL', icon: '💻' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'go', name: 'Go', icon: '🐹' }
  ]

  const codeExamples = {
    python: `import requests

url = "https://api.aibuilder.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

data = {
    "model": "your-model-id",
    "messages": [
        {
            "role": "user",
            "content": "Как настроить насос для перекачки воды?"
        }
    ],
    "max_tokens": 1000,
    "temperature": 0.7
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(result['choices'][0]['message']['content'])`,
    javascript: `const response = await fetch('https://api.aibuilder.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'your-model-id',
    messages: [
      {
        role: 'user',
        content: 'Как настроить насос для перекачки воды?'
      }
    ],
    max_tokens: 1000,
    temperature: 0.7
  })
});

const result = await response.json();
console.log(result.choices[0].message.content);`,
    curl: `curl -X POST https://api.aibuilder.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "your-model-id",
    "messages": [
      {
        "role": "user",
        "content": "Как настроить насос для перекачки воды?"
      }
    ],
    "max_tokens": 1000,
    "temperature": 0.7
  }'`,
    php: `<?php
$url = 'https://api.aibuilder.com/v1/chat/completions';
$data = [
    'model' => 'your-model-id',
    'messages' => [
        [
            'role' => 'user',
            'content' => 'Как настроить насос для перекачки воды?'
        ]
    ],
    'max_tokens' => 1000,
    'temperature' => 0.7
];

$options = [
    'http' => [
        'header' => [
            'Authorization: Bearer YOUR_API_KEY',
            'Content-Type: application/json'
        ],
        'method' => 'POST',
        'content' => json_encode($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
$response = json_decode($result, true);

echo $response['choices'][0]['message']['content'];
?>`,
    go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    url := "https://api.aibuilder.com/v1/chat/completions"
    
    data := map[string]interface{}{
        "model": "your-model-id",
        "messages": []map[string]string{
            {
                "role":    "user",
                "content": "Как настроить насос для перекачки воды?",
            },
        },
        "max_tokens":   1000,
        "temperature": 0.7,
    }
    
    jsonData, _ := json.Marshal(data)
    
    req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()
    
    var result map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&result)
    
    fmt.Println(result["choices"].([]interface{})[0].(map[string]interface{})["message"].(map[string]interface{})["content"])
}`
  }

  const toggleKeyVisibility = (keyId: number) => {
    setShowKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const createNewKey = () => {
    const newKey = {
      id: Date.now(),
      name: 'New API Key',
      key: 'sk-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      created: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      requests: 0,
      status: 'active' as const
    }
    setApiKeys(prev => [...prev, newKey])
  }

  const deleteKey = (keyId: number) => {
    setApiKeys(prev => prev.filter(key => key.id !== keyId))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">API управление</h1>
          <p className="text-gray-300">Управляйте API ключами и интеграцией</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={createNewKey}
          className="button-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Создать API ключ</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* API Keys */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">API ключи</h2>
            <div className="space-y-4">
              {apiKeys.map((apiKey, index) => (
                <motion.div
                  key={apiKey.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Key className="w-5 h-5 text-primary-400" />
                      <div>
                        <h3 className="text-white font-medium">{apiKey.name}</h3>
                        <p className="text-sm text-gray-400">
                          Создан {new Date(apiKey.created).toLocaleDateString('ru-RU')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        apiKey.status === 'active' ? 'bg-green-400' : 'bg-red-400'
                      }`} />
                      <span className={`text-sm ${
                        apiKey.status === 'active' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {apiKey.status === 'active' ? 'Активен' : 'Неактивен'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <code className="flex-1 px-3 py-2 bg-dark-800 text-gray-300 rounded text-sm font-mono">
                      {showKeys[apiKey.id] ? apiKey.key : '••••••••••••••••••••••••••••••••'}
                    </code>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                    >
                      {showKeys[apiKey.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                    >
                      <Copy className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => deleteKey(apiKey.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-all duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Последнее использование:</span>
                      <div className="text-white">{apiKey.lastUsed}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Всего запросов:</span>
                      <div className="text-white">{apiKey.requests.toLocaleString()}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Документация API</h2>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/docs"
                className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <span>Полная документация</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-white font-medium mb-2">Базовый URL</h3>
                <code className="text-primary-400 font-mono">https://api.aibuilder.com/v1</code>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-white font-medium mb-2">Аутентификация</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Используйте ваш API ключ в заголовке Authorization:
                </p>
                <code className="text-primary-400 font-mono text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-white font-medium mb-2">Лимиты</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Запросов в минуту:</span>
                    <div className="text-white">60</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Максимум токенов:</span>
                    <div className="text-white">4096</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Examples */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Примеры кода</h2>
            
            {/* Language Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {languages.map((lang) => (
                <motion.button
                  key={lang.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedLanguage === lang.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{lang.icon}</span>
                  {lang.name}
                </motion.button>
              ))}
            </div>
            
            {/* Code Block */}
            <div className="relative">
              <div className="flex items-center justify-between p-3 bg-dark-800 rounded-t-lg border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {languages.find(l => l.id === selectedLanguage)?.name}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(codeExamples[selectedLanguage as keyof typeof codeExamples])}
                  className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                >
                  <Copy className="w-4 h-4" />
                </motion.button>
              </div>
              <pre className="p-4 bg-dark-800 rounded-b-lg overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono">
                  {codeExamples[selectedLanguage as keyof typeof codeExamples]}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* API Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6">Статус API</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">API сервер</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Работает</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Модели</span>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Доступны</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Время ответа</span>
                <span className="text-white text-sm">~150ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Uptime</span>
                <span className="text-white text-sm">99.9%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default API
