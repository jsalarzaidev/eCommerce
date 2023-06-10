const express = require("express");
const app = express();

require("dotenv/config");

const api = process.env.API_URL;

// Middleware
app.use(express.json());

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    image: "some_url",
  };
  res.send(product); //not have to use often
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct); //not have to use often
});

const port = 3000;

app.listen(3000, () => {
  console.log(`server is running at http://localhost:${port}`);
});
