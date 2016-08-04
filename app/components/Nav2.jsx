var React = require('react')
var {Link, IndexLink} = require('react-router')

class Nav2 extends React.Component {

  render () {
    const containerStyle = {
      display: "none"
    }
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
              <div className="navbar-header page-scroll">

                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="#">H</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">

                      <li>
                        <Link to="/portfolio">Portfolio</Link>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

module.exports = Nav2
