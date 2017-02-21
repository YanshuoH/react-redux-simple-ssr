import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.props.routes}
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
}

export default Root

