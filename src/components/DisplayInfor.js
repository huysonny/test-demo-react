import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";
class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // destructuring array /object
    const { listUsers } = this.props;
    // console.log(listUsers);
    //props => viết tắt properties
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser == true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr></hr>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
