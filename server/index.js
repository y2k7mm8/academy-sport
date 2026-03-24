const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_PATH = path.join(__dirname, "data", "athletes.json");

app.use(cors());
app.use(express.json());

// Simple root page when no built client exists
app.get("/", (req, res, next) => {
  // If client dist exists, let static middleware handle it
  const CLIENT_DIST = path.join(__dirname, "..", "dist");
  if (fs.existsSync(CLIENT_DIST)) return next();
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`
    <html>
      <head><meta charset="utf-8"><title>API Server</title></head>
      <body style="font-family:Arial,Helvetica,sans-serif;padding:24px;">
        <h1>API server running</h1>
        <p>This server exposes the following endpoints:</p>
        <ul>
          <li><a href="/api/athletes">/api/athletes</a> — GET list</li>
          <li>/api/athletes/:id — GET single, PUT, DELETE</li>
          <li>/api/athletes (POST) — create</li>
        </ul>
        <p>To view the frontend run the Vite dev server (<code>npm run dev</code>) in project root or build the app and restart this server to serve the static files.</p>
      </body>
    </html>
  `);
});

// If a built frontend exists in ../dist, serve it as static files (SPA fallback)
const CLIENT_DIST = path.join(__dirname, "..", "dist");
if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.get("/", (req, res) =>
    res.sendFile(path.join(CLIENT_DIST, "index.html")),
  );
  // SPA fallback for client-side routing
  app.get("/*", (req, res, next) => {
    const accept = req.headers.accept || "";
    if (accept.indexOf("html") !== -1) {
      return res.sendFile(path.join(CLIENT_DIST, "index.html"));
    }
    return next();
  });
}

function readData() {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read data:", e);
    return [];
  }
}

function writeData(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Failed to write data:", e);
    return false;
  }
}

function generateId(list) {
  return list.reduce((max, i) => Math.max(max, i.id || 0), 0) + 1;
}

app.get("/api/athletes", (req, res) => {
  const list = readData();
  res.json(list);
});

app.get("/api/athletes/:id", (req, res) => {
  const id = Number(req.params.id);
  const list = readData();
  const item = list.find((i) => i.id === id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

app.post("/api/athletes", (req, res) => {
  const payload = req.body;
  const list = readData();
  const newItem = { ...payload, id: generateId(list) };
  list.push(newItem);
  writeData(list);
  res.status(201).json(newItem);
});

app.put("/api/athletes/:id", (req, res) => {
  const id = Number(req.params.id);
  const patch = req.body;
  const list = readData();
  const idx = list.findIndex((i) => i.id === id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const updated = { ...list[idx], ...patch };
  list[idx] = updated;
  writeData(list);
  res.json(updated);
});

app.delete("/api/athletes/:id", (req, res) => {
  const id = Number(req.params.id);
  const list = readData();
  const next = list.filter((i) => i.id !== id);
  if (next.length === list.length)
    return res.status(404).json({ error: "Not found" });
  writeData(next);
  res.json({ ok: true });
});

app.post("/api/athletes/reset", (req, res) => {
  const seedPath = path.join(__dirname, "data", "athletes.seed.json");
  try {
    const seed = fs.readFileSync(seedPath, "utf-8");
    fs.writeFileSync(DATA_PATH, seed, "utf-8");
    res.json({ ok: true });
  } catch (e) {
    console.error("Failed to reset data:", e);
    res.status(500).json({ error: "reset failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
