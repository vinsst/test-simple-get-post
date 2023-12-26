const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(
  cors({
    credentials: true,
    origin: "https://test-simple-get-post-server",
  })
);

// Обробка кореневого URL
app.get("/", (req, res) => {
  res.send("Hello, this is the server!");
});

// Обробка /api/message URL
app.get("/api/message", (req, res) => {
  res.json({ message: "Works properly" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
