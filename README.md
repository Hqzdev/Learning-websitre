# Cognify - AI SaaS Platform

A minimalistic black and white AI SaaS platform built with React, TypeScript, and Tailwind CSS. Create, train, and deploy AI models in minutes.

## Features

### 🏠 Landing Page
- Hero section with clear value proposition
- How it works (3-step process)
- Pricing plans (Basic, Pro, Enterprise)
- Customer testimonials
- Clean, minimalistic design

### 🔐 Authentication
- User registration and login
- Social login (Google, GitHub)
- Protected routes
- Role-based access (User/Admin)

### 📊 Dashboard
- **Dashboard Home**: Overview, quick actions, recent activity
- **My Models**: Manage AI models, view training status
- **Upload Data**: Drag-and-drop file upload (PDF, DOCX, TXT, CSV)
- **Training**: Configure and start model training
- **Testing**: Chat interface to test trained models
- **API**: Generate API keys, view documentation
- **Subscription**: Manage billing and plans
- **Settings**: Account settings and preferences

### 👨‍💼 Admin Panel
- User management
- System monitoring
- Financial statistics
- Training logs
- System alerts

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Learning-websitre
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx              # Main layout with sidebar
│   └── ProtectedRoute.tsx      # Route protection
├── contexts/
│   └── AuthContext.tsx         # Authentication context
├── pages/
│   ├── HomePage.tsx            # Landing page
│   ├── LoginPage.tsx           # Login form
│   ├── RegisterPage.tsx        # Registration form
│   ├── Dashboard.tsx           # Dashboard router
│   ├── dashboard/              # Dashboard pages
│   │   ├── DashboardHome.tsx
│   │   ├── MyModels.tsx
│   │   ├── UploadData.tsx
│   │   ├── Training.tsx
│   │   ├── Testing.tsx
│   │   ├── API.tsx
│   │   ├── Subscription.tsx
│   │   └── Settings.tsx
│   └── AdminPanel.tsx         # Admin dashboard
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles
```

## Design System

### Colors
- **Primary**: Black (#000000)
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000)
- **Secondary Text**: Gray (#6B7280)
- **Borders**: Light Gray (#E5E7EB)

### Components
- **Buttons**: 
  - Primary: Black background, white text
  - Secondary: Black border, black text
- **Cards**: White background, gray border, rounded corners
- **Inputs**: Gray border, focus states with black ring

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, black
- **Body**: Regular, gray for secondary text

## User Flow

1. **Landing Page** → User sees value proposition
2. **Registration** → User creates account
3. **Dashboard** → User uploads data and trains models
4. **Testing** → User tests trained models
5. **API Integration** → User integrates models into applications
6. **Subscription** → User manages billing

## Features by Plan

### Basic ($49/month)
- 2B model access
- 10GB storage
- 100 API calls/month
- Email support

### Pro ($99/month)
- 7B model access
- 50GB storage
- 1000 API calls/month
- Priority support
- Advanced analytics

### Enterprise ($299/month)
- All model sizes (up to 16B)
- Unlimited storage
- Unlimited API calls
- 24/7 support
- Custom integrations
- Dedicated infrastructure

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- ESLint for code quality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@cognify.com or visit our documentation.
