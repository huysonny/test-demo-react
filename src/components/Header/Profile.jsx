import Modal from "react-bootstrap/Modal";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainInfor from "./MainInfor";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import ModalPassword from "./ModalPassword";
import ModalHistory from "./ModalHistory";
const Profile = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
  };
  const logOut=()=>{
    props.handleLogOut();
  }
 
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title><span>User Information Management</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs
      defaultActiveKey="Main Infor"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Main Infor" title="Main Infor">
        <MainInfor logOut={logOut}/>
      </Tab>
      <Tab eventKey="Password" title="Password" >
        <ModalPassword/>
      </Tab>
      <Tab eventKey="History" title="History" >
        <ModalHistory/>
      </Tab>
    </Tabs>
        </Modal.Body>
       
      </Modal>
    </>
  );
};
export default Profile;
