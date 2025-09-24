import React, { useState } from 'react';
import { 
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  CloudIcon,
  CogIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PlayIcon,
  StopIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

interface Integration {
  id: string;
  name: string;
  description: string;
  type: 'bot' | 'api' | 'plugin' | 'webhook';
  status: 'active' | 'inactive' | 'error';
  icon: React.ComponentType<any>;
  color: string;
  setupRequired: boolean;
  features: string[];
}

interface BotConfig {
  name: string;
  token: string;
  webhookUrl: string;
  modelId: string;
  language: string;
  isActive: boolean;
}

const Integrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bots');
  const [botConfig, setBotConfig] = useState<BotConfig>({
    name: '',
    token: '',
    webhookUrl: '',
    modelId: '',
    language: 'ru',
    isActive: false
  });

  const integrations: Integration[] = [
    {
      id: 'telegram',
      name: 'Telegram Bot',
      description: 'Создайте Telegram-бота на основе вашей обученной модели',
      type: 'bot',
      status: 'active',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-blue-500',
      setupRequired: false,
      features: ['Голосовые сообщения', 'Файлы', 'Групповые чаты', 'Inline режим']
    },
    {
      id: 'slack',
      name: 'Slack Integration',
      description: 'Интеграция с Slack для командной работы',
      type: 'plugin',
      status: 'inactive',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-purple-500',
      setupRequired: true,
      features: ['Каналы', 'Прямые сообщения', 'Уведомления', 'Команды']
    },
    {
      id: 'discord',
      name: 'Discord Bot',
      description: 'Discord-бот для игровых сообществ',
      type: 'bot',
      status: 'inactive',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-indigo-500',
      setupRequired: true,
      features: ['Серверы', 'Голосовые каналы', 'Роли', 'Эмодзи']
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      description: 'Интеграция с WhatsApp Business API',
      type: 'bot',
      status: 'inactive',
      icon: PhoneIcon,
      color: 'bg-green-500',
      setupRequired: true,
      features: ['Бизнес-аккаунт', 'Медиа', 'Шаблоны', 'Статусы']
    },
    {
      id: 'notion',
      name: 'Notion Plugin',
      description: 'Плагин для Notion с AI-ассистентом',
      type: 'plugin',
      status: 'inactive',
      icon: DocumentTextIcon,
      color: 'bg-gray-500',
      setupRequired: true,
      features: ['Страницы', 'Базы данных', 'Шаблоны', 'Автозаполнение']
    },
    {
      id: 'confluence',
      name: 'Confluence Plugin',
      description: 'Интеграция с Atlassian Confluence',
      type: 'plugin',
      status: 'inactive',
      icon: DocumentTextIcon,
      color: 'bg-blue-600',
      setupRequired: true,
      features: ['Страницы', 'Комментарии', 'Поиск', 'Автодополнение']
    },
    {
      id: 'google-docs',
      name: 'Google Docs Add-on',
      description: 'Дополнение для Google Docs',
      type: 'plugin',
      status: 'inactive',
      icon: DocumentTextIcon,
      color: 'bg-blue-500',
      setupRequired: true,
      features: ['Редактирование', 'Предложения', 'Перевод', 'Резюме']
    },
    {
      id: 'api',
      name: 'REST API',
      description: 'API для интеграции с внешними системами',
      type: 'api',
      status: 'active',
      icon: CodeBracketIcon,
      color: 'bg-green-600',
      setupRequired: false,
      features: ['REST endpoints', 'Webhooks', 'Аутентификация', 'Документация']
    }
  ];

  const handleIntegrationToggle = (integrationId: string) => {
    // Simulate integration toggle
    console.log(`Toggling integration: ${integrationId}`);
  };

  const handleBotSetup = () => {
    if (botConfig.name && botConfig.token && botConfig.modelId) {
      // Simulate bot setup
      console.log('Setting up bot:', botConfig);
      setBotConfig({ ...botConfig, isActive: true });
    }
  };

  const handleWebhookTest = () => {
    // Simulate webhook test
    console.log('Testing webhook...');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
        <p className="text-gray-600">Connect your model to external services and platforms</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'bots', name: 'Bots', icon: ChatBubbleLeftRightIcon },
            { id: 'plugins', name: 'Plugins', icon: DocumentTextIcon },
            { id: 'api', name: 'API', icon: CodeBracketIcon },
            { id: 'webhooks', name: 'Webhooks', icon: CloudIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bots Tab */}
      {activeTab === 'bots' && (
        <div className="space-y-6">
          {/* Telegram Bot Setup */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Telegram Bot</h3>
                  <p className="text-gray-600">Create a bot in 1 click</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  botConfig.isActive ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <span className="text-sm text-gray-500">
                  {botConfig.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bot Name
                  </label>
                  <input
                    type="text"
                    value={botConfig.name}
                    onChange={(e) => setBotConfig({ ...botConfig, name: e.target.value })}
                    placeholder="My AI Assistant"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telegram Token
                  </label>
                  <input
                    type="text"
                    value={botConfig.token}
                    onChange={(e) => setBotConfig({ ...botConfig, token: e.target.value })}
                    placeholder="123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model
                  </label>
                  <select
                    value={botConfig.modelId}
                    onChange={(e) => setBotConfig({ ...botConfig, modelId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select model</option>
                    <option value="legal-assistant">Legal Assistant v2.1</option>
                    <option value="company-kb">Company Knowledge Base</option>
                    <option value="tech-support">Technical Support</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    value={botConfig.language}
                    onChange={(e) => setBotConfig({ ...botConfig, language: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                    <option value="auto">Auto-detect</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Webhook URL
                  </label>
                  <input
                    type="text"
                    value={botConfig.webhookUrl}
                    onChange={(e) => setBotConfig({ ...botConfig, webhookUrl: e.target.value })}
                    placeholder="https://your-domain.com/webhook/telegram"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handleBotSetup}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <PlayIcon className="h-5 w-5" />
                    <span>Запустить бота</span>
                  </button>
                  {botConfig.isActive && (
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center space-x-2">
                      <StopIcon className="h-5 w-5" />
                      <span>Остановить</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {botConfig.isActive && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">Бот успешно запущен!</span>
                </div>
                <p className="text-green-700 mt-1">
                  Ваш бот доступен по адресу: @{botConfig.name.toLowerCase().replace(/\s+/g, '_')}_bot
                </p>
              </div>
            )}
          </div>

          {/* Other Bot Integrations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.filter(i => i.type === 'bot' && i.id !== 'telegram').map((integration) => (
              <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center`}>
                    <integration.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-500">{integration.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {integration.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleIntegrationToggle(integration.id)}
                  className={`w-full py-2 rounded-lg font-medium ${
                    integration.status === 'active'
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {integration.status === 'active' ? 'Отключить' : 'Подключить'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Plugins Tab */}
      {activeTab === 'plugins' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.filter(i => i.type === 'plugin').map((integration) => (
            <div key={integration.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center`}>
                  <integration.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                  <p className="text-sm text-gray-500">{integration.description}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {integration.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleIntegrationToggle(integration.id)}
                  className={`flex-1 py-2 rounded-lg font-medium ${
                    integration.status === 'active'
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {integration.status === 'active' ? 'Отключить' : 'Подключить'}
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <CogIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* API Tab */}
      {activeTab === 'api' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CodeBracketIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">REST API</h3>
                  <p className="text-gray-600">API для интеграции с внешними системами</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500">Активен</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Основные endpoints</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">POST /api/chat</span>
                    <span className="text-xs text-gray-500">Чат с моделью</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">GET /api/models</span>
                    <span className="text-xs text-gray-500">Список моделей</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm">POST /api/train</span>
                    <span className="text-xs text-gray-500">Обучение модели</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Аутентификация</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value="sk-1234567890abcdef"
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Base URL</label>
                    <input
                      type="text"
                      value="https://api.yourplatform.com/v1"
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">Пример использования</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`curl -X POST https://api.yourplatform.com/v1/chat \\
  -H "Authorization: Bearer sk-1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "legal-assistant",
    "message": "Как оформить договор?",
    "language": "ru"
  }'`}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Webhooks Tab */}
      {activeTab === 'webhooks' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Webhooks</h3>
            <p className="text-gray-600 mb-6">
              Настройте webhooks для получения уведомлений о событиях в реальном времени
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Обучение завершено</h4>
                  <p className="text-sm text-gray-500">webhook.example.com/training-complete</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Активен</span>
                  <button
                    onClick={handleWebhookTest}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <PlayIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Новая модель готова</h4>
                  <p className="text-sm text-gray-500">webhook.example.com/model-ready</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-500">Неактивен</span>
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                    <CogIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Добавить webhook
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integrations;
