const express = require("express");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});