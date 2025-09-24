import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  EyeIcon,
  FireIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

interface QueryLog {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
  accuracy: number;
  model: string;
  language: string;
  user: string;
  duration: number;
}

interface AccuracyData {
  date: string;
  accuracy: number;
  queries: number;
}

interface HeatmapData {
  text: string;
  usage: number;
  relevance: number;
}

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModel, setSelectedModel] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');

  const queryLogs: QueryLog[] = [
    {
      id: '1',
      query: 'Как оформить договор аренды?',
      response: 'Для оформления договора аренды необходимо...',
      timestamp: new Date('2024-01-15 14:30'),
      accuracy: 94,
      model: 'Legal Assistant v2.1',
      language: 'ru',
      user: 'user@company.com',
      duration: 1.2
    },
    {
      id: '2',
      query: 'What are the company policies?',
      response: 'According to our company policies...',
      timestamp: new Date('2024-01-15 13:45'),
      accuracy: 87,
      model: 'Company Knowledge Base',
      language: 'en',
      user: 'admin@company.com',
      duration: 0.8
    },
    {
      id: '3',
      query: 'Как настроить VPN?',
      response: 'Для настройки VPN выполните следующие шаги...',
      timestamp: new Date('2024-01-15 12:20'),
      accuracy: 91,
      model: 'Technical Support',
      language: 'ru',
      user: 'tech@company.com',
      duration: 2.1
    }
  ];

  const accuracyData: AccuracyData[] = [
    { date: '2024-01-09', accuracy: 89, queries: 45 },
    { date: '2024-01-10', accuracy: 91, queries: 52 },
    { date: '2024-01-11', accuracy: 88, queries: 38 },
    { date: '2024-01-12', accuracy: 93, queries: 67 },
    { date: '2024-01-13', accuracy: 90, queries: 41 },
    { date: '2024-01-14', accuracy: 95, queries: 73 },
    { date: '2024-01-15', accuracy: 92, queries: 58 }
  ];

  const heatmapData: HeatmapData[] = [
    { text: 'договор', usage: 45, relevance: 0.95 },
    { text: 'политика', usage: 38, relevance: 0.89 },
    { text: 'процедура', usage: 32, relevance: 0.92 },
    { text: 'требования', usage: 28, relevance: 0.87 },
    { text: 'документы', usage: 25, relevance: 0.91 },
    { text: 'соглашение', usage: 22, relevance: 0.88 },
    { text: 'регламент', usage: 19, relevance: 0.85 },
    { text: 'инструкция', usage: 16, relevance: 0.93 }
  ];

  const modelComparison = [
    {
      name: 'Legal Assistant v2.1',
      accuracy: 94,
      queries: 156,
      avgResponseTime: 1.2,
      userSatisfaction: 4.8
    },
    {
      name: 'Company Knowledge Base',
      accuracy: 91,
      queries: 203,
      avgResponseTime: 0.9,
      userSatisfaction: 4.6
    },
    {
      name: 'Technical Support',
      accuracy: 89,
      queries: 127,
      avgResponseTime: 1.8,
      userSatisfaction: 4.4
    }
  ];

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-green-600';
    if (accuracy >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getAccuracyBg = (accuracy: number) => {
    if (accuracy >= 90) return 'bg-green-100';
    if (accuracy >= 80) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Аналитика</h1>
        <p className="text-gray-600">Отслеживайте производительность и качество ваших моделей</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex items-center space-x-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Модель</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Все модели</option>
              <option value="legal">Legal Assistant v2.1</option>
              <option value="company">Company Knowledge Base</option>
              <option value="tech">Technical Support</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Период</label>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="24h">Последние 24 часа</option>
              <option value="7d">Последние 7 дней</option>
              <option value="30d">Последние 30 дней</option>
              <option value="90d">Последние 90 дней</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', name: 'Обзор', icon: ChartBarIcon },
            { id: 'logs', name: 'Логи запросов', icon: DocumentTextIcon },
            { id: 'accuracy', name: 'Анализ точности', icon: CheckCircleIcon },
            { id: 'heatmap', name: 'Тепловая карта', icon: FireIcon },
            { id: 'comparison', name: 'Сравнение моделей', icon: CpuChipIcon }
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

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Всего запросов</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <TrendingUpIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 ml-1">+12%</span>
                <span className="text-sm text-gray-500 ml-2">за неделю</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Средняя точность</p>
                  <p className="text-2xl font-bold text-gray-900">91%</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <TrendingUpIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 ml-1">+3%</span>
                <span className="text-sm text-gray-500 ml-2">за неделю</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Время ответа</p>
                  <p className="text-2xl font-bold text-gray-900">1.2с</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <TrendingDownIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 ml-1">-0.3с</span>
                <span className="text-sm text-gray-500 ml-2">за неделю</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Активные пользователи</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <TrendingUpIcon className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 ml-1">+5</span>
                <span className="text-sm text-gray-500 ml-2">за неделю</span>
              </div>
            </div>
          </div>

          {/* Accuracy Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Динамика точности</h3>
            <div className="h-64 flex items-end space-x-2">
              {accuracyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${(data.accuracy / 100) * 200}px` }}
                  ></div>
                  <div className="mt-2 text-xs text-gray-600">
                    {data.accuracy}%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(data.date).toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Logs Tab */}
      {activeTab === 'logs' && (
        <div className="space-y-4">
          {queryLogs.map((log) => (
            <div key={log.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-medium text-gray-900">Запрос:</span>
                    <span className="text-gray-700">{log.query}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-medium text-gray-900">Ответ:</span>
                    <span className="text-gray-700">{log.response}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getAccuracyBg(log.accuracy)} ${getAccuracyColor(log.accuracy)}`}>
                      {log.accuracy}%
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{log.duration}с</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{log.model}</span>
                  <span>•</span>
                  <span>{log.language}</span>
                  <span>•</span>
                  <span>{log.user}</span>
                </div>
                <span>{log.timestamp.toLocaleString('ru-RU')}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Accuracy Tab */}
      {activeTab === 'accuracy' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Анализ точности по категориям</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircleIcon className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Высокая точность</h4>
                <p className="text-2xl font-bold text-green-600">78%</p>
                <p className="text-sm text-gray-500">запросов с точностью >90%</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ExclamationTriangleIcon className="h-10 w-10 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Средняя точность</h4>
                <p className="text-2xl font-bold text-yellow-600">18%</p>
                <p className="text-sm text-gray-500">запросов с точностью 70-90%</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ExclamationTriangleIcon className="h-10 w-10 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Низкая точность</h4>
                <p className="text-2xl font-bold text-red-600">4%</p>
                <p className="text-sm text-gray-500">запросов с точностью <70%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Рекомендации по улучшению</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <TrendingUpIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Добавьте больше примеров</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      Для улучшения точности ответов на юридические вопросы добавьте больше примеров договоров и соглашений
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Обновите техническую документацию</h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      Некоторые технические инструкции устарели. Рекомендуем обновить документацию по настройке VPN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Heatmap Tab */}
      {activeTab === 'heatmap' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Тепловая карта данных</h3>
            <p className="text-gray-600 mb-6">
              Наиболее часто используемые фрагменты текста в ваших датасетах
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {heatmapData.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.text}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" style={{ opacity: item.usage / 50 }}></div>
                      <span className="text-sm text-gray-600">{item.usage}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Релевантность</span>
                    <span className="text-sm font-medium text-green-600">{(item.relevance * 100).toFixed(0)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison Tab */}
      {activeTab === 'comparison' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Сравнение моделей</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Модель</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Точность</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Запросы</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Время ответа</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Удовлетворенность</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((model, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CpuChipIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">{model.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getAccuracyBg(model.accuracy)} ${getAccuracyColor(model.accuracy)}`}>
                            {model.accuracy}%
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{model.queries}</td>
                      <td className="py-3 px-4 text-gray-700">{model.avgResponseTime}с</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-600 ml-1">({model.userSatisfaction})</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
