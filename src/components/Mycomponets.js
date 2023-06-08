import React, { useState } from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
// class Mycomponent extends React.Component {
//   // JSX
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi Dan IT", age: "16" },
//       { id: 2, name: "Huy", age: "20" },
//       { id: 3, name: "Thanh Huy", age: "21" },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     console.log("check data ", userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     return (
//       <>
//         <br></br>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br></br>
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }
const Mycomponent = (props) => {
  const [listUsers, setListUser] = useState([
    { id: 1, name: "Hoi Dan IT", age: "16" },
    { id: 2, name: "Huy", age: "20" },
    { id: 3, name: "Thanh Huy", age: "21" },
  ]);
  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUsers]);
  };
  const handleDeleteUser = (userID) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userID); // item la tung phan tu trong mang
    setListUser(listUsersClone);
  };
  return (
    <>
      <br></br>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br></br>
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};
export default Mycomponent;
