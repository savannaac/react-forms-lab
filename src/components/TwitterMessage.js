import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleCharacterChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleCharacterChange(event)} value={this.state.message} name="message" id="message" />
        <p>{this.props.maxChars - this.state.message.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
