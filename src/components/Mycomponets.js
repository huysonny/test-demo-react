import React from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
  // JSX
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "16" },
      { id: 2, name: "Huy", age: "20" },
      { id: 3, name: "Thanh Huy", age: "21" },
    ],
  };
  handleAddNewUser = (userObj) => {
    console.log("check data ", userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br></br>
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>
        <div className="b"></div>
      </>
    );
  }
}
export default Mycomponent;
