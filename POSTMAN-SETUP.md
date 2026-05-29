# Postman desktop — first-time setup

1. **Postman desktop** v12+ (not web)
2. **Use your own team workspace** — do not link this folder to **Sam's git example**
   (that workspace is already used by `SamGitDemo` on your machine)
3. **Files → Open Folder → `accounts-spec-demo`**
4. **Connect → Local View** → choose **your** workspace when prompted
5. API running: `./start-api.command`

Collection: **Accounts API** (list, get, create, update, delete)

## "Already linked to a different workspace"

This is **not a Git problem**. Postman stores the link in `.postman/resources.yaml`.

- If Postman asks to switch to **Sam's git example**, choose **No** — pick your own workspace instead.
- If another folder (e.g. `SamGitDemo`) is already linked to Sam's workspace, disconnect it first:
  **Files → select that folder → Disconnect** (or close Local View for that folder).
- Then open `accounts-spec-demo` again and connect to your workspace.

After spec PR: use **Agent Mode** or spec→collection sync to update `postman/` files.
