# Portfolio Website - MERN Stack

## Overview

This is a modern, responsive portfolio website built using a full-stack architecture with React frontend, Express.js backend, PostgreSQL database, and TypeScript throughout. The application is designed to showcase professional information, skills, projects, and experience with smooth animations and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Animation**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### UI/UX Design System
- **Theme**: Light/dark mode support with CSS custom properties
- **Typography**: Modern font stack with careful spacing and hierarchy
- **Color Palette**: Purple/blue gradient theme with neutral base colors
- **Layout**: Mobile-first responsive design with smooth scrolling navigation
- **Animations**: Entrance animations, hover effects, and scroll-based reveals

## Key Components

### Database Schema
The application uses a well-structured PostgreSQL schema with the following main entities:
- **Profile**: Basic personal information and contact details
- **Skills**: Categorized technical skills with proficiency levels
- **Projects**: Portfolio projects with technologies, descriptions, and links
- **Experiences**: Work experience with company details and date ranges
- **Education**: Academic background information
- **Contacts**: Form submissions from visitors

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling and active section highlighting
- **Hero Section**: Animated introduction with call-to-action buttons
- **About Section**: Personal summary with animated reveal effects
- **Skills Section**: Categorized skill display with visual indicators
- **Projects Section**: Featured project cards with hover effects
- **Experience Section**: Timeline layout for professional and educational history
- **Contact Section**: Interactive form with validation and toast notifications
- **Theme Provider**: Dark/light mode toggle with persistent preferences

### API Layer
RESTful API endpoints for:
- Profile data retrieval
- Skills management (with category filtering)
- Projects listing (with featured project filtering)
- Experience and education data
- Contact form submissions

## Data Flow

1. **Initial Load**: React Query fetches all necessary data from Express API endpoints
2. **User Interaction**: Form submissions and theme changes trigger API calls or local state updates
3. **Data Persistence**: PostgreSQL stores all content data and user messages
4. **Real-time Updates**: React Query handles optimistic updates and cache invalidation
5. **Animation Triggers**: Framer Motion responds to scroll events and user interactions

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm and drizzle-kit for database management
- **UI Framework**: Extensive Radix UI component collection
- **Animation**: framer-motion for advanced animations
- **Forms**: @hookform/resolvers with react-hook-form for form validation
- **Date Handling**: date-fns for date formatting and manipulation

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast backend bundling for production
- **Vite**: Frontend development server and build tool
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### External Integrations
- **GitHub**: Profile and project repository links
- **LeetCode**: Coding platform profile integration
- **GeeksforGeeks**: Programming platform profile showcase
- **Resume Download**: PDF resume download functionality

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot reload
- **Backend**: tsx for TypeScript execution with nodemon-like behavior
- **Database**: Drizzle migrations for schema management
- **Environment**: Replit-optimized with development banner integration

### Production Build
- **Frontend**: Static build output to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Database**: Migration-based schema updates
- **Serving**: Express serves both API and static frontend files

### Key Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Progressive Enhancement**: Works with JavaScript disabled for core content