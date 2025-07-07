# Aqua Flow Care Hub Information

## Summary
Aqua Flow Care Hub is a React-based web application built with Vite, TypeScript, and shadcn-ui components. It appears to be a website for a water care or aquatic services business, featuring sections for products, services, about information, and contact details.

## Structure
- **src/**: Contains all source code for the application
  - **components/**: UI components including main sections and shadcn-ui components
  - **pages/**: Page components for routing
  - **hooks/**: Custom React hooks
  - **lib/**: Utility functions
  - **assets/**: Static assets for the application
- **public/**: Static files served directly by the web server

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.5.3
**Build System**: Vite 5.4.1
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 18.3.1 and React DOM 18.3.1
- React Router DOM 6.26.2
- shadcn-ui components (via Radix UI primitives)
- TanStack React Query 5.56.2
- Tailwind CSS 3.4.11
- Zod 3.23.8 for schema validation
- React Hook Form 7.53.0

**Development Dependencies**:
- Vite 5.4.1 with SWC plugin
- ESLint 9.9.0
- TypeScript 5.5.3
- Tailwind CSS plugins
- Lovable Tagger 1.1.7

## Build & Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Application Structure
**Entry Point**: src/main.tsx
**Routing**: React Router DOM with BrowserRouter
**Main Components**:
- Header: Navigation and branding
- Hero: Main landing section
- Products: Product showcase
- Services: Services offered
- About: Company information
- Contact: Contact form or information
- Footer: Site footer with links and information

**State Management**:
- React Query for server state
- React hooks for local state

**UI Framework**:
- Tailwind CSS for styling
- shadcn-ui for UI components
- Responsive design with mobile hooks