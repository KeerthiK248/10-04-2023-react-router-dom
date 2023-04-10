import React from "react";


export default class Event2 extends React.Component {
  state = {
    yourname: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmitEvent = (e) => {
    e.preventDefault();
    const { yourname } = this.state;
    alert("Hello " + yourname + "!");
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmitEvent}>
          <input
            type="text"
            name="yourname"
            placeholder="Enter Your Name"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}