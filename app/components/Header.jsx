var React = require('react')
var apiDotMe = require('apiDotMe')
var Nav2 = require('Nav2')


class Header extends React.Component {

  render () {
    return (
    <div>
      <Nav2/>
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                    <div id="profileName"></div>
                      <div className="intro-text">
                          <div id="githubIcon"><a href="https://github.com/Harrislyg" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a></div>
                          <span className="skills">Web Developer - UX Designer</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>
    )
  }
}
var name = '<span className="name">HARRIS LEOW</span>'

module.exports = Header
