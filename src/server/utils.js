import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Routes from '../Routes';

export const render = (req) => {
  const reducer = (state = {name: 'zzy'}, action) => {
    return state;
  }
  const store = createStore(reducer, applyMiddleware(thunk));
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>

  ));
  return `
    <html>
      <head>
        <title></title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
}
