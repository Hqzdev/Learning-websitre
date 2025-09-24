import React, { useState } from 'react';
import { 
  CloudUploadIcon, 
  GlobeAltIcon, 
  DocumentTextIcon, 
  LanguageIcon,
  TrashIcon,
  EyeIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface Dataset {
  id: string;
  name: string;
  type: 'file' | 'website' | 'cloud';
  size: string;
  status: 'processing' | 'ready' | 'error';
  language: string;
  quality: number;
}

const DataManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [datasets, setDatasets] = useState<Dataset[]>([
    {
      id: '1',
      name: 'Legal Documents',
      type: 'file',
      size: '2.3 MB',
      status: 'ready',
      language: 'English',
      quality: 95
    },
    {
      id: '2',
      name: 'Company Wiki',
      type: 'website',
      size: '15.7 MB',
      status: 'processing',
      language: 'Russian',
      quality: 87
    }
  ]);

  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedCloud, setSelectedCloud] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');

  const handleWebsiteParse = () => {
    if (websiteUrl) {
      // Simulate website parsing
      const newDataset: Dataset = {
        id: Date.now().toString(),
        name: `Website: ${websiteUrl}`,
        type: 'website',
        size: '0 MB',
        status: 'processing',
        language: 'Auto-detect',
        quality: 0
      };
      setDatasets([...datasets, newDataset]);
      setWebsiteUrl('');
    }
  };

  const handleCloudImport = () => {
    if (selectedCloud) {
      // Simulate cloud import
      const newDataset: Dataset = {
        id: Date.now().toString(),
        name: `Cloud: ${selectedCloud}`,
        type: 'cloud',
        size: '0 MB',
        status: 'processing',
        language: 'Auto-detect',
        quality: 0
      };
      setDatasets([...datasets, newDataset]);
      setSelectedCloud('');
    }
  };

  const handleAutoTranslate = (datasetId: string) => {
    setDatasets(datasets.map(d => 
      d.id === datasetId 
        ? { ...d, language: targetLanguage || 'English', status: 'processing' as const }
        : d
    ));
  };

  const handleDatasetOptimize = (datasetId: string) => {
    setDatasets(datasets.map(d => 
      d.id === datasetId 
        ? { ...d, quality: Math.min(100, d.quality + 5), status: 'processing' as const }
        : d
    ));
  };

  const handleDatasetDelete = (datasetId: string) => {
    setDatasets(datasets.filter(d => d.id !== datasetId));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Management</h1>
        <p className="text-gray-600">Upload, process and optimize your datasets</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'upload', name: 'Upload', icon: CloudUploadIcon },
            { id: 'datasets', name: 'My Datasets', icon: DocumentTextIcon },
            { id: 'optimize', name: 'Optimization', icon: PencilIcon }
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

      {/* Upload Tab */}
      {activeTab === 'upload' && (
        <div className="space-y-8">
          {/* File Upload */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">File Upload</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <CloudUploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">Drag files here or click to select</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Choose Files
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Supported: PDF, DOC, TXT, CSV, JSON (up to 100MB)
              </p>
            </div>
          </div>

          {/* Website Parser */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Parser</h3>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="url"
                  placeholder="https://example.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                onClick={handleWebsiteParse}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span>Parse</span>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              System will automatically extract content and prepare dataset
            </p>
          </div>

          {/* Cloud Integration */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Google Drive', color: 'bg-blue-500' },
                { name: 'Dropbox', color: 'bg-blue-600' },
                { name: 'OneDrive', color: 'bg-blue-700' }
              ].map((cloud) => (
                <button
                  key={cloud.name}
                  onClick={() => setSelectedCloud(cloud.name)}
                  className={`p-4 rounded-lg border-2 ${
                    selectedCloud === cloud.name
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 ${cloud.color} rounded mb-2`}></div>
                  <p className="font-medium text-gray-900">{cloud.name}</p>
                </button>
              ))}
            </div>
            {selectedCloud && (
              <button
                onClick={handleCloudImport}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Import from {selectedCloud}
              </button>
            )}
          </div>

          {/* Auto Translation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto Translation</h3>
            <div className="flex space-x-4">
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select language</option>
                <option value="English">English</option>
                <option value="Russian">Русский</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="German">Deutsch</option>
              </select>
              <button
                disabled={!targetLanguage}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <LanguageIcon className="h-5 w-5" />
                <span>Translate</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Datasets Tab */}
      {activeTab === 'datasets' && (
        <div className="space-y-4">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{dataset.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{dataset.size}</span>
                      <span>•</span>
                      <span>{dataset.language}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        dataset.status === 'ready' 
                          ? 'bg-green-100 text-green-800'
                          : dataset.status === 'processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {dataset.status === 'ready' ? 'Ready' : 
                         dataset.status === 'processing' ? 'Processing' : 'Error'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Quality</p>
                      <p className="font-semibold text-gray-900">{dataset.quality}%</p>
                    </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDatasetOptimize(dataset.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      title="Optimize"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleAutoTranslate(dataset.id)}
                      className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                      title="Translate"
                    >
                      <LanguageIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDatasetDelete(dataset.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Delete"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Optimize Tab */}
      {activeTab === 'optimize' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dataset Compression</h3>
            <p className="text-gray-600 mb-4">
              Remove duplicates and clean data to improve training quality
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Optimize All Datasets
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Editor</h3>
            <p className="text-gray-600 mb-4">
              Manual editing and data cleaning with text highlighting
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Open Editor
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Recommendations</h3>
            <div className="space-y-3">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Recommendation:</strong> Add more operation instructions to improve answer quality
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  <strong>Tip:</strong> Increase the number of question and answer examples for better training
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataManagement;
