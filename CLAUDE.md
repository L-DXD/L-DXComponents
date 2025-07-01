# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Web Components library built with LitElement (Lit 3.x) that provides form controls and UI components. The project uses modern web standards and decorators for component definition.

## Common Commands

### Development
- `npm run dev` - Start development server on port 7600
- `npm run build` - Build for production (clears vite cache first)
- `npm run preview` - Preview production build

### Storybook
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

### Versioning
- `npm run version` - Display current package version

## Architecture

### Component Hierarchy
The component architecture follows a three-tier inheritance pattern:
- `LitParents.js` (base class) → `LabelAndFeedContainer.js` → Individual Components (e.g., `Input.js`)

### Key Base Classes
- **LitParents**: Base class providing common functionality like selector management, value get/set, and event handling
- **LabelAndFeedContainer**: Extends LitParents with label and feedback container functionality for form controls

### Component Structure
- **Components**: Located in `src/components/` organized by type (button, input, select, text, container)
- **Stories**: Storybook stories in `stories/` directory mirror component structure
- **Styles**: Shared styles in `src/styles/` with `SharedStyles.js` and `TextStyles.js`

### Key Technologies
- **LitElement 3.x**: Base web component framework
- **Decorators**: Uses `@customElement` decorator (babel configured with legacy decorators)
- **Vite**: Build tool with custom configuration for component library
- **Storybook**: Component documentation and testing

### Component Naming Convention
- Components use `l-c-` prefix (e.g., `l-c-input`)
- File names use PascalCase (e.g., `Input.js`)
- Component classes extend base classes and use decorators

### Build Configuration
- Source root: `src/`
- Output: `dist/`
- Dev server: Port 7600
- Versioned asset output with package version
- Babel transformation for decorators support

### Special Features
- Pattern-based input validation with Korean character support
- Search input styling with built-in icons
- Form validation integration
- Responsive label positioning (left/top alignment)

## Development Notes

### Decorator Configuration
The project uses legacy decorators configuration. `@customElement` works but `@property` requires static properties declaration instead.

### Lit Directives Used
- `ifDefined`: Conditionally sets attributes only when values are defined
- `classMap`: Dynamic CSS class application