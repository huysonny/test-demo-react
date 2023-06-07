import React from "react";
class DisplayInfor extends React.Component {
  render() {
    // destructuring array /object

    const { listUsers } = this.props;
    console.log(listUsers);
    //props => viết tắt properties
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr></hr>
            </div>
          );
        })}
        {/* <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr></hr>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr></hr>
        <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}
export default DisplayInfor;
