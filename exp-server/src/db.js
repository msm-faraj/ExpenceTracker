const { Pool } = require("pg");
const pool = new Pool({
  host: "db",
  port: 5432,
  user: "msm-faraj",
  password: "mypass",
  database: "exp-databse",
});

module.exports = pool;
