import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { incrementR2D2 } from '../actions'

const mapStateToProps = state => ({
  count: state.R2D2.count,
})
class R2D2 extends React.Component {
  static propTypes = {
    count: PropTypes.number,
    dispatch: PropTypes.func,
  }
  
  increment = () => {
    this.props.dispatch(incrementR2D2())
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

export default connect(mapStateToProps)(R2D2)