/* global $ */
var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=aac314f6b71e56d859d91e8e1a40ed8c&units=metric'

//aac314f6b71e56d859d91e8e1a40ed8c

module.exports = {
  // getTemp (location) {
  // var encodedLocation = encodeURIComponent(location)
  // var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
  //
  //   return axios.get(requestUrl).then(function (res) {
  //     if(res.data.cod && res.data.message) {
  //       throw new Error(res.data.message)
  //     }
  //     else {
  //       return res.data.main.temp
  //     }
  //   }, function (res) {
  //     throw new Error(res.data.message)
  //   })
  // }
  getTemp (location, callBack) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    $.ajax({
      url: requestUrl,
      type: 'get',
      dataType: 'json',
      success: function (data) {
        console.log(data.main.temp)
        callBack(null, data.main.temp)
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString())
        callBack(err)
      }.bind(this)
    })
  }
}
