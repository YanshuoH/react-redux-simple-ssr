import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={this.props.store}>
        {this.props.routes}
      </Provider>
    )
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

export default Root

