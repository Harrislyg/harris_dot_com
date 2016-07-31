var React = require('react')

class WeatherMessage extends React.Component {
  render () {
    var {temp, location} = this.props
    return (
      <div>
        <h3>It's {temp} here in {location}</h3>
      </div>
    )
  }
}

module.exports = WeatherMessage
