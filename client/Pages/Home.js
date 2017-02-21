import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  R2D2Count: state.R2D2.count,
  BB8Count: state.BB8.count,
})
class Home extends React.PureComponent {
  static propTypes = {
    R2D2Count: PropTypes.number,
    BB8Count: PropTypes.number,
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/r2d2">{`R2D2: Count - ${this.props.R2D2Count}`}</Link>
          </li>
          <li>
            <Link to="/bb8">{`BB8: Count - ${this.props.BB8Count}`}</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)