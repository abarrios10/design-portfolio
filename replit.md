# Overview

This is a full-stack web application built as a personal portfolio website for a Mechanical Engineering student at UT Austin. The application showcases projects, resume information, and provides contact functionality through a modern, responsive interface. It features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Library**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode support

## Backend Architecture
- **Framework**: Express.js with TypeScript for type safety
- **Development Server**: Custom Vite integration for hot module replacement in development
- **Database Layer**: Drizzle ORM with PostgreSQL (configured for Neon Database)
- **Data Storage**: Dual storage implementation - in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful API structure with /api prefix for all endpoints

## Component Structure
- **Page Components**: Single-page application with sections for hero, projects, resume, about, and contact
- **UI Components**: Comprehensive shadcn/ui component library including forms, dialogs, cards, and navigation
- **Layout System**: Responsive design with mobile-first approach using Tailwind breakpoints
- **Theme System**: Light/dark mode toggle with CSS custom properties for consistent theming

## Database Schema
- **Users Table**: Basic user authentication schema with username and password fields
- **Schema Management**: Drizzle migrations with schema validation using Zod
- **Type Safety**: Full TypeScript integration with inferred types from database schema

## Build and Deployment
- **Development**: Vite dev server with Express backend proxy
- **Production Build**: Separate frontend (Vite) and backend (esbuild) builds
- **Static Assets**: Vite handles frontend assets, Express serves the built application
- **Environment Configuration**: Environment-based configuration for database connections and development features

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon Database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **express**: Web application framework for Node.js backend

## Frontend UI Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation resolvers for React Hook Form
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **wouter**: Minimalist routing library for React

## Development and Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript/TypeScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment

## Utility Libraries
- **zod**: TypeScript-first schema validation
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: URL-safe unique string ID generator