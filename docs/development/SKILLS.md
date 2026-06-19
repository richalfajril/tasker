# SKILLS.md

This document contains reusable implementation patterns for the agent.

## Server Actions

Patterns for tasks:

* `createTask()`: Validate data with Zod, insert into Supabase, and revalidate path.
* `updateTask()`: Validate data, update existing record in Supabase, and revalidate path.
* `deleteTask()`: Delete record from Supabase and revalidate path.
* `toggleTaskStatus()`: Update task status between 'ongoing' and 'done'.

## Supabase

Patterns for:

* **select**: Fetch data directly in Server Components using Supabase Server Client.
* **insert**: Insert new records via Server Actions.
* **update**: Update records via Server Actions.
* **delete**: Remove records via Server Actions.

## Validation

Patterns using Zod:
* Create schemas for forms and server actions.
* Validate payloads before database operations.

## Forms

Patterns using shadcn/ui and installed shadcn/ui skills:
* Use `react-hook-form` integrated with Zod resolver for client-side validation.
* Connect form submission to Server Actions.

## Toast

Patterns using Sonner:
* Use `toast.success()`, `toast.error()`, `toast.info()` for immediate feedback upon action completion (create, update, delete).

## Date Formatting

Patterns using date-fns:
* Format `created_at` and `updated_at` dates for UI presentation.

## Icons

Patterns using lucide-react:
* Consistently use `lucide-react` icons.

## Folder Structure

Recommended structure:

```txt
app/
components/
lib/
types/
docs/
```

## Naming Conventions

* **Components**: PascalCase
* **Functions**: camelCase
* **Types**: PascalCase
* **Files**: kebab-case
