var React = require('react')
class Skillz extends React.Component {
  render () {
    return (
      <i id="bigIcon" className={this.props.skill.name}></i>
    )
  }
}

module.exports = Skillz
