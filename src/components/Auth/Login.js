import { useState } from "react";
import "./Login.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { postLogin } from "../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
import Language from "../Header/Language";
import { useTranslation } from "react-i18next";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!passWord) {
      toast.error("Invalid passWord");
      return;
    }
    setIsLoading(true);
    //submit apis
    let data = await postLogin(email, passWord);
    console.log("check data login", data);
    if (data && data.EC === 0) {
      // dispatch({
      //   type: "FETCH_USER_LOGIN_SUCCESS",
      //   payload: data,
      // });
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span className="text1">{t("Login1.text1")}</span>
        <button onClick={() => navigate("/register")}>Sign up</button>
        <Language className="Language" />
      </div>
      <div className="title col-4 mx-auto">Nguyen Thanh Huy</div>
      <div className="welcome col-4 mx-auto">{t("Login1.Hello")}</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>{t("Login1.Password")}</label>
          <input
            type={"password"}
            className="form-control"
            value={passWord}
            onChange={(event) => setPassWord(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </div>
        <span className="forgot-password">{t("Login1.ForgotP")}</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && <ImSpinner10 className="loader-icon" />}
            <span> {t("Login1.Loginto")}</span>
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            &#60;&#60; {t("Login1.Goto")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
