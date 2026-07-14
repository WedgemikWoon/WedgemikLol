const express = require("express");

const app = express();

app.post("/collect-ip", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  console.log("Consent received. IP:", ip);

  res.json({
    success: true
  });
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
