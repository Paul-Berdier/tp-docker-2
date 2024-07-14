const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Connection to MySQL failed:', err);
    process.exit(1);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error;
    res.send(`The solution is: ${results[0].solution}`);
  });
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});

