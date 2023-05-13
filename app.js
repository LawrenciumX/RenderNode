const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define the route for "/"
app.get('/', function(req, res) {
    const data = {
        title: 'Hello World',
        message: 'Welcome to my website designed by Lawrencium_X!'
    };
    res.render('index', data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
