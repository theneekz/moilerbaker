//Server Entry File
//App - create your app with express
const express = require('express');
const app = express();

//Logging Middleware - server logs will help with debugging
const volleyball = require('volleyball');
app.use(volleyball);

//Static Middleware - so the browser can request static assets from your server
const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

//Parsing Middleware - so that requests containing a body as json can be used
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes - requests to api stuffs (in routes folder)
app.use('/api', require('./routes'));

//Send Index HTML - send index.html for any requests that don't match one of our routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(
      err.message || 'May the failwhale apologize fer our blunders, me hearties'
    );
});

//Start the Server - listen at a port on the localhost (process.env.PORT for Heroku)
const port = process.env.PORT || 9001;
app.listen(port, () => {
  console.log(`Ye Ole Server has docked at port ${port}: Welcome aboard matey`);
});
