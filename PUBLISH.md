# Publish `demo-api` to GitHub

Use this when creating the **application repo** Styx will connect to (Step 1). Keep it separate from the Styx monorepo.

## 1. Create the repo on GitHub

1. Open [github.com/new](https://github.com/new).
2. **Repository name:** `demo-api` (or any name — Styx will use the URL).
3. **Public** or Private — your choice.
4. **Do not** add README, .gitignore, or license (this folder already has them).
5. Click **Create repository**.

## 2. Copy this folder outside the Styx monorepo

Nested git repos inside `styx` are awkward. Copy once:

```bash
cp -R /Users/namithapillai/Documents/projects/styx/examples/demo-api \
      /Users/namithapillai/Documents/projects/demo-api
cd /Users/namithapillai/Documents/projects/demo-api
```

## 3. Initialize git and push

Replace `YOUR_GITHUB_USERNAME` with yours (e.g. `namta25`):

```bash
git init
git add .
git commit -m "Initial demo-api service (Dockerfile only, no K8s manifests)"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/demo-api.git
git push -u origin main
```

If GitHub prompts for auth, use a **Personal Access Token** or `gh auth login`.

### Using GitHub CLI

```bash
gh repo create demo-api --public --source=. --remote=origin --push
```

(run from `/Users/namithapillai/Documents/projects/demo-api` after `git init` + first commit, or let `gh repo create` init for you)

## 4. Verify on GitHub

You should see:

- `Dockerfile`
- `server.js`
- `package.json`
- `README.md`
- **No** `deployment.yaml`, Helm, or Kustomize.

## 5. Connect in Styx (when OAuth ships)

Repo URL will be:

`https://github.com/YOUR_GITHUB_USERNAME/demo-api`

Until GitHub OAuth is wired, Styx can still **inspect the same code** via:

- Local path: `examples/demo-api` in the Styx monorepo, or
- Clone: `git clone ...` and `POST /api/v1/dev/inspect-demo` with that path.
