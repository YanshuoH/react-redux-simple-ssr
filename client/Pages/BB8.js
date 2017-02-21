import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementBB8 } from '../actions'

const mapStateToProps = state => ({
  count: state.BB8.count,
})
class BB8 extends React.Component {
  static propTypes = {
    count: PropTypes.number,
    dispatch: PropTypes.func,
  }

  increment = () => {
    this.props.dispatch(incrementBB8())
  }

  render() {
    return (
      <div>
        <div>{`Count: ${this.props.count}`}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BB8)