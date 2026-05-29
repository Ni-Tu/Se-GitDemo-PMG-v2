# Customer demo script — Spec-first + Native Git

**Folder:** `accounts-spec-demo`  
**Time:** ~20 min  
**You need:** Postman desktop v12+, browser, optional GitHub PR

---

## Before the call

- [ ] Run `start-api.command`
- [ ] Open http://localhost:3000 (dashboard)
- [ ] Postman → Files → Open **this folder** → Connect → **Local View**
- [ ] Run **List accounts** once (proves API + collection)

---

## Part 1 — Set the scene (3 min)

**Show browser dashboard**

> “This is a customer accounts portal. Behind it is a REST API — no database in this demo, data is in memory.”

**Show repo in Cursor**

> “Three things live in **one Git repo**:
> - `server.js` — the service  
> - `openapi.yaml` — the **contract** (what we promise callers)  
> - `postman/collections/` — how we **test and document** the API  
>
> v12 puts Postman artifacts on the **same lifecycle as code**.”

**Show Postman Local View**

> “I connected this folder in Postman desktop. Local View edits **files on disk** — the same files Git and CI use.”

---

## Part 2 — Spec change PR (5 min)

**Create branch** `feature/add-account-tier` (or show pre-made PR)

**Edit `openapi.yaml`** — add `tier` field (see `demo/pr-add-tier/README.md`)

> “Product wants a **tier** field on accounts. We start with the **spec** — that’s the contract.”

**Push + open PR** on GitHub

> “This PR only changes the spec so far. Reviewers see the contract diff clearly.”

**Second GitHub account (or slide) — reviewer comment:**

> “Please update the Postman collection to match the new `tier` field in the spec.”

---

## Part 3 — Postman updates collection (5 min)

**Same branch in Postman Local View**

Options (rehearse what works on your build):

1. **Spec Hub** — open `openapi.yaml` → generate/sync collection from spec  
2. **Agent Mode** — ask to update collection to match spec v1.1.0  

**Show** new/changed files under `postman/collections/`

**Commit + push to same PR**

```bash
git add postman/
git commit -m "chore: sync collection with spec v1.1.0 tier field"
git push
```

> “Spec change and collection update are in **one PR**. That’s the v12 value — not two separate release trains.”

---

## Part 4 — CI (3 min)

**Show `.github/workflows/accounts-api.yml`** (or GitHub Actions tab)

> “When I **push** and open a PR, GitHub — not Postman — runs a workflow. It checks out **this commit**, starts the API, and runs **Postman CLI** on the collection **files in the repo**.”

On PR: `postman collection run`  
On merge to main: `postman workspace push` → Cloud for QA/partners

> “Local commit doesn’t run CI. **Push + PR** does.”

---

## Part 5 — Close (2 min)

> “Before: code in Git, collection in the cloud, CI tested the wrong thing.  
> Now: spec, collection, and code in Git; Postman Local View edits those files; PR + CLI tests one snapshot; Cloud updates after merge.”

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Dashboard empty | Start API |
| No Files in Postman | Desktop v12+ |
| CI fails | Add `POSTMAN_API_KEY` secret; check collection path |
