import express from 'express';
import {render} from './utils';
const app = express();
app.use(express.static('public'));
app.use('/api', express.static('mock'));

// const Home = require('./containers/Home');
app.get('*', (req, res) => {
  res.send(render(req));
});
const server = app.listen(3000);