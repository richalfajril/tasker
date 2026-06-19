# CHANGELOG.md

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-06-20

### Added
- Productivity fields: Priority (`low`, `medium`, `high`), Labels (multiple), Due Date
- UI displays for priority badges and deadline tracking
- Database schema migration to support new productivity columns

## [1.1.0] - 2026-06-20

### Added
- Sort and Filter functionalities for tasks on client side.
- Keyboard shortcuts (`Cmd+K` for search, `Cmd+N` for new task).
- Skeleton loading component for `TaskBoard`.

### Changed
- Improved loading state architecture utilizing React 19 `Suspense`.
- Refactored `TaskBoard` architecture to streamline components.
- Switch tab UI for category filters inside Ongoing and Done sections.
- Moved task description reading view from inline card to a modal `ViewTaskDialog` for cleaner layout.

## [1.0.0] - 2026-06-20

### Added
- Initial project setup with Next.js 15, TailwindCSS v4, shadcn/ui.
- Supabase MCP database connectivity.
- Task CRUD operations via Server Actions.
- Optimistic UI updates.
- Loading, Empty, and Toast notification states.
- Support for Category (Bugs, Adjust, Findings) and Status (Ongoing, Done).
