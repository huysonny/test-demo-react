import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // destructuring array /object
    console.log(this.props);
    const { age, name } = this.props;
    //props => viết tắt properties
    return (
      <div>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
