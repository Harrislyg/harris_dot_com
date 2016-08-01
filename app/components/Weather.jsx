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
    this.setState({
      isLoading: true,
      location: undefined,
      temp: undefined
    })
    openWeatherMap.getTemp(location, (err, data) => {
        this.setState({
          location: location,
          temp: data,
          isLoading: false
        })

    })
  }

  componentDidMount () {
    var location = this.props.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps (newProps) {
    var location = newProps.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  render () {
    var {isLoading, temp, location} = this.state

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      }
      else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}

module.exports = Weather
