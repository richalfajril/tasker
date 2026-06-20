# CHANGELOG.md

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-06-20

### Added
- Productivity fields: Priority (`low`, `medium`, `high`), Labels (multiple), Due Date
- UI displays for priority badges and deadline tracking
- Database schema migration to support new productivity columns

### Changed
- Refactored component folder structure to use Feature-Sliced Design (Domain-based folders like `components/tasks/` and `components/common/`).

## [1.1.0] - 2026-06-20

### Added
- Sort and Filter functionalities for tasks on client side.
- Keyboard shortcuts (`Cmd+K` for search, `Cmd+N` for new task).
- Skeleton loading component for `TaskBoard`.
- Language toggle (ID/EN) for localization of UI text.

### Changed
- Improved loading state architecture utilizing React 19 `Suspense`.
- Refactored `TaskBoard` architecture to streamline components.
- Switch tab UI for category filters inside Ongoing and Done sections.
- Moved task description reading view from inline card to a modal `ViewTaskDialog` for cleaner layout.
- Changed page layout to a Dashboard Split structure (fixed width Sidebar on desktop, flexible Main Content for tasks) to maximize horizontal data capacity.
- Reverted Dashboard Split layout to a single-column layout with a unified TopBar. Integrated Header (Title, Language/Theme Toggles) directly into the TaskBoard inline with the Search and Sort inputs, removing the old Header component entirely.
- Replaced card-based `TaskCard` layout with a high-density, horizontal table-like list row for improved vertical capacity and readability. Actions are now hidden behind a hover state.
- Removed the Category badge from individual task items in the list to reduce visual clutter, since tasks are already grouped/filtered by category via tabs.
- Updated Priority badges with distinct colors (Red for High, Amber for Medium, Blue for Low) to make task urgency more immediately recognizable.
- Extracted Status Filter into a standalone `StatusToggle` component utilizing a custom iOS-style "airplane mode" Switch with colored indicators (Red for Undone, Green for Done) and animated text positioned *inside* the track.
- Grouped the Edit and Delete actions into a "..." (More horizontal) Dropdown Menu on each task row to save space and declutter the UI. Action buttons are now always visible without requiring hover.
- Moved "New Task" creation button out of the Sidebar and placed it adjacently to the right of the Category Tabs filter. Renamed to "+ Task" and removed visual `<kbd>` shortcut to save space.
- Refined translation dictionary: Changed label "Done" to "Selesai" in Indonesian mode.

## [1.0.0] - 2026-06-20

### Added
- Initial project setup with Next.js 15, TailwindCSS v4, shadcn/ui.
- Supabase MCP database connectivity.
- Task CRUD operations via Server Actions.
- Optimistic UI updates.
- Loading, Empty, and Toast notification states.
- Support for Category (Bugs, Adjust, Findings) and Status (Ongoing, Done).
