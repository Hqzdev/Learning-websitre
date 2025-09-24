import React, { useState } from 'react';
import { 
  CreditCardIcon, 
  ClockIcon, 
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CogIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

interface Invoice {
  id: string;
  number: string;
  date: Date;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  customer: string;
  description: string;
}

interface UsageStats {
  trainingHours: number;
  tokensUsed: number;
  apiCalls: number;
  storageUsed: number;
  cost: number;
}

interface TrialInfo {
  daysLeft: number;
  featuresUsed: string[];
  usageLimit: number;
  currentUsage: number;
}

const BusinessFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState('billing');
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [trialInfo] = useState<TrialInfo>({
    daysLeft: 5,
    featuresUsed: ['Data Management', 'Model Training', 'Chat Interface'],
    usageLimit: 100,
    currentUsage: 67
  });

  const [usageStats] = useState<UsageStats>({
    trainingHours: 12.5,
    tokensUsed: 125000,
    apiCalls: 2340,
    storageUsed: 2.3,
    cost: 89.50
  });

  const invoices: Invoice[] = [
    {
      id: '1',
      number: 'INV-2024-001',
      date: new Date('2024-01-15'),
      amount: 89.50,
      status: 'paid',
      customer: 'Company Ltd.',
      description: 'Pro Plan - January 2024'
    },
    {
      id: '2',
      number: 'INV-2024-002',
      date: new Date('2024-02-15'),
      amount: 89.50,
      status: 'pending',
      customer: 'Company Ltd.',
      description: 'Pro Plan - February 2024'
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Для начинающих',
      features: [
        'До 5 моделей',
        '10GB хранилища',
        'Базовые интеграции',
        'Email поддержка',
        'Стандартные шаблоны'
      ],
      limitations: [
        'Нет API доступа',
        'Ограниченная аналитика',
        'Нет командной работы'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 89,
      period: 'month',
      description: 'Для профессионалов',
      features: [
        'До 20 моделей',
        '100GB хранилища',
        'Все интеграции',
        'Приоритетная поддержка',
        'Расширенная аналитика',
        'API доступ',
        'Командная работа'
      ],
      limitations: [],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      period: 'month',
      description: 'Для больших команд',
      features: [
        'Неограниченные модели',
        '1TB хранилища',
        'White-label решения',
        'Персональный менеджер',
        'Кастомные интеграции',
        'SLA гарантии',
        'Обучение команды'
      ],
      limitations: []
    }
  ];

  const payAsYouGoRates = [
    { service: 'Обучение модели', rate: '$2.50/час', usage: '12.5 часов', cost: '$31.25' },
    { service: 'API токены', rate: '$0.0001/токен', usage: '125,000 токенов', cost: '$12.50' },
    { service: 'API вызовы', rate: '$0.02/вызов', usage: '2,340 вызовов', cost: '$46.80' },
    { service: 'Хранилище', rate: '$0.10/GB/месяц', usage: '2.3 GB', cost: '$0.23' }
  ];

  const handlePlanChange = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleInvoiceDownload = (invoiceId: string) => {
    console.log(`Downloading invoice: ${invoiceId}`);
  };

  const handleInvoiceView = (invoiceId: string) => {
    console.log(`Viewing invoice: ${invoiceId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Бизнес-функции</h1>
        <p className="text-gray-600">Управление подпиской, биллинг и корпоративные функции</p>
      </div>

      {/* Trial Banner */}
      {trialInfo.daysLeft > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ClockIcon className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-900">
                  Пробный период: {trialInfo.daysLeft} дней осталось
                </h3>
                <p className="text-blue-700 text-sm">
                  Использовано {trialInfo.currentUsage}% от лимита ({trialInfo.usageLimit} часов обучения)
                </p>
              </div>
            </div>
            <div className="w-48 bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${trialInfo.currentUsage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'billing', name: 'Биллинг', icon: CreditCardIcon },
            { id: 'usage', name: 'Использование', icon: ClockIcon },
            { id: 'invoices', name: 'Инвойсы', icon: DocumentTextIcon },
            { id: 'enterprise', name: 'Enterprise', icon: BuildingOfficeIcon }
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

      {/* Billing Tab */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Текущий план</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Активен
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900">Pro Plan</h4>
                <p className="text-gray-600">$89/месяц</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Следующее списание</p>
                <p className="font-semibold text-gray-900">15 февраля 2024</p>
              </div>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-lg border-2 p-6 ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <ExclamationTriangleIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handlePlanChange(plan.id)}
                  className={`w-full py-2 rounded-lg font-medium ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 text-white'
                      : plan.popular
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Текущий план' : 'Выбрать план'}
                </button>
              </div>
            ))}
          </div>

          {/* Pay-as-you-go */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pay-as-you-go</h3>
            <p className="text-gray-600 mb-4">
              Оплачивайте только за фактическое использование ресурсов
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Тарифы</h4>
                <div className="space-y-3">
                  {payAsYouGoRates.map((rate, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{rate.service}</p>
                        <p className="text-sm text-gray-600">{rate.rate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{rate.usage}</p>
                        <p className="font-medium text-gray-900">{rate.cost}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Итого за месяц</h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Общая стоимость</span>
                    <span className="text-2xl font-bold text-blue-900">${usageStats.cost}</span>
                  </div>
                  <div className="text-sm text-blue-700">
                    Экономия 15% по сравнению с фиксированным планом
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Usage Tab */}
      {activeTab === 'usage' && (
        <div className="space-y-6">
          {/* Usage Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Часы обучения</p>
                  <p className="text-2xl font-bold text-gray-900">{usageStats.trainingHours}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Токены</p>
                  <p className="text-2xl font-bold text-gray-900">{usageStats.tokensUsed.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">API вызовы</p>
                  <p className="text-2xl font-bold text-gray-900">{usageStats.apiCalls.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CogIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Хранилище</p>
                  <p className="text-2xl font-bold text-gray-900">{usageStats.storageUsed} GB</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ReceiptPercentIcon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Usage Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Детализация использования</h3>
            <div className="space-y-4">
              {payAsYouGoRates.map((rate, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <ClockIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{rate.service}</p>
                      <p className="text-sm text-gray-600">{rate.rate}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{rate.cost}</p>
                    <p className="text-sm text-gray-600">{rate.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Invoices Tab */}
      {activeTab === 'invoices' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Инвойсы</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Скачать все
              </button>
            </div>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <DocumentTextIcon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{invoice.number}</h4>
                      <p className="text-sm text-gray-600">{invoice.description}</p>
                      <p className="text-sm text-gray-500">{invoice.date.toLocaleDateString('ru-RU')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${invoice.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.status === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : invoice.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status === 'paid' ? 'Оплачен' : 
                         invoice.status === 'pending' ? 'Ожидает' : 'Просрочен'}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleInvoiceView(invoice.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        title="Просмотр"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleInvoiceDownload(invoice.id)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        title="Скачать"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enterprise Tab */}
      {activeTab === 'enterprise' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise функции</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">White-label решения</h4>
                  <p className="text-blue-700 text-sm">
                    Полностью кастомизируйте платформу под ваш бренд
                  </p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">SLA гарантии</h4>
                  <p className="text-green-700 text-sm">
                    99.9% uptime гарантия с компенсацией
                  </p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Персональный менеджер</h4>
                  <p className="text-purple-700 text-sm">
                    Выделенный менеджер для решения всех вопросов
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">Кастомные интеграции</h4>
                  <p className="text-yellow-700 text-sm">
                    Разработка интеграций под ваши системы
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <h4 className="font-medium text-indigo-900 mb-2">Обучение команды</h4>
                  <p className="text-indigo-700 text-sm">
                    Персональные тренинги для вашей команды
                  </p>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-900 mb-2">Приоритетная поддержка</h4>
                  <p className="text-red-700 text-sm">
                    Поддержка 24/7 с максимальным приоритетом
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Связаться с отделом продаж
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessFeatures;
