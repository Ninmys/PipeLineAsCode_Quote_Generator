const express = require("express");
const app = express();

const quotes = [
  "🚀 Keeps pushing forward!",
  "🔥 Code, test, deploy, repeat.",
  "🌟 Every bug is an opportunity to learn.",
  "💡 Simplicity is the soul of efficiency."
];

app.get("/", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(`💬 Quote of the moment: "${randomQuote}"`);
});

app.listen(3000, () => {
  console.log("Quote Generator running on port 3000");
});
