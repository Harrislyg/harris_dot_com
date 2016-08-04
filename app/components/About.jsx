var React = require('react')

class About extends React.Component {
  render () {
    return (
      <section className="success" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>About</h2>
                      <hr className="star-light"></hr>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-4 col-lg-offset-2">
                      <p>Full-Stack developer by day, sleeping by night. I have put pen to paper during design processes, worked with multiple developers, and also worn the entreprenuerial hat.</p>
                  </div>
                  <div className="col-lg-4">
                      <p>I am an undergraduate at the National University of Singapore (NUS) and part of the NOC Silicon Valley program! Currently residing in San Francisco, CA. I am looking to further my career as a professional web developer.</p>
                  </div>
                  <div className="col-lg-4">
                      <p>Take some time to look at my work, credentials, and if you're interested in helping me make things happen, let's get in touch.</p>
                  </div>
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                      <a href="#contact" className="btn btn-lg btn-outline">
                          <i className="fa fa-download"></i> Contact Me
                      </a>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

module.exports = About
