var React = require('react')
var Skillz = require('Skillz')


class Modal extends React.Component {
  render () {
    console.log('test', this.props.index)
    console.log('HELLO', this.props.project.title)
    console.log('SKILLZ', this.props.project.skills)
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
                              <a href={this.props.project.links}><img src={"img/portfolio/"+this.props.index+".png"} className="img-responsive img-centered" alt="" /></a>
                              <p id="des">{this.props.project.description}</p>
                              <ul className="list-inline item-details">
                                  <li>Link:
                                    <strong><a href={this.props.project.links}>{this.props.project.title}</a>
                                      </strong>
                                  </li>
                                  <li>Github:
                                      <strong><a href={this.props.project.github}> {this.props.project.github}</a>
                                      </strong>
                                  </li>
                                  <br />
                                  <br />
                                  <li>Skills:&nbsp;
                                    {this.props.project.skills.map((skill, i) => (<Skillz skill={skill} key={i} />))}
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
