# Accounts Spec Demo — GitHub baseline (v1.0.0)

**This folder is the starting state for your customer demo.**  
Push this to **https://github.com/Ni-Tu/SE-GitDemo** before each demo, then `git clone` it live.

**Path:** `/Users/nituroy/Documents/DEMO/accounts-spec-demo-starter`

---

## Two folders — don't mix them up

| Folder | Purpose |
|--------|---------|
| **`accounts-spec-demo-starter`** | What GitHub has **before** the demo (clone this) |
| **`accounts-spec-demo`** | Your **after-demo** working copy with all changes applied |

**Presenter guides** (do not push to customer-facing repo):

| File | Purpose |
|------|---------|
| `../accounts-spec-demo-presenter/DEMO-CHANGES.md` | Every file you change + exact diffs |
| `../accounts-spec-demo-presenter/POSTMAN-AI-PROMPTS.md` | Copy/paste prompts for Postman Agent |

---

## Reset GitHub before a demo

```bash
cd /Users/nituroy/Documents/DEMO/accounts-spec-demo-starter
git init
git add .
git commit -m "Demo baseline: Accounts API v1.0.0"
git branch -M main
git remote add origin https://github.com/Ni-Tu/SE-GitDemo.git
git push -u origin main --force
```

Then on stage: `git clone https://github.com/Ni-Tu/SE-GitDemo.git`

---

## What's in the baseline (v1.0.0)

- Accounts API: list, get, create — **no `tier` field**
- OpenAPI spec v1.0.0
- Postman collection: 3 requests (no tier tests)
- Postman-themed dashboard (no Tier column)
- No `postman/mocks/`, no `postman/specs/`, no PATCH endpoint

---

## Quick start (after clone)

```bash
./start-api.command
# Browser → http://localhost:3000
# Postman → Files → Open Folder → Connect → Local View
```

Full customer script: **[DEMO-GUIDE.md](./DEMO-GUIDE.md)**
# Se-GitDemo-PMG-v2
