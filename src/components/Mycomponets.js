import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
  // JSX
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "30" },
      { id: 2, name: "Huy", age: "20" },
      { id: 1, name: "Thanh Huy", age: "21" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfor />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}
export default Mycomponent;
