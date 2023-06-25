import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { postChangePassword } from "../services/apiServices";
import { toast } from "react-toastify";
const ModalPassword = () => {

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const handSubmitChangePass = async () => {
    let res = await postChangePassword(currentPass, newPass);
    console.log(">>> check res", res);

    if (res && res.EC === 0) {

      toast.success(res.EM);
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  }
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={currentPass}
            onChange={(event) => setCurrentPass(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">A new password</label>
          <input
            type="password"
            className="form-control"
            value={newPass}
            onChange={(event) => setNewPass(event.target.value)}
          />
        </div>

        <Button variant="primary" onClick={() => handSubmitChangePass()}>
          Save
        </Button>

      </form>
    </>
  )
}
export default ModalPassword;