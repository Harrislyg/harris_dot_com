var React = require('react')

class Footer extends React.Component {
  render () {
    return (
      <footer className="text-center">
          <div className="footer-above">
              <div className="container">
                  <div className="row">
                      <div className="footer-col col-md-4">
                          <h3>Location</h3>
                          <p>Singapore / U.S.A
                              <br/>San Francisco, CA 94101</p>
                      </div>
                      <div className="footer-col col-md-4">
                          <h3>Profiles</h3>
                          <ul className="list-inline">
                              <li>
                                  <a href="https://www.facebook.com/harris.leow" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                              </li>
                              <li>
                                  <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                              </li>
                              <li>
                                  <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="https://sg.linkedin.com/in/harrisleow" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                              </li>

                          </ul>
                      </div>
                      <div className="footer-col col-md-4">
                          <h3>About</h3>
                          <p>Full-Stack Web Developer, nurtured by <a href="https://generalassemb.ly/">GA Singapore</a>.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-below">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          Copyright &copy; Harris 2016
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}

var dribble = "<li><a href='#' className='btn-social btn-outline'><i className='fa fa-fw fa-dribbble'></i></a></li>"

module.exports = Footer
