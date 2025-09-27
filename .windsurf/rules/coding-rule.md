---
trigger: always_on
---

# Next.js 15 + Token Studio Project Rules

## Design Tokens
- Design tokens are stored in `/tokens.json` at project root
- Import tokens directly as JSON in components and styles
- Never hardcode design values - always reference tokens
- Support theme switching through token sets

## Next.js 15 Architecture
- Use App Router with React 19 features enabled
- Leverage Turbopack for development (next dev --turbo)
- Server Components by default, use 'use client' only when needed
- File structure: /app directory with page.tsx and layout.tsx
- Use enhanced Server Actions with optimistic updates
- Implement Partial Prerendering (PPR) for optimal performance

## React 19 Features
- Use new `use()` hook for data fetching in Client Components
- Implement React Server Components streaming
- Leverage automatic batching for state updates
- Use new form actions and useFormStatus hook
- Apply useOptimistic for immediate UI feedback

## Component Standards
- Functional components only with TypeScript interfaces
- Named exports for all components
- File naming: PascalCase for components (UserCard.tsx)
- Folder naming: kebab-case (user-profile, auth-form)
- Colocate component files: Component, hooks, utils, types
- Use React 19 compiler optimizations (no manual memo needed)

## Routing & Metadata
- Use generateMetadata for dynamic SEO optimization
- Implement parallel routes for complex layouts
- Use intercepting routes for modals
- Configure route groups with (folder) syntax
- Static params with generateStaticParams for SSG

## Styling System
- Use Tailwind CSS v3.4+ with tokens.json configuration
- Import tokens.json directly in tailwind.config.ts
- CSS Modules for component-specific styles when needed
- Support light/dark themes through token sets
- Leverage CSS @layer for proper cascade control

## TypeScript Rules
- Strict mode always enabled with Next.js 15 config
- Prefer interfaces over types for objects
- No 'any' type - use 'unknown' or specific types
- Explicit return types for all functions
- Use const assertions for literal types
- Utilize satisfies operator for type validation

## Data Fetching & Caching
- Use Next.js 15 improved caching strategies
- Configure cache with 'force-cache', 'no-store', or revalidate
- Implement Server Components for initial data fetching
- TanStack Query v5 for client-side state management
- Use unstable_cache for expensive computations
- Configure fetch cache with next.revalidate

## Server Actions & Forms
- Use Server Actions for all mutations
- Implement useFormState and useFormStatus hooks
- Add optimistic updates with useOptimistic
- Progressive enhancement for forms
- Validate with zod or similar on server
- Return typed responses from Server Actions

## Performance Optimizations
- Enable Turbopack in development (--turbo flag)
- Use Partial Prerendering for mixed static/dynamic content
- Implement streaming SSR with Suspense boundaries
- Lazy load components with next/dynamic
- Optimize images with next/image
- Monitor Core Web Vitals

## Error Handling
- Implement error.tsx for route-level error boundaries
- Use not-found.tsx for 404 handling
- Global error handling in global-error.tsx
- Type-safe error messages with custom error classes

## Development Workflow
- Use Turbopack for faster HMR
- Enable React DevTools Profiler in development
- Configure VSCode with Windsurf rules integration
- Use Next.js 15 built-in TypeScript plugin
- Implement instrumentation.ts for monitoring
