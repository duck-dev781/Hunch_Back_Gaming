const path = require("node:path");
const express = require("express");
const helmet = require("helmet");

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3000", 10);
const HOST = "0.0.0.0";

// A file must be strictly smaller than this ceiling to satisfy the project rule.
// This is a binary 2 GiB ceiling (2,147,483,648 bytes), so the largest allowed
// size is 2,147,483,647 bytes. This endpoint only publishes policy; it does not
// accept uploads until authentication, age permissions, and private storage exist.
const MAX_FILE_BYTES_EXCLUSIVE = 2 * 1024 * 1024 * 1024;

app.disable("x-powered-by");
app.use(helmet({
  // The prototype currently loads its fonts from Google Fonts.
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      upgradeInsecureRequests: []
    }
  }
}));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "Hunch_Back_Gaming",
    status: "prototype",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/upload-policy", (_req, res) => {
  res.status(200).json({
    uploadsEnabled: false,
    maxFileBytesExclusive: MAX_FILE_BYTES_EXCLUSIVE,
    maxFileBytesAllowed: MAX_FILE_BYTES_EXCLUSIVE - 1,
    maxFileSizeLabel: "strictly less than 2 GiB (2,147,483,648 bytes)",
    under13UploadsAllowed: false,
    note: "Uploads remain disabled until authentication, age-based authorization, private storage, and file validation are implemented."
  });
});

app.use(express.static(__dirname, {
  index: "index.html",
  dotfiles: "deny",
  etag: true,
  maxAge: process.env.NODE_ENV === "production" ? "1 hour" : 0,
  setHeaders(res, filePath) {
    if (path.basename(filePath) === "index.html") {
      res.setHeader("Cache-Control", "no-cache");
    }
  }
}));

app.use("/api", (_req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.use((err, _req, res, _next) => {
  // Do not send internal error details to visitors.
  console.error("Unhandled request error:", err);
  if (res.headersSent) return;
  res.status(500).json({ error: "An unexpected server error occurred." });
});

app.listen(PORT, HOST, () => {
  console.log(`Hunch_Back_Gaming prototype listening on ${HOST}:${PORT}`);
});
