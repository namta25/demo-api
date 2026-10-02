# demo-api

Small HTTP API for demos and platform testing. **No Kubernetes YAML** — only application code and a `Dockerfile`.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Liveness/readiness JSON |
| GET | `/` | Service info + commit SHA |
| GET | `/api/version` | Same as `/` |

## Run with Docker

```bash
docker build -t demo-api .
docker run --rm -p 8080:8080 demo-api
curl http://localhost:8080/health
```

## Run with Node (optional)

```bash
node server.js
# PORT defaults to 8080
```

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | HTTP listen port |
| `STYX_COMMIT_SHA` | `local-dev` | Shown in responses (set by CI/CD) |

## Publishing to GitHub

See [PUBLISH.md](./PUBLISH.md) in this folder for first-time push steps.
