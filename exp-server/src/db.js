const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  port: 5000,
  user: "msm-faraj",
  password: "mypass",
  database: "exp-db",
});

module.exports = pool;
