import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

// error 404 handler
app.use((req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
