import React, { useState } from 'react';
import { 
  CpuChipIcon, 
  DocumentTextIcon, 
  ArrowPathIcon,
  PlayIcon,
  PauseIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  BookOpenIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface TrainingJob {
  id: string;
  name: string;
  type: 'finetune' | 'rag' | 'streaming';
  status: 'running' | 'completed' | 'failed' | 'paused';
  progress: number;
  startTime: string;
  duration: string;
  accuracy: number;
}

interface TrainingTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ComponentType<any>;
  settings: any;
}

const AdvancedTraining: React.FC = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [trainingJobs, setTrainingJobs] = useState<TrainingJob[]>([
    {
      id: '1',
      name: 'Legal Assistant v2.1',
      type: 'finetune',
      status: 'running',
      progress: 65,
      startTime: '2024-01-15 14:30',
      duration: '2h 15m',
      accuracy: 0
    },
    {
      id: '2',
      name: 'Company Knowledge Base',
      type: 'rag',
      status: 'completed',
      progress: 100,
      startTime: '2024-01-14 09:00',
      duration: '4h 30m',
      accuracy: 94
    }
  ]);

  const templates: TrainingTemplate[] = [
    {
      id: 'legal',
      name: 'Legal Model',
      description: 'Specialized model for working with legal documents',
      category: 'Professional',
      icon: BookOpenIcon,
      settings: {
        modelSize: '7B',
        epochs: 3,
        learningRate: 0.0001,
        batchSize: 4
      }
    },
    {
      id: 'technical',
      name: 'Technical Documentation',
      description: 'Model for processing technical documents and instructions',
      category: 'Technical',
      icon: DocumentTextIcon,
      settings: {
        modelSize: '3B',
        epochs: 5,
        learningRate: 0.0002,
        batchSize: 8
      }
    },
    {
      id: 'faq',
      name: 'FAQ Database',
      description: 'Model for answering frequently asked questions',
      category: 'Support',
      icon: SparklesIcon,
      settings: {
        modelSize: '2B',
        epochs: 2,
        learningRate: 0.0003,
        batchSize: 16
      }
    }
  ];

  const handleStartTraining = (template: TrainingTemplate) => {
    const newJob: TrainingJob = {
      id: Date.now().toString(),
      name: template.name,
      type: 'finetune',
      status: 'running',
      progress: 0,
      startTime: new Date().toLocaleString(),
      duration: '0m',
      accuracy: 0
    };
    setTrainingJobs([newJob, ...trainingJobs]);
  };

  const handlePauseResume = (jobId: string) => {
    setTrainingJobs(jobs => jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'running' ? 'paused' : 'running' }
        : job
    ));
  };

  const handleSmartTrain = () => {
    const newJob: TrainingJob = {
      id: Date.now().toString(),
      name: 'Smart Train - Автоматическая настройка',
      type: 'finetune',
      status: 'running',
      progress: 0,
      startTime: new Date().toLocaleString(),
      duration: '0m',
      accuracy: 0
    };
    setTrainingJobs([newJob, ...trainingJobs]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Training</h1>
        <p className="text-gray-600">Fine-tuning, RAG and streaming training for maximum efficiency</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'templates', name: 'Templates', icon: BookOpenIcon },
            { id: 'jobs', name: 'Training Jobs', icon: CpuChipIcon },
            { id: 'settings', name: 'Settings', icon: CogIcon }
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

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          {/* Smart Train */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Train</h3>
                <p className="text-gray-600 mb-4">
                  Automatic training without parameter configuration. AI will choose optimal settings.
                </p>
                <button
                  onClick={handleSmartTrain}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 flex items-center space-x-2"
                >
                  <SparklesIcon className="h-5 w-5" />
                  <span>Smart Train</span>
                </button>
              </div>
              <div className="text-6xl text-purple-300">
                <SparklesIcon className="h-16 w-16" />
              </div>
            </div>
          </div>

          {/* Training Templates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <template.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-500">{template.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Модель:</span>
                    <span className="font-medium">{template.settings.modelSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Эпохи:</span>
                    <span className="font-medium">{template.settings.epochs}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Learning Rate:</span>
                    <span className="font-medium">{template.settings.learningRate}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleStartTraining(template)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Start Training
                </button>
              </div>
            ))}
          </div>

          {/* Fine-tuning + RAG */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fine-tuning + RAG</h3>
            <p className="text-gray-600 mb-4">
              Combine model training with knowledge base connection for maximum accuracy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Fine-tuning Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Model Size</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>2B (fast, basic quality)</option>
                        <option>7B (balanced)</option>
                        <option>13B (high quality)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Epochs</label>
                      <input type="number" defaultValue="3" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">RAG Settings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Knowledge Base</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>Select dataset</option>
                        <option>Legal Documents</option>
                        <option>Company Wiki</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Relevant Documents</label>
                      <input type="number" defaultValue="5" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>
            </div>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Start Combined Training
            </button>
          </div>

          {/* Streaming Training */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Streaming Training</h3>
            <p className="text-gray-600 mb-4">
              Automatically add new data to the model without restarting training
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Enable Streaming Training
              </button>
              <span className="text-sm text-gray-500">
                New data will be automatically added to the model
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Jobs Tab */}
      {activeTab === 'jobs' && (
        <div className="space-y-4">
          {trainingJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CpuChipIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{job.startTime}</span>
                      <span>•</span>
                      <span>{job.duration}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        job.status === 'running' 
                          ? 'bg-green-100 text-green-800'
                          : job.status === 'completed'
                          ? 'bg-blue-100 text-blue-800'
                          : job.status === 'failed'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {job.status === 'running' ? 'Выполняется' : 
                         job.status === 'completed' ? 'Завершено' : 
                         job.status === 'failed' ? 'Ошибка' : 'Приостановлено'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {job.status === 'completed' && (
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Точность</p>
                      <p className="font-semibold text-green-600">{job.accuracy}%</p>
                    </div>
                  )}
                  <div className="flex space-x-2">
                    {job.status === 'running' && (
                      <button
                        onClick={() => handlePauseResume(job.id)}
                        className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg"
                        title="Приостановить"
                      >
                        <PauseIcon className="h-5 w-5" />
                      </button>
                    )}
                    {job.status === 'paused' && (
                      <button
                        onClick={() => handlePauseResume(job.id)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                        title="Продолжить"
                      >
                        <PlayIcon className="h-5 w-5" />
                      </button>
                    )}
                    {job.status === 'completed' && (
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Скачать модель">
                        <ArrowPathIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {job.status === 'running' && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Прогресс</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {job.status === 'completed' && job.accuracy > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Обучение завершено успешно!</span>
                  </div>
                  <p className="text-green-700 mt-1">
                    Точность модели: {job.accuracy}% • Время обучения: {job.duration}
                  </p>
                </div>
              )}

              {job.status === 'failed' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-800">Ошибка при обучении</span>
                  </div>
                  <p className="text-red-700 mt-1">
                    Проверьте настройки и попробуйте снова
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Настройки обучения</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GPU ускорение</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Автоматически</option>
                    <option>NVIDIA GPU</option>
                    <option>CPU только</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Максимальное время обучения</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>2 часа</option>
                    <option>6 часов</option>
                    <option>12 часов</option>
                    <option>24 часа</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Автосохранение</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Каждые 30 минут</option>
                    <option>Каждый час</option>
                    <option>Каждые 2 часа</option>
                    <option>Отключено</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Уведомления</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Email при завершении</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">Push уведомления</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Сохранить настройки
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedTraining;
