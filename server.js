const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'J0hnny@non',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

app.use((req, res) => {
    res.status(404).end();
}); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});