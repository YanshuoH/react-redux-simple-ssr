import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <div>
    <h1>HHHHHHHHHHH</h1>
    {props.children}
    <div>
      <Link to="/">Go Back</Link>
    </div>
  </div>
)