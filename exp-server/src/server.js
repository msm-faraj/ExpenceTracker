const express = require("express");
const pool = require("./db");
const port = 4000;

const app = express();

// ** middleware
app.use(cors());
app.use(express.json());

// ** ROUTES ** //

//create an expense

//get all expences

//update an expense

//delete an expense

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
