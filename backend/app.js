const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());


// Database connection configuration using a **connection pool**
const db = mysql.createPool({
  host: process.env.DB_HOST || 'db',            // fallback to 'db'
  user: process.env.DB_USER || 'root',           // fallback to 'root'
  password: process.env.DB_PASSWORD || 'rootpassword',  // fallback to 'rootpassword'
  database: process.env.DB_NAME || 'myapp',      // fallback to 'myapp'
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint to get users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users: ' + err.stack);
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

