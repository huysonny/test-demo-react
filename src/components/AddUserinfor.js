import React from "react";
class AddUserInfor extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26,
  };
  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnchangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name : </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchangeInput(event)}
          />
          <label>Your age : </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnchangeAge(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfor;