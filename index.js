const express = require('express');
const router = require('./routers/productRouter');


const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use('/api/products', router);

// Unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
