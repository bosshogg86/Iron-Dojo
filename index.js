require('dotenv').config();
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const { connectDB } = require('./config/connection');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const passport = require('passport');
require('./services/passport');
connectDB();

const app = express();
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/dashboard/:id/:token', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  app.get('/log', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
  // app.get('/progress', (req, res) => {
  //   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  // });
  // app.get('/account', (req, res) => {
  //   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  // });
  // app.get('*', (req, res) => {
  //   console.log(`/*`);
  //   res.sendFile(path.join(__dirname, '/client/build/index.html'));
  // });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

require('./routes/googleRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server started listening on PORT http://localhost:${PORT}`);
});
