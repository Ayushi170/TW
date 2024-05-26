const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2'); // Use mysql2

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'complaint',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// POST route to register a complaint
app.post('/complaints', (req, res) => {
  const { title, description } = req.body;

  const sql = 'INSERT INTO complaints (username, complaint) VALUES (?, ?)';
  db.query(sql, [title, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Complaint registered successfully');
    }
  });
});

// GET route to fetch all complaints
app.get('/complaints', (req, res) => {
  const sql = 'SELECT * FROM complaints';

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
