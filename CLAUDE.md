# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (add `-- --open` to open in browser)
- `npm run build` - Build for production
- `npm run preview` - Preview built app
- `npm run lint` - Run linting with prettier and eslint
- `npm run format` - Format code with prettier

## Architecture

This is a SvelteKit portfolio site (tcollins.dev) using static site generation with the following structure:

### Key Components
- **src/routes/+page.svelte** - Main page combining all portfolio sections
- **src/components/** - Reusable Svelte components (hero, nav, projects, work, skills, cta)
- **src/config/i18n.js** - Central data store containing all portfolio content (work history, projects, skills)

### Configuration
- **Static adapter** configured in svelte.config.js for deployment
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **ESLint + Prettier** for code quality

### Content Management
All portfolio content is centralized in `src/config/i18n.js` including:
- Work experience with company details and responsibilities
- Project showcase with technologies and descriptions  
- Skills categorized by production and side projects
- Personal information and hero content

The site follows a component-based architecture where each section (Hero, Work, Projects, Skills) is a separate Svelte component that imports data from the central i18n config.