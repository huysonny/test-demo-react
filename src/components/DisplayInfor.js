import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfor extends React.Component {
//   render() {
//     // destructuring array /object
//     console.log(">>> call me render : ");
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     //props => viết tắt properties
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr></hr>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfor = (props) => {
  console.log(">>> call me render : ");
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handShowHideListUser()}>
          {isShowHideListUser ? "Hide List User" : "Show List User"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfor;
