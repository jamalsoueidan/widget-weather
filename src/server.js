import express from 'express';
import path from 'path'
import fs from 'fs'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from "react-redux";
import { StaticRouter, matchPath } from 'react-router-dom';
import Application from './application';
import createStore, { updateCity } from "./store";
import api from './api'

const app = express();
app.use('/', express.static(path.resolve('dist')));
app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  const currentCity = req.query.city || "Copenhagen" //can be moved to config
  api(currentCity).then(city => {
    store.dispatch(updateCity(city))
    const app = ReactDOMServer.renderToString(
      <Provider store={ store }>
        <StaticRouter location={req.url} context={context}>
          <Application />
        </StaticRouter>
      </Provider>
    );
    const reduxState = store.getState( );

    const indexFile = path.resolve('./index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      if (context.status === 404) {
        res.status(404);
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            .replace('//data', `window.REDUX_DATA = ${ JSON.stringify( reduxState ) }`));
    });
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});