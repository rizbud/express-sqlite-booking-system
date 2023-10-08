import express from "express";
import "dotenv/config";

import routes from "./routes";

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use("/", routes);

// error 404 handler
app.use((req, res) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
