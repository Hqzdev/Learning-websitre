import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Play, Pause, Settings, CheckCircle, Clock, AlertCircle } from 'lucide-react'

interface TrainingJob {
  id: string
  name: string
  modelSize: string
  status: 'pending' | 'running' | 'completed' | 'failed'
  progress: number
  startTime?: string
  estimatedTime?: string
  accuracy?: number
}

const Training = () => {
  const { user } = useAuth()
  const [selectedModel, setSelectedModel] = useState('2B')
  const [epochs, setEpochs] = useState(3)
  const [datasetSize, setDatasetSize] = useState('small')
  const [language, setLanguage] = useState('english')
  const [trainingJobs, setTrainingJobs] = useState<TrainingJob[]>([])
  const [isTraining, setIsTraining] = useState(false)

  const modelSizes = [
    { value: '2B', label: '2B Parameters', available: true },
    { value: '7B', label: '7B Parameters', available: user?.subscription !== 'basic' },
    { value: '13B', label: '13B Parameters', available: user?.subscription === 'enterprise' },
    { value: '16B', label: '16B Parameters', available: user?.subscription === 'enterprise' }
  ]

  const datasetSizes = [
    { value: 'small', label: 'Small (< 1GB)', description: 'Quick training, basic accuracy' },
    { value: 'medium', label: 'Medium (1-5GB)', description: 'Balanced training time and accuracy' },
    { value: 'large', label: 'Large (5-20GB)', description: 'Longer training, higher accuracy' }
  ]

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'multilingual', label: 'Multilingual' }
  ]

  const startTraining = () => {
    if (!user) return

    const newJob: TrainingJob = {
      id: Date.now().toString(),
      name: `Model ${trainingJobs.length + 1}`,
      modelSize: selectedModel,
      status: 'pending',
      progress: 0,
      startTime: new Date().toISOString()
    }

    setTrainingJobs(prev => [newJob, ...prev])
    setIsTraining(true)

    // Simulate training progress
    simulateTraining(newJob.id)
  }

  const simulateTraining = (jobId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      
      setTrainingJobs(prev => 
        prev.map(job => 
          job.id === jobId 
            ? { 
                ...job, 
                status: 'running',
                progress: Math.min(progress, 100)
              }
            : job
        )
      )

      if (progress >= 100) {
        clearInterval(interval)
        setTrainingJobs(prev => 
          prev.map(job => 
            job.id === jobId 
              ? { 
                  ...job, 
                  status: 'completed',
                  progress: 100,
                  accuracy: Math.random() * 20 + 80
                }
              : job
          )
        )
        setIsTraining(false)
      }
    }, 1000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-600" />
      case 'running':
        return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Queued'
      case 'running':
        return 'Training...'
      case 'completed':
        return 'Completed'
      case 'failed':
        return 'Failed'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Training</h1>
        <p className="text-gray-600 mt-2">Configure and start training your AI model</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Training Configuration */}
        <div className="card">
          <h2 className="text-xl font-semibold text-black mb-6">Training Configuration</h2>
          
          <div className="space-y-6">
            {/* Model Size */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Model Size
              </label>
              <div className="space-y-2">
                {modelSizes.map((model) => (
                  <label key={model.value} className="flex items-center">
                    <input
                      type="radio"
                      name="modelSize"
                      value={model.value}
                      checked={selectedModel === model.value}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      disabled={!model.available}
                      className="mr-3"
                    />
                    <span className={`${!model.available ? 'text-gray-400' : 'text-black'}`}>
                      {model.label}
                      {!model.available && ' (Upgrade required)'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Epochs */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Training Epochs: {epochs}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={epochs}
                onChange={(e) => setEpochs(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 (Fast)</span>
                <span>10 (Thorough)</span>
              </div>
            </div>

            {/* Dataset Size */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Dataset Size
              </label>
              <div className="space-y-2">
                {datasetSizes.map((size) => (
                  <label key={size.value} className="flex items-center">
                    <input
                      type="radio"
                      name="datasetSize"
                      value={size.value}
                      checked={datasetSize === size.value}
                      onChange={(e) => setDatasetSize(e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <span className="text-black">{size.label}</span>
                      <p className="text-sm text-gray-500">{size.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="input-field"
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Training Button */}
            <button
              onClick={startTraining}
              disabled={isTraining}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTraining ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Training...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Start Training
                </>
              )}
            </button>
          </div>
        </div>

        {/* Training Jobs */}
        <div className="card">
          <h2 className="text-xl font-semibold text-black mb-6">Training Jobs</h2>
          
          {trainingJobs.length === 0 ? (
            <div className="text-center py-8">
              <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No training jobs yet</p>
              <p className="text-sm text-gray-500">Start a training job to see it here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {trainingJobs.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {getStatusIcon(job.status)}
                      <span className="ml-2 font-medium text-black">{job.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{job.modelSize}</span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{getStatusText(job.status)}</span>
                      <span>{Math.round(job.progress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-black h-2 rounded-full transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {job.status === 'completed' && job.accuracy && (
                    <div className="text-sm text-gray-600">
                      Accuracy: {job.accuracy.toFixed(1)}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Training Tips */}
      <div className="card">
        <h3 className="text-lg font-semibold text-black mb-4">Training Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-black mb-2">For Better Results</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use high-quality, relevant data</li>
              <li>• Ensure data is properly formatted</li>
              <li>• Start with smaller models for testing</li>
              <li>• Monitor training progress regularly</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-black mb-2">Training Time Estimates</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 2B model: 30-60 minutes</li>
              <li>• 7B model: 2-4 hours</li>
              <li>• 13B model: 4-8 hours</li>
              <li>• 16B model: 6-12 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training
