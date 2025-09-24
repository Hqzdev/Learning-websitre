import { useState } from 'react'
import { Plus, Brain, Play, Trash2, MoreVertical, CheckCircle, Clock, AlertCircle } from 'lucide-react'

interface Model {
  id: string
  name: string
  size: string
  status: 'trained' | 'training' | 'failed'
  createdAt: string
  lastUsed: string
  accuracy: number
}

const MyModels = () => {
  const [models, setModels] = useState<Model[]>([
    {
      id: '1',
      name: 'Customer Support Bot',
      size: '7B',
      status: 'trained',
      createdAt: '2024-01-15',
      lastUsed: '2024-01-20',
      accuracy: 94.2
    },
    {
      id: '2',
      name: 'Legal Document Analyzer',
      size: '13B',
      status: 'training',
      createdAt: '2024-01-18',
      lastUsed: 'Never',
      accuracy: 0
    },
    {
      id: '3',
      name: 'Product Q&A Assistant',
      size: '2B',
      status: 'trained',
      createdAt: '2024-01-10',
      lastUsed: '2024-01-19',
      accuracy: 89.7
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'trained':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'training':
        return <Clock className="h-5 w-5 text-yellow-600" />
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'trained':
        return 'Ready'
      case 'training':
        return 'Training...'
      case 'failed':
        return 'Failed'
      default:
        return 'Unknown'
    }
  }

  const handleDelete = (id: string) => {
    setModels(models.filter(model => model.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">My Models</h1>
          <p className="text-gray-600 mt-2">Manage and monitor your AI models</p>
        </div>
        <button className="btn-primary">
          <Plus className="h-5 w-5 mr-2" />
          Create Model
        </button>
      </div>

      {models.length === 0 ? (
        <div className="card text-center py-12">
          <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-black mb-2">No models yet</h3>
          <p className="text-gray-600 mb-6">Create your first AI model to get started</p>
          <button className="btn-primary">
            <Plus className="h-5 w-5 mr-2" />
            Create Your First Model
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Accuracy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Used
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {models.map((model) => (
                  <tr key={model.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Brain className="h-8 w-8 text-black mr-3" />
                        <div>
                          <div className="text-sm font-medium text-black">{model.name}</div>
                          <div className="text-sm text-gray-500">Created {model.createdAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {model.size}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(model.status)}
                        <span className="ml-2 text-sm text-gray-900">{getStatusText(model.status)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {model.accuracy > 0 ? `${model.accuracy}%` : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {model.lastUsed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        {model.status === 'trained' && (
                          <button className="text-black hover:text-gray-700">
                            <Play className="h-4 w-4" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDelete(model.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Model Statistics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-black" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Models</p>
              <p className="text-2xl font-semibold text-black">{models.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Trained Models</p>
              <p className="text-2xl font-semibold text-black">
                {models.filter(m => m.status === 'trained').length}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Training</p>
              <p className="text-2xl font-semibold text-black">
                {models.filter(m => m.status === 'training').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyModels
