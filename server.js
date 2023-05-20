const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override');

const userController = require('./controllers/users')


//Middleware
// app.use(morgan("tiny")) //logging
app.use(express.urlencoded({ extended: true}));
app.use(express.json()); // help to submit the data from page to page with form
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use('', userController);

app.get('/', (req, res) => {
    res.send('default route');
});

app.get('/login', function(req, res) {
    res.render('login', { title: 'Login Page' });
});

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));