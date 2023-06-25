import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcPlus } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { postUpdateProfile } from "../services/apiServices";
import { toast } from "react-toastify";
import { updateProfile } from "../../redux/action/userAction";
const MainInfor = (props) => {
    const account = useSelector((state) => state.user.account);
    const dispatch = useDispatch()
    console.log("123", account)
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [preViewImage, setPreViewImage] = useState("");

    useEffect(() => {
        setEmail(account.email);
        setUsername(account.username);
        if (account.image) {
            setPreViewImage(`data:image/jpeg;base64,${account.image}`);
        }
    }, [])

    const handleUploadImage = (event) => {
        if (event.target && event.target.value && event.target.files[0]) {
            setPreViewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

    const handSubmitUpdateProfile = async () => {
        
        let res = await postUpdateProfile(username, image);
      
        if (res && res.EC === 0) {
            props.logOut();
            toast.success(res.EM);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    return (
        <>

            <div>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            disabled
                            value={email}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
                            value={account.role}
                        />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label label-upload" htmlFor="labelUpload">
                            <FcPlus />
                            Upload File Image
                        </label>
                        <input
                            type="file"
                            hidden
                            id="labelUpload"
                            onChange={(event) => handleUploadImage(event)}
                        />
                    </div>
                    <div className="col-md-12 img-preview">
                        {preViewImage ? (
                            <img src={preViewImage} />
                        ) : (
                            <span>PreView Image</span>
                        )}
                    </div>
                    <Button variant="primary" onClick={() => handSubmitUpdateProfile()}>
                        Save
                    </Button>
                </form>
            </div>
        </>
    )
}
export default MainInfor;