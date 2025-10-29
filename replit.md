# MyArticles - Bilingual Article Website

## Overview
A clean, static HTML/CSS/JavaScript website featuring bilingual content (English and Indonesian). Built as a grade 8 web development project, this site showcases article templates with accessible navigation and beautiful typography.

## Project Structure
```
website-folder/
├── index/          # Home page
├── about-me/       # About page
├── article/        # Sample article page
├── css/           # Stylesheets
└── js/            # JavaScript functionality
```

## Features
- **Bilingual Support**: Toggle between English and Indonesian
- **Responsive Design**: Mobile-friendly navigation
- **Accessible**: ARIA labels and semantic HTML
- **Clean Typography**: Inter font with readable layout
- **Language Persistence**: Remembers user's language preference

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Server**: Python 3.11 simple HTTP server
- **No build process required**

## Development
The site runs on a Python HTTP server serving static files from the `website-folder` directory on port 5000.

## Recent Changes
- **2025-10-29**: Initial Replit setup with Python HTTP server
- Added cache-control headers to prevent iframe caching issues
- Configured workflow to serve on port 5000

## Architecture Notes
- Static site with no backend dependencies
- Client-side language switching using localStorage
- No database required
- All assets served statically
