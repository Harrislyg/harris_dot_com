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
                      <img className="img-responsive" src="img/profile.png" alt="" />
                      <div className="intro-text">
                          <hr className="star-light"></hr>
                          <span className="skills">Web Developer - Graphic Artist - User Experience Designer</span>
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
