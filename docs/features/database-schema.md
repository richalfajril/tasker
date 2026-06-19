# Database Schema

## Purpose
Skema database untuk entitas `tasks`.

## Schema
Table: `tasks`
- `id` (uuid, primary key, default `gen_random_uuid()`)
- `title` (text, not null)
- `description` (text, nullable)
- `category` (text, check in `'bugs'`, `'adjust'`, `'findings'`)
- `status` (text, default `'ongoing'`, check in `'ongoing'`, `'done'`)
- `created_at` (timestamptz, default `now()`)
- `updated_at` (timestamptz, default `now()`)
