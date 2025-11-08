import express from "express";
const app = express();

// Main route handler
app.get("/", (req, res) => {
  res.status(200).send("Hello, GitHub Actions!");
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app;
