import { useState, useCallback } from 'react'
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react'

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: 'uploading' | 'processing' | 'completed' | 'error'
  pages?: number
  tokens?: number
}

const UploadData = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading'
      }
      
      setUploadedFiles(prev => [...prev, newFile])
      
      // Simulate upload and processing
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === newFile.id 
              ? { ...f, status: 'processing' }
              : f
          )
        )
        
        setTimeout(() => {
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === newFile.id 
                ? { 
                    ...f, 
                    status: 'completed',
                    pages: Math.floor(Math.random() * 50) + 10,
                    tokens: Math.floor(Math.random() * 10000) + 1000
                  }
                : f
            )
          )
        }, 2000)
      }, 1000)
    })
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploading':
        return <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
      case 'processing':
        return <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'uploading':
        return 'Uploading...'
      case 'processing':
        return 'Processing...'
      case 'completed':
        return 'Completed'
      case 'error':
        return 'Error'
      default:
        return 'Unknown'
    }
  }

  const totalPages = uploadedFiles
    .filter(f => f.status === 'completed')
    .reduce((sum, f) => sum + (f.pages || 0), 0)

  const totalTokens = uploadedFiles
    .filter(f => f.status === 'completed')
    .reduce((sum, f) => sum + (f.tokens || 0), 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Upload Data</h1>
        <p className="text-gray-600 mt-2">Upload your documents to train your AI model</p>
      </div>

      {/* Upload Area */}
      <div className="card">
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
            isDragOver 
              ? 'border-black bg-gray-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-black mb-2">Drop files here</h3>
          <p className="text-gray-600 mb-4">
            Or click to browse and select files
          </p>
          <input
            type="file"
            multiple
            accept=".pdf,.docx,.txt,.csv"
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="btn-primary cursor-pointer"
          >
            Choose Files
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: PDF, DOCX, TXT, CSV (Max 100MB per file)
          </p>
        </div>
      </div>

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-black mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-black">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)} • {file.type}
                    </p>
                    {file.status === 'completed' && file.pages && file.tokens && (
                      <p className="text-xs text-gray-500">
                        {file.pages} pages • {file.tokens.toLocaleString()} tokens
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    {getStatusIcon(file.status)}
                    <span className="ml-2 text-sm text-gray-600">
                      {getStatusText(file.status)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      {uploadedFiles.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-black mb-4">Dataset Summary</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{uploadedFiles.length}</div>
              <div className="text-sm text-gray-600">Files Uploaded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{totalPages}</div>
              <div className="text-sm text-gray-600">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">{totalTokens.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Tokens</div>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps */}
      {uploadedFiles.some(f => f.status === 'completed') && (
        <div className="card">
          <h3 className="text-lg font-semibold text-black mb-4">Ready for Training</h3>
          <p className="text-gray-600 mb-4">
            Your data has been processed and is ready for model training. 
            You can now proceed to the training section to create your AI model.
          </p>
          <button className="btn-primary">
            Start Training
          </button>
        </div>
      )}
    </div>
  )
}

export default UploadData
