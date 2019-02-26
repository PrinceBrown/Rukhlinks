const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routes
const adminRoute = require('./routes/admin');
const storeRoute = require('./routes/store');



//Path
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/login_register')));
app.use(express.static(path.join(__dirname, 'public/storeAssets')));

//Body Parser Set up
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//View Engine Set up
app.set('view engine', 'ejs');
app.set('views', 'views');

//Connects DB to localhost
const dbName = 'rukhlinks';
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true
}, (err, connection) => {
    if (err) throw err;

    //db is database connection
    const db = mongoose.connection;

    //Testing db connections
    db.on('error', (err) => {
        console.log(err);
    });
    db.once('open', () => {
            console.log(`Database is connected to ${dbName}`)
        })
        //Routes
    app.use('/admin', adminRoute);
    app.use(storeRoute);

    app.use((req, res, next) => {
        console.log('404');
        res.send('Page not found');
    });

    console.log('Database Connected...');
});


//Listening Server
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})