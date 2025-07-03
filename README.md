# CRM Dashboard - Lead Management System

A modern, feature-rich CRM dashboard built with Next.js 14, TypeScript, and Tailwind CSS for efficient lead management and customer relationship tracking.

## 🚀 Features

### Core CRM Functionality
- **Lead Management** - Complete lead tracking and status management
- **Kanban Board View** - Visual drag-and-drop lead pipeline
- **Table View** - Traditional CRM table with sorting and filtering
- **Real-time Search** - Multi-field search across all lead data
- **Status Filtering** - Filter leads by Active, On Hold, Not Started, Closed
- **Responsive Design** - Mobile-first responsive interface

### Technical Features
- **Next.js 14** - Latest version with App Router and improved performance
- **React 18** - Modern React with hooks and state management
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Drag & Drop** - HTML5 drag and drop API for kanban functionality

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn


## 🛠️ Installation

1. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

2. Start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
3. Open [http://localhost:4028](http://localhost:4028) with your browser to see the result.

## 📁 Project Structure

```
crm/
├── public/                           # Static assets and favicon
├── src/
│   ├── app/                         # App router pages
│   │   ├── all-leads-dashboard/     # Main CRM dashboard page
│   │   ├── layout.tsx               # Root layout component
│   │   └── page.tsx                 # Landing page
│   ├── components/                  # Reusable UI components
│   │   ├── common/                  # Common components (Header, Sidebar)
│   │   ├── features/                # Feature-specific components
│   │   ├── layout/                  # Layout components
│   │   └── ui/                      # Basic UI components
│   ├── hooks/                       # Custom React hooks
│   │   └── useLeadsData.ts          # Lead data management hook
│   └── styles/                      # Global styles and Tailwind config
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Project dependencies and scripts
├── postcss.config.js                # PostCSS configuration
└── tailwind.config.js               # Tailwind CSS configuration
```

## 🎯 CRM Features Overview

### Dashboard Views
- **Table View**: Traditional CRM table with sortable columns
- **Kanban View**: Visual pipeline with drag-and-drop functionality

### Lead Management
- Add, edit, and track lead information
- Status management (Active, On Hold, Not Started, Closed)
- Contact details and revenue tracking

### Search & Filtering
- Real-time search across all lead fields
- Status-based filtering
- Combined search and filter functionality

## 🎨 Styling

This project uses Tailwind CSS for styling with the following features:
- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## 📦 Available Scripts

- `npm run dev` - Start development server on port 4028
- `npm run build` - Build the application for production
- `npm run start` - Start the development server
- `npm run serve` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 📱 Deployment

Build the application for production:

  ```bash
  npm run build
  ```

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🙏 Acknowledgments

- Powered by Next.js and React
- Styled with Tailwind CSS
- Icons and components built with modern web standards

Built with ❤️ for efficient CRM management
