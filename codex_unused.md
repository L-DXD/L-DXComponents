# Unused file candidates (static scan)

## Scope
- Static reference scan of `src`, `stories`, `.storybook`, and top-level `*.md/*.html/*.js/*.json/*.css`.
- Detected references include `import`/`require`, `url(...)`, `src/href`, and quoted `/src/...` or `/assets/...` paths.
- Implicit entrypoints treated as used: `src/index.html`, `stories/**/*.stories.js`, and `src/**/*.mdx` (Storybook docs).
- This is best-effort; dynamic imports or runtime-only usage can cause false positives.

## Candidates

### top-level docs/notes
- `CSS_OPTIMIZATION_REPORT.md`
- `Readme.md`
- `UNUSED_CSS_ANALYSIS.md`
- `codex_unused.md`
- `gemini_unused.md`

### assets
- `assets/accessibility.png`
- `assets/accessibility.svg`
- `assets/addon-library.png`
- `assets/avif-test-image.avif`
- `assets/css/Flatpickr.css`
- `assets/css/flatpickr.min.css`
- `assets/discord.svg`
- `assets/docs.png`
- `assets/figma-plugin.png`
- `assets/github.svg`
- `assets/js/google-code-prettify/prettify.css`
- `assets/js/google-code-prettify/prettify.js`
- `assets/share.png`
- `assets/testing.png`
- `assets/theming.png`
- `assets/tutorials.svg`
- `assets/youtube.svg`

### src styles
- `src/styles/SharedStyles.js`
- `src/styles/TextStyles.js`

### src misc
- `src/test.html`

### src utils
- `src/utils/CSSScoper.js`
- `src/utils/ExternalStyleLoader.js`
- `src/utils/IsolationManager.js`
