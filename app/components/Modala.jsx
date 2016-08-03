var React = require('react')
var Modal = require('Modal')

class Modala extends React.Component {

  render () {
    console.log('object:', this.props.project)
    console.log('index:', this.props.index)
    return (

      <div className="col-sm-4 portfolio-item">
          <a href={"#portfolioModal" + this.props.index} className="portfolio-link" data-toggle="modal">
              <div className="caption">
                  <div className="caption-content">
                      <i className="fa fa-search-plus fa-3x"></i>
                  </div>
              </div>
              <img src={"img/portfolio/" + this.props.index + ".png"} className="img-responsive" alt="" />
          </a>
      </div>
    )
  }
}

module.exports = Modala
