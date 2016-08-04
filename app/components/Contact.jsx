var React = require('react')

class Contact extends React.Component {
  onFormSubmit (e) {
    e.preventDefault()
    var name = this.refs.name.value
    var email = this.refs.email.value
    var phone = this.refs.phone.value
    var message = this.refs.message.value
    var formData = {
      from: email,
      to: 'leow_harris@hotmail.sg',
      subject: name,
      text: message
    }

    $.ajax({
      type: 'POST',
      url: 'https://arcane-spire-32719.herokuapp.com/sendmail',
      data: formData,
      dataType: 'json',
      success: function (data) {
          console.log(data)
      }.bind(this),
      error: function (xhr, status, err) {
          console.error(status, err.toString());
      }.bind(this)
    })
  }
  render () {
    return (
      <section id="contact">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h2>Contact Me</h2>
                      <hr className="star-primary"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <form onSubmit={this.onFormSubmit.bind(this)} name="sentMessage" id="contactForm" noValidate>
                          <div className="row control-group">
                              <div className="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Name</label>
                                  <input ref="name" type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                                  <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="row control-group">
                              <div className="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Email Address</label>
                                  <input ref="email" type="email"  className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                                  <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="row control-group">
                              <div className="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Phone Number</label>
                                  <input ref="phone" type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                  <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="row control-group">
                              <div className="form-group col-xs-12 floating-label-form-group controls">
                                  <label>Message</label>
                                  <textarea ref="message" rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                  <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <br/>
                          <div id="success"></div>
                          <div className="row">
                              <div className="form-group col-xs-12">
                                  <button type="submit" className="btn btn-success btn-lg">Send</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

module.exports = Contact
