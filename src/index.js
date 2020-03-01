import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

import Home from './containers/Home/index';
const app = express();
app.use(express.static('public'));
const content = renderToString(<Home />)
// const Home = require('./containers/Home');
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body>
        <div id="root">
        ${content}
        </div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});
const server = app.listen(3000);