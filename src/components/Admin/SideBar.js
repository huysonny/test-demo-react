import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";

import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

import "./SideBar.scss";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  const account = useSelector((state) => state.user.account);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3em"} color={"00bfff"} />
            <span onClick={() => navigate("/")}>Nguyễn Thanh Huy</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              Dashboard
              <Link to="/admins" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            {account && account.role === "ADMIN" && (
              <SubMenu icon={<FaGem />} title="Features">
                <MenuItem>
                  Quản Lý Users
                  <Link to="/admins/manage-users" />
                </MenuItem>
                <MenuItem>
                  {" "}
                  Quản Lý Bài Quiz
                  <Link to="/admins/manage-quizzes" />
                </MenuItem>
                <MenuItem>
                  {" "}
                  Quản Lý Câu Hỏi
                  <Link to={"/admins/manage-questions"} />
                </MenuItem>
              </SubMenu>
            )}
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://www.facebook.com/huytaliyah"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <BsFacebook />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                Nguyễn Thanh Huy
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
