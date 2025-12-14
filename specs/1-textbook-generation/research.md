# Research: Textbook Generation

**Feature**: 1-textbook-generation
**Date**: 2025-12-08
**Status**: Complete

## Research Summary

This research document addresses all technical context questions and implementation decisions for the AI-native textbook on Physical AI & Humanoid Robotics.

## Technology Stack Decisions

### Language/Version
**Decision**: JavaScript/Node.js LTS with Markdown for content
**Rationale**: Docusaurus is built on Node.js and uses Markdown for content. This is the standard and most compatible approach.
**Alternatives considered**: Static site generators in other languages (Hugo, Jekyll) - rejected as Docusaurus was specified in requirements.

### Primary Dependencies
**Decision**: Docusaurus (latest stable), Node.js LTS, npm
**Rationale**: Required by specification, supports auto-sidebar generation, and has excellent documentation features
**Alternatives considered**: Hugo, Jekyll, GitBook - rejected as Docusaurus was explicitly specified

### Storage
**Decision**: Static files only, no database
**Rationale**: Specification requires no backend or runtime dependencies, GitHub Pages only supports static hosting
**Alternatives considered**: Database-backed CMS - rejected as it violates the no-backend constraint

### Testing
**Decision**: Docusaurus build validation, manual content review, link checking
**Rationale**: Static site doesn't require traditional unit tests; validation is through build process and manual review
**Alternatives considered**: Automated content validation - deferred to manual review process

### Target Platform
**Decision**: GitHub Pages (static hosting)
**Rationale**: Explicitly specified in requirements as free-tier compatible hosting
**Alternatives considered**: Vercel, Netlify - rejected as GitHub Pages was specified

### Performance Goals
**Decision**: Page load under 2 seconds on slow network, page size under 2MB
**Rationale**: Specified in requirements as quality standard for global accessibility
**Alternatives considered**: Different performance targets - rejected as requirements are explicit

### Constraints
**Decision**: No backend services, no runtime AI dependencies, free-tier compatible, mobile responsive
**Rationale**: Core requirements from specification document
**Alternatives considered**: Backend services for personalization - rejected as explicitly forbidden

### Scale/Scope
**Decision**: 6 chapters, 800-1500 words each, lightweight assets only
**Rationale**: Explicitly specified in requirements
**Alternatives considered**: Different chapter counts/sizes - rejected as requirements are specific

## Content Strategy

### Writing Approach
**Decision**: Concurrent research-and-write approach using Spec-Kit Plus and Claude Code
**Rationale**: Specification allows for research-concurrent writing, which is efficient and allows for iterative improvements
**Alternatives considered**: Full research phase first - rejected as concurrent approach was specified

### Citation Style
**Decision**: APA in-text citations with reference lists per chapter
**Rationale**: Specified in requirements for academic rigor
**Alternatives considered**: Other citation styles - rejected as APA was specified

### Diagram Strategy
**Decision**: Lightweight SVG diagrams (0-2 per chapter) when needed
**Rationale**: Specification allows for optional diagrams, SVG is lightweight and scalable
**Alternatives considered**: Complex interactive diagrams - rejected as they would violate lightweight constraint

### Language Options
**Decision**: English as primary language, optional Urdu translation
**Rationale**: English is standard for technical content; Urdu translation was specified as optional
**Alternatives considered**: Other languages - not specified in requirements

## Gemini API Usage (Optional)

### Allowed Usage
- Grammar correction: "Fix grammar and clarity, do not change meaning"
- Summarization: "Summarize this into 3 bullet points"
- Urdu translation: "Translate to Urdu, formal academic style"
- Diagram explanation prompts
- Code explanation prompts

### Prohibited Usage
- Embeddings
- Chatbot functionality
- Vector storage
- Retrieval systems
- Memory features
- External tools

## Deployment Strategy

### GitHub Pages Configuration
**Decision**: Use gh-pages branch with automated deployment
**Rationale**: Standard approach for Docusaurus sites on GitHub Pages
**Implementation**: GitHub Actions workflow to build and deploy on push to main branch

### Auto-sidebar Generation
**Decision**: Configure Docusaurus to auto-generate sidebar from docs/ directory structure
**Rationale**: Matches specification requirement and reduces maintenance overhead
**Implementation**: Configure sidebar.js to scan docs/ directory and generate navigation

## Quality Assurance

### Content Validation
- Each chapter must have learning objectives (3-5 bullet points)
- Each chapter must include examples
- Each chapter must have APA references
- No placeholder text allowed
- All citations must be valid and properly formatted

### Technical Validation
- Site must build without errors
- All internal links must work
- Images must load correctly
- Mobile responsiveness required
- All assets must be under GitHub Pages size limits
- Proper formatting across browsers

## Implementation Phases

### Phase 0: Research (Current)
- Define chapter objectives
- Create outline for 6 chapters
- Collect academic references
- Create citation template
- Set up decision log

### Phase 1: Foundation
- Install and configure Docusaurus
- Set up GitHub repository
- Configure GitHub Pages deployment
- Create base folder structure
- Set up auto-sidebar

### Phase 2: Analysis
- Complete first 2 chapters with content
- Add examples and diagrams
- Validate citations
- Test site rendering
- Fix formatting issues

### Phase 3: Synthesis
- Complete remaining 4 chapters
- Full site review
- Final formatting and optimization
- Complete translations if enabled
- Final deployment to GitHub Pages