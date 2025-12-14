# Contract Definitions: Textbook Generation

## Overview

This project is a static documentation site built with Docusaurus. There are no runtime APIs or services, so traditional API contracts do not apply. The "contracts" here refer to the structural and content contracts that ensure consistency across the textbook.

## Content Contract

### Chapter Structure Contract

Each chapter must adhere to the following structure:

```
Required Frontmatter:
- chapter_id: string (pattern: "chapter-{n}")
- section_id: number (1-6)
- title: string (10-100 characters)
- learning_objectives: array of 3-5 strings
- difficulty_level: enum ("beginner", "intermediate", "advanced")
- example_count: number (0 or greater)
- images: boolean
- translation_ready: boolean
- apa_references: array of reference objects

Required Content Sections:
- Main title (H1)
- Learning Objectives section
- Main content (800-1500 words)
- Key Takeaways section
- References section
```

### Content Validation Contract

Each chapter must satisfy these validation rules:
- Word count between 800-1500 words
- Exactly 3-5 learning objectives
- At least one APA citation per factual claim
- All images must be lightweight (SVG preferred)
- Content must be professional and accessible

## Navigation Contract

### Sidebar Structure Contract
- Auto-generated from `/docs/` directory structure
- Chapters ordered sequentially 1-6
- Consistent naming convention for navigation items

### URL Structure Contract
- Base: `https://[username].github.io/[repository]/`
- Chapter URLs: `/docs/chapter-{n}-{slug}`
- Asset URLs: `/img/{filename}`

## Build Contract

### Docusaurus Build Contract
- Site must build without errors using `npm run build`
- All internal links must resolve correctly
- All assets must be accessible
- Site must be responsive across devices