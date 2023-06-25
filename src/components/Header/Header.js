import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/apiServices";
import { toast } from "react-toastify";
import { doLogOut } from "../../redux/action/userAction";
import { FaReact } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Language from "./Language";
import { useState } from "react";
import Profile from "./Profile";
const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  console.log("account", account);
  const { t } = useTranslation();
  const handleLogOut = async () => {
    let res = await logout(account.email, account.refresh_token);
    if (res && res.EC === 0) {
      dispatch(doLogOut());
      navigate("/");
      toast.success(res.EM);
    } else {
      toast.error(res.EM);
    }
  };
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Nguyễn Thanh Huy</Navbar.Brand> */}
          <NavLink to="/" className="navbar-brand">
            <FaReact className="brand-icon" />
            Nguyễn Thanh Huy
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                {t("sideBar.Home")}
              </NavLink>
              <NavLink to="/users" className="nav-link">
                {t("sideBar.Users")}
              </NavLink>
              <NavLink to="/admins" className="nav-link">
                {t("sideBar.Admin")}
              </NavLink>
              {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admins">Users</Nav.Link> */}
            </Nav>
            <Nav>
              {isAuthenticated === false ? (
                <>
                  <button className="btn-login" onClick={() => handleLogin()}>
                    {t("sideBar.Auth.Login")}
                  </button>
                  <button
                    className="btn-signup"
                    onClick={() => navigate("/register")}
                  >
                    {t("sideBar.Auth.SignUp")}
                  </button>
                </>
              ) : (
                <NavDropdown
                  title={t("sideBar.Auth.logged")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={() => handleLogOut()}>
                    {t("sideBar.Auth.LogOut")}
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <span onClick={() => setShowProfile(true)}>
                      {" "}
                      {t("sideBar.Auth.Profile")}
                    </span>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              <Language />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Profile
        show={showProfile}
        setShow={setShowProfile}
        handleLogOut={handleLogOut}
      />
    </>
  );
};
export default Header;
