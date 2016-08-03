
module.exports = {

  getAllData (callBack) {
    $.get('https://arcane-spire-32719.herokuapp.com/')
      .done(function (data) {
        console.log('api', data)
        callBack(null, data.name)
      }).fail(function (jqXHR, textStatus, errorThrown) {

        console.log('error', errorThrown)
      })
  },
  getAllProjects (callBack) {
    $.get('https://arcane-spire-32719.herokuapp.com/projects')
      .done(function (data) {
        callBack(null, data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  }
}
