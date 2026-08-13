# EduPulse — Render (Static Site)

## Correct settings

| Field | Value |
|---|---|
| **Type** | Static Site (not Web Service) |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist/edupulse/browser` |

> If Publish Directory is `dist` or `dist/edupulse`, Render returns **Not Found** because `index.html` is inside `browser/`.

## SPA rewrite

**Redirects/Rewrites** → Add Rule:

- Source: `/*`
- Destination: `/index.html`
- Action: **Rewrite**

Or use the included `render.yaml` Blueprint.
