var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

class Weather extends React.Component {

  constructor () {
    super()
    this.state = {
      isLoading: false
    }
  }

  handleSearch (location) {

    // this.setState({isLoading: true})
    //
    // openWeatherMap.getTemp(location).then((temp) => {
    //   this.setState({
    //     location: location,
    //     temp: temp,
    //     isLoading: false
    //   })
    // }, (errorMessage) => {
    //   this.setState({isLoading: false})
    //   alert(errorMessage)
    // })
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location, (err, data) => {
      this.setState({
        location: location,
        temp: data,
        isLoading: false
      })
    })
  }

  render () {
    var {isLoading, temp, location} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}

module.exports = Weather
