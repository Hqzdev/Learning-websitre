import React, { useState } from 'react';
import { 
  SparklesIcon, 
  LightBulbIcon, 
  CogIcon, 
  DocumentTextIcon,
  PlayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

interface AssistantTask {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  priority: 'low' | 'medium' | 'high';
  estimatedTime: string;
  progress: number;
}

interface SmartSuggestion {
  id: string;
  type: 'optimization' | 'feature' | 'data' | 'training';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  status: 'suggested' | 'accepted' | 'rejected';
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: string[];
  isActive: boolean;
  lastRun: Date;
  nextRun: Date;
}

const AIAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [assistantTasks, setAssistantTasks] = useState<AssistantTask[]>([
    {
      id: '1',
      title: 'Оптимизация датасета Legal Documents',
      description: 'Удаление дубликатов и улучшение качества данных',
      status: 'in_progress',
      priority: 'high',
      estimatedTime: '15 минут',
      progress: 65
    },
    {
      id: '2',
      title: 'Создание тестов для модели Company Knowledge Base',
      description: 'Генерация примеров вопросов для проверки качества',
      status: 'pending',
      priority: 'medium',
      estimatedTime: '8 минут',
      progress: 0
    },
    {
      id: '3',
      title: 'Анализ производительности модели',
      description: 'Проверка точности и рекомендации по улучшению',
      status: 'completed',
      priority: 'low',
      estimatedTime: '5 минут',
      progress: 100
    }
  ]);

  const [smartSuggestions] = useState<SmartSuggestion[]>([
    {
      id: '1',
      type: 'optimization',
      title: 'Добавить больше примеров юридических документов',
      description: 'Для улучшения точности ответов на правовые вопросы',
      impact: 'high',
      effort: 'medium',
      status: 'suggested'
    },
    {
      id: '2',
      type: 'feature',
      title: 'Включить голосовой ввод для чата',
      description: 'Пользователи смогут задавать вопросы голосом',
      impact: 'medium',
      effort: 'low',
      status: 'suggested'
    },
    {
      id: '3',
      type: 'data',
      title: 'Интегрировать с корпоративной CRM',
      description: 'Подключение к Salesforce для автоматического обновления данных',
      impact: 'high',
      effort: 'high',
      status: 'suggested'
    }
  ]);

  const [workflows] = useState<Workflow[]>([
    {
      id: '1',
      name: 'Автоматическое обновление модели',
      description: 'Еженедельное переобучение модели на новых данных',
      steps: ['Сбор новых данных', 'Валидация качества', 'Переобучение', 'Тестирование', 'Деплой'],
      isActive: true,
      lastRun: new Date('2024-01-14 09:00'),
      nextRun: new Date('2024-01-21 09:00')
    },
    {
      id: '2',
      name: 'Генерация отчетов',
      description: 'Ежедневная генерация отчетов по использованию',
      steps: ['Сбор метрик', 'Анализ данных', 'Создание отчета', 'Отправка email'],
      isActive: true,
      lastRun: new Date('2024-01-15 08:00'),
      nextRun: new Date('2024-01-16 08:00')
    }
  ]);

  const handleTaskStart = (taskId: string) => {
    setAssistantTasks(tasks => tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: 'in_progress' as const }
        : task
    ));
  };

  const handleTaskComplete = (taskId: string) => {
    setAssistantTasks(tasks => tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: 'completed' as const, progress: 100 }
        : task
    ));
  };

  const handleSuggestionAccept = (suggestionId: string) => {
    // Simulate accepting suggestion
    console.log(`Accepting suggestion: ${suggestionId}`);
  };

  const handleSuggestionReject = (suggestionId: string) => {
    // Simulate rejecting suggestion
    console.log(`Rejecting suggestion: ${suggestionId}`);
  };

  const handleSmartTrain = () => {
    // Simulate Smart Train
    const newTask: AssistantTask = {
      id: Date.now().toString(),
      title: 'Smart Train - Автоматическое обучение',
      description: 'AI автоматически настраивает параметры и обучает модель',
      status: 'in_progress',
      priority: 'high',
      estimatedTime: '30 минут',
      progress: 0
    };
    setAssistantTasks([newTask, ...assistantTasks]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in_progress': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-ассистент</h1>
        <p className="text-gray-600">Автоматизация и интеллектуальные рекомендации для вашей платформы</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'dashboard', name: 'Панель', icon: SparklesIcon },
            { id: 'tasks', name: 'Задачи', icon: CogIcon },
            { id: 'suggestions', name: 'Рекомендации', icon: LightBulbIcon },
            { id: 'workflows', name: 'Workflows', icon: ArrowPathIcon },
            { id: 'editor', name: 'AI-редактор', icon: PencilIcon }
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

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={handleSmartTrain}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              <div className="flex items-center space-x-3">
                <SparklesIcon className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Smart Train</h3>
                  <p className="text-sm opacity-90">Автоматическое обучение</p>
                </div>
              </div>
            </button>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-3">
                <LightBulbIcon className="h-8 w-8 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">3</h3>
                  <p className="text-sm text-gray-600">Новые рекомендации</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-3">
                <CogIcon className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">2</h3>
                  <p className="text-sm text-gray-600">Активные задачи</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-3">
                <ArrowPathIcon className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">2</h3>
                  <p className="text-sm text-gray-600">Активные workflows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Последняя активность</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-900">Задача завершена</p>
                  <p className="text-sm text-green-700">Анализ производительности модели - 2 минуты назад</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <CogIcon className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Задача запущена</p>
                  <p className="text-sm text-blue-700">Оптимизация датасета Legal Documents - 5 минут назад</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <LightBulbIcon className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-900">Новая рекомендация</p>
                  <p className="text-sm text-yellow-700">Добавить больше примеров юридических документов - 10 минут назад</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div className="space-y-4">
          {assistantTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{task.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status === 'completed' ? 'Завершено' :
                       task.status === 'in_progress' ? 'Выполняется' :
                       task.status === 'failed' ? 'Ошибка' : 'Ожидает'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{task.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>⏱️ {task.estimatedTime}</span>
                    <span>•</span>
                    <span>📊 {task.progress}%</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {task.status === 'pending' && (
                    <button
                      onClick={() => handleTaskStart(task.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <PlayIcon className="h-4 w-4" />
                      <span>Запустить</span>
                    </button>
                  )}
                  {task.status === 'in_progress' && (
                    <button
                      onClick={() => handleTaskComplete(task.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                    >
                      <CheckCircleIcon className="h-4 w-4" />
                      <span>Завершить</span>
                    </button>
                  )}
                </div>
              </div>
              
              {task.status === 'in_progress' && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Прогресс</span>
                    <span>{task.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Suggestions Tab */}
      {activeTab === 'suggestions' && (
        <div className="space-y-4">
          {smartSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{suggestion.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                      {suggestion.impact} impact
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {suggestion.effort} effort
                    </span>
                  </div>
                  <p className="text-gray-600">{suggestion.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSuggestionAccept(suggestion.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Принять
                  </button>
                  <button
                    onClick={() => handleSuggestionReject(suggestion.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Отклонить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Workflows Tab */}
      {activeTab === 'workflows' && (
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      workflow.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {workflow.isActive ? 'Активен' : 'Неактивен'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{workflow.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Шаги:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                      {workflow.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>Последний запуск: {workflow.lastRun.toLocaleString('ru-RU')}</p>
                  <p>Следующий запуск: {workflow.nextRun.toLocaleString('ru-RU')}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Запустить сейчас
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                  Настроить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AI Editor Tab */}
      {activeTab === 'editor' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-редактор датасета</h3>
            <p className="text-gray-600 mb-6">
              Автоматически улучшайте стиль и качество текста для лучшего обучения модели
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Исходный текст</h4>
                <textarea
                  className="w-full h-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Вставьте текст для улучшения..."
                  defaultValue="Договор аренды помещения заключается между арендодателем и арендатором. Арендатор обязуется платить арендную плату в размере 50000 рублей в месяц."
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Улучшенный текст</h4>
                <div className="w-full h-64 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="text-gray-700">
                    <strong>Договор аренды нежилого помещения</strong><br/><br/>
                    Настоящий договор заключается между:<br/>
                    • <strong>Арендодателем:</strong> [ФИО/наименование организации]<br/>
                    • <strong>Арендатором:</strong> [ФИО/наименование организации]<br/><br/>
                    <strong>Условия аренды:</strong><br/>
                    • Размер арендной платы: 50 000 (пятьдесят тысяч) рублей в месяц<br/>
                    • Срок аренды: [указать период]<br/>
                    • Порядок оплаты: ежемесячно, до 10 числа текущего месяца
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Улучшить текст
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Применить изменения
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Генератор тестов</h3>
            <p className="text-gray-600 mb-6">
              Автоматически создавайте примеры вопросов для проверки обученной модели
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Примеры вопросов для Legal Assistant:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Как оформить договор аренды нежилого помещения?</li>
                  <li>Какие документы нужны для регистрации ООО?</li>
                  <li>Как расторгнуть трудовой договор по соглашению сторон?</li>
                  <li>Какие права имеет арендатор при досрочном расторжении договора?</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Примеры вопросов для Technical Support:</h4>
                <ul className="list-disc list-inside space-y-1 text-green-700">
                  <li>Как настроить VPN подключение?</li>
                  <li>Что делать, если не работает корпоративная почта?</li>
                  <li>Как получить доступ к корпоративному Wi-Fi?</li>
                  <li>Какие требования к паролям в корпоративной системе?</li>
                </ul>
              </div>
            </div>
            
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
              Сгенерировать новые тесты
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
