import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import BB8 from './Pages/BB8'
import R2D2 from './Pages/R2D2'

export default (props) => {
  return (
  <Router history={props.history}>
    <Route component={Layout}>
      <Route path="/" component={Home} />
      <Route path="/bb8" component={BB8} />
      <Route path="/r2d2" component={R2D2} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
)};
