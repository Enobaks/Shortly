const express = require("express");
const connectDB = require("./db.js");
const app = express();
app.use(express.json({ extended: true }));

// Connect to Database
connectDB();

// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
