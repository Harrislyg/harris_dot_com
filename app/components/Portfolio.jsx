var React = require('react')
var About = require('About')
var Contact = require('Contact')
var Footer = require('Footer')
var Nav = require('Nav')
var apiDotMe = require('apiDotMe')
var Modal = require('Modal')
var Modala = require('Modala')




class Portfolio extends React.Component {
  constructor () {
    super()
    this.state = {
      portfolios: []
    }
  }

  // getData () {
  //   apiDotMe.getAllData((err, data) => {
  //     console.log(data)
  //     this.setState({
  //         name: data
  //       })
  //   })
  // }

  // componentWillMount () {
  //     this.getData()
  //     console.log('WillMount')
  // }

  getProject () {
    apiDotMe.getAllProjects((err, data) => {
      console.log('callback', data)
      this.setState({
        portfolios: data.concat({})
      })
    })
  }

  componentWillMount () {
      this.getProject()
  }


  render () {
    console.log('Hey', this.state.portfolios)
    return (
      <div>
      <Nav/>
      <section id="portfolio">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                    <br/>
                    <br/>
                    <br/>
                      <h2>Portfolio</h2>
                      <hr className="star-primary"></hr>
                  </div>
              </div>
              <div className="row">
                {this.state.portfolios.map((modala, i) => (<Modala project={modala} index={i+1} key={i}/>))}
              </div>
          </div>
      </section>
      <About/>
      <Contact/>
      <Footer/>
      <Modal/>

      </div>


    )
  }
}

module.exports = Portfolio
