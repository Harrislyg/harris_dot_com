var React = require('react')
var Nav = require('Nav')
var Header = require('Header')
var Portfolio = require('Portfolio')
var About = require('About')
var Contact = require('Contact')
var Footer = require('Footer')
var Modal = require('Modal')

class Main extends React.Component {
  render () {
    return (
      <div>
        <div >
          {this.props.children}
            <div>
              <Modal/>
            </div>
        </div>
      </div>
    )
  }
}

module.exports = Main
