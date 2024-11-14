# station-assets

🛰️ Assets for Station

## Quick Start

To build and run the assets server locally:

```bash
docker compose up --build -d
```

The assets server will be available at `http://localhost:3001`.

To verify the service is running correctly, try fetching the chains configuration:

```bash
curl http://localhost:3001/chains.json
```
