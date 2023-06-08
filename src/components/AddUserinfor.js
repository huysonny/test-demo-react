import React, { useState } from "react";
// class AddUserInfor extends React.Component {
//   state = {
//     name: "Eric",
//     address: "Hoi Dan IT",
//     age: 26,
//   };
//   handleOnchangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     console.log(event.target.value);
//   };

//   handleOnchangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//     console.log(event.target.value);
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100) + 1 + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name : </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnchangeInput(event)}
//           />
//           <label>Your age : </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnchangeAge(event)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hoi Dan IT");
  const [age, setAge] = useState("");
  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm from {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name : </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnchangeInput(event)}
        />
        <label>Your age : </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnchangeAge(event)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
