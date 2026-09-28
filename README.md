# invoice-svc

Acme's invoice service — the application used throughout the DevSecOps course labs
(Session 4: *Nothing Ships by Hand*).

```bash
npm ci          # install dependencies
npm test        # run the unit tests
npm run build   # bundle src/ -> dist/app.js
npm start       # run dist/app.js  (GET /version, /health, /invoices/export)
```

## What the labs touch
- `src/` — the app. `src/config.js` holds the port (Lab 8 changes it on purpose).
- `test/` — `npm test` (Lab 2 breaks and fixes a test).
- `package.json` — pins **md-to-pdf 5.2.4**, which Trivy flags as **CVE-2025-65108**
  (Labs 3–5 add the gate and ship the fix, md-to-pdf 5.2.5).
- `RELEASE.md` — the hand-build runbook the CD labs replace.

> Heads-up: this repo's `main` ships on the **vulnerable** md-to-pdf 5.2.4 — that is
> the INC-0471 starting state, on purpose. Do not deploy it anywhere real.
