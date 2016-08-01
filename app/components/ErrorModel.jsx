var React = require('react')

class ErrorModal extends React.Component {
  componenetDidMount () {
    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  }

  render () {
    var {title, message} = this.props
    return (
      <div id="error-modal" className="reveal timy text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    )
  }
}

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
}
module.exports = ErrorModal
