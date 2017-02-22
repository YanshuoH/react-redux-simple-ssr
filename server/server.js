import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import Root from '../client/Root'
import routes from '../client/routes'
import configureStore from '../client/store'

// @TODO: delete this shit
Error.stackTraceLimit = Infinity;

// create app
const app = express();

// configure webpack for dev
const compiler = webpack(webpackConfig)
const webpackMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: path.join(__dirname, '../client'),
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

// use webpack as middleware
app.use(webpackMiddleware)
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  // configure history
  let history = createMemoryHistory(req.url)
  const routing = routes({ history })

  match({ routes: routing, location: req.url }, (err, redirectLocation, renderProps) => {
    const initialState = {
      BB8: { count: Math.random() },
      R2D2: { count: Math.random() },
    }

    const store = configureStore(initialState, history)
    history = syncHistoryWithStore(history, store);

    const body = renderToString(<Root store={store} routes={routes({ history })} />)

    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, 'utf-8', (err, result) => {
      if (err) {
        res.send(500, err)
        res.end()
        return
      }

      const html = result
        .replace('{{ body }}', body)
        .replace(
          'window.__INITIAL_STATE__ = {};',
          `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};`
        )
      res.send(html)
      res.end()
    })
  })
})

app.listen(48111, () => { console.log('Listening on %d', 48111) })
