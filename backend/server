const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pay", (req, res) => {
  const { amount, method } = req.body;

  if (method === "card") {
    return res.json({ status: "success", message: "Card payment processed securely" });
  }

  res.json({ status: "success", message: "Cash payment selected" });
});

app.listen(3000, () => console.log("Handyza backend running on port 3000"));
