const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const cors = require("cors"); // import cors package
const PORT = process.env.PORT || 4040;
const app = express();
app.use(cors()); // enable CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
