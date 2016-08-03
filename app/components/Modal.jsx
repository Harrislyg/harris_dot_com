var React = require('react')

class Modal extends React.Component {
  render () {
    console.log('test', this.props.index)
    console.log('HELLO', this.props.project.title)
    return (
      <div className="portfolio-modal modal fade" id={"portfolioModal" + this.props.index} tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                      <div className="rl">
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-lg-offset-2">
                          <div className="modal-body">
                              <h2>{this.props.project.title}</h2>
                              <hr className="star-primary"></hr>
                              <img src={"img/portfolio/"+this.props.index+".png"} className="img-responsive img-centered" alt="" />
                              <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                              <ul className="list-inline item-details">
                                  <li>Client:
                                      <strong><a href="http://startbootstrap.com">Start Bootstrap</a>
                                      </strong>
                                  </li>
                                  <li>Date:
                                      <strong><a href="http://startbootstrap.com">April 2014</a>
                                      </strong>
                                  </li>
                                  <li>Service:
                                      <strong><a href="http://startbootstrap.com">Web Development</a>
                                      </strong>
                                  </li>
                              </ul>
                              <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i>Close</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}

module.exports = Modal
