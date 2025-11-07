# RollPullers Site Blueprint

This repository is a content-and-structure blueprint for rebuilding the RollPullers.com marketing site (deployment target: Netlify). It captures where each piece of product/service information from the legacy gacco.com site should live so that Codex/Claude can generate final HTML, CSS, or React components without re-scraping.

## Folder map
```
rollpullers/
├── index.html               # Home overview + innovation highlights
├── grizzly.html             # Grizzly 600T & Grizzly Cub details
├── rollpuller.html          # Roll Puller™ models and usage guidance
├── accessories.html         # Brush systems, roller tension upgrades, spare parts
├── custom-equipment.html    # Bespoke fabrication services
├── consulting.html          # Consulting / training / design services
├── contact.html             # Placeholder contact info + optional form
├── assets/
│   ├── css/styles.css       # Theme + layout styles (placeholder notes today)
│   ├── js/main.js           # Optional interactivity hooks (placeholder)
│   └── images/              # Drop product/brand artwork here later
└── README.md                # (this file)
```

## Content placement notes
Each HTML file currently contains detailed TODO comments describing the sections, headings, and copy points to include. These notes were distilled from the following gacco.com resources:
- “Unmatched Patented Features” page
- Product PDFs such as `new-improvements-2019-2024.pdf` and `roller-tension-system.pdf`
- Roll Puller marketing sheet
- Brush/accessory descriptions
- Custom equipment & consulting PDFs

### Usage instructions
1. Open the desired HTML file and replace the comment block with actual markup and copy.
2. Keep all contact references as placeholders: `[Company Name]`, `[Contact Email]`, `[Phone]`, `[Address]`.
3. Do **not** mention owner names or personal stories. Focus on products, patents, specs, and services.
4. When coding, link shared assets (CSS/JS) from the `assets` directory. Images can be added under `assets/images/` as they become available.
5. Deploy via Netlify once pages are implemented; no backend dependencies are required.

This framework can also be transplanted into a React/Vite project (map each HTML page to a route/component). The same section outlines apply.
