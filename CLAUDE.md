# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is davidbonan.com - a personal portfolio and blog website built with Next.js 13+ App Router and Contentlayer for MDX content management. The site showcases blog posts and case studies with dynamic routing and content generation.

## Key Technologies

- **Next.js 13+** with App Router (`src/app/` directory structure)
- **Contentlayer** for MDX content processing and type generation
- **Tailwind CSS** for styling with custom configuration
- **MDX** for blog posts and case studies with syntax highlighting

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate RSS feeds
npm run rss
```

## Content Architecture

The site uses Contentlayer to manage two main content types:

### Blog Posts
- Location: `src/content/blog/`
- Schema: Post (title, date, category, image, description, timeToRead)
- URL pattern: `/blog/[slug]`
- Categories supported with filtering at `/blog/categories/[categorySlug]`
- Helper functions: `getAllCategories()` returns categories sorted by frequency

### Case Studies
- Location: `src/content/work/`
- Schema: CaseStudy (title, subtitle, date, tags, thumbnail, coverImage, images, projectURL, description, projectDuration, client, testimonial)
- URL pattern: `/work/[slug]`
- Tags supported with filtering at `/work/categories/[tagSlug]`
- Helper functions: `getAllTags()` for all tags sorted by frequency, `getFeaturedTags()` for top 4 tags

## File Structure Key Points

- **App Router**: Uses `src/app/` directory with layout.jsx files
- **Components**: Organized in `src/components/` with subdirectories for blog, work, and mdx components
- **Content Processing**: `src/lib/articles.js` and `src/lib/caseStudies.js` handle content aggregation and sorting
- **Styling**: Custom Tailwind config with three font families (Inter, Lexend, Gochi Hand)

## Content Generation

- Contentlayer automatically generates TypeScript types and processes MDX
- RSS feeds are generated via `rss.js` script using the Feed library (outputs rss.xml, rss.json, and atom.xml to `public/`)
- All content includes computed fields for URL and slug generation
- MDX processing uses `remark-gfm` for GitHub Flavored Markdown and `rehype-prism` for syntax highlighting

## Build Process

The build integrates Contentlayer processing with Next.js via `next.config.js` using `withContentlayer()` wrapper. Content changes trigger automatic regeneration during development.