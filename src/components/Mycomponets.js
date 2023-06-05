import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
  // JSX

  render() {
    const myInfor = ["ab", "c", "c"];
    return (
      <div>
        <UserInfor />
        <br></br>
        <br></br>
        <DisplayInfor name="Hoi Dan IT" age="30" />
        <hr></hr>
        <DisplayInfor name="thanh huy" age={20} myInfor={myInfor} />
      </div>
    );
  }
}
export default Mycomponent;
