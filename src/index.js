import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

import Home from './containers/Home/index';
const app = express();
const content = renderToString(<Home />)
// const Home = require('./containers/Home');
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
});
const server = app.listen(3000);