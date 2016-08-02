var React = require('react')
var {Link, IndexLink} = require('react-router')

class Nav2 extends React.Component {
  render () {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
              <div className="navbar-header page-scroll">

                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="#">HARRIS.L.YG</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">

                      <li className="page-scroll">

                          <a href="#portfolio">Portfolio</a>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

module.exports = Nav2
