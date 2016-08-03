var React = require('react')
class Skillz extends React.Component {
  render () {
    return (
      <strong>{this.props.skill.name} | </strong>
    )
  }
}

module.exports = Skillz
