# PR demo: add `tier` field (v1.1.0)

Use these when rehearsing the **spec-first PR** story.

## 1. Create branch

```bash
git checkout -b feature/add-account-tier
```

## 2. Update `openapi.yaml`

In `components.schemas.Account` and `AccountInput`, add:

```yaml
        tier:
          type: string
          enum: [standard, premium, enterprise]
          example: premium
```

Bump `info.version` to `1.1.0`.

## 3. Update `server.js` (optional but nice)

Add `tier: 'standard'` to seed accounts and accept `tier` in POST body.

## 4. Push + open PR

```bash
git add openapi.yaml server.js
git commit -m "feat: add account tier to API spec (v1.1.0)"
git push -u origin feature/add-account-tier
```

## 5. Reviewer comment (GitHub)

> Please update the Postman collection to reflect the new `tier` field in the spec.

## 6. Postman desktop (Local View, same branch)

1. Open spec → generate/sync collection **or** Agent Mode: update collection from spec  
2. Commit updated `postman/` files to the **same PR**  
3. CI runs `postman collection run` on the PR  

See full script: [../DEMO-GUIDE.md](../DEMO-GUIDE.md)
