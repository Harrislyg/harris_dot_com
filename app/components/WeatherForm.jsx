var React = require('react')

class WeatherForm extends React.Component {
  onFormSubmit (e) {
    e.preventDefault()
    var location = this.refs.location.value
    if(location.length > 0) {
      //clear the input box
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  }
  render () {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" ref="location"/>
        <button>Get Weather</button>
      </form>
    )
  }
}

module.exports = WeatherForm
