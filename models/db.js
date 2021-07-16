const pgp = require('pg-promise')({
  // Initialization Options
});
const conn = process.env.DB_CONNECTION;
const db = pgp(conn);

module.exports = db;