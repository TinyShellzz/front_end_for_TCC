import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import tcc_logo from "../assets/images/logo.png";

import {
  setEmail,
  setLogout,
  setPermission,
  setPhone,
} from "../store/slice/LoginSlice";
import Cookies from "universal-cookie";

const Navbar = () => {
  const login = useSelector((state: RootState) => state.login.login);
  const mobile = useSelector((state: RootState) => state.mobile.mobile);
  const permission = useSelector((state: RootState) => state.login.permission);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const logout = () => {
    cookies.remove("session_token");
    dispatch(setLogout());
    dispatch(setPermission(0));
    dispatch(setEmail(""));
    dispatch(setPhone(""));
  };

  if (mobile >= 3) {
    return <NavbarMobile />;
  }

  return (
    <div className={styles.box_nav}>
      <div className={styles.box_content}>
        <div className={styles.box_icon}>
          <img className={styles.icon} src={tcc_logo} alt="" />
        </div>
        <div className={styles.box_menu}>
          <div className={styles.normal_box}>
            <Link to="/">
              <p className={styles.p}>首页</p>
            </Link>
          </div>
          <div className={styles.normal_box}>
            <Link to="/document">
              <p className={styles.p}>文档</p>
            </Link>
          </div>
          <div className={styles.normal_box}>
            <p className={styles.p}>白名单</p>
          </div>
          <div className={styles.normal_box}>
            <p className={styles.p}>小黑屋</p>
          </div>
          {!permission && (
            <div className={styles.bigger_box}>
              <p className={styles.p}>加入服务器</p>
            </div>
          )}
          {permission != 0 && (
            <div className={styles.normal_box}>
              <p className={styles.p}>个人信息</p>
            </div>
          )}
          {permission >= 3 && (
            <div className={styles.normal_box}>
              <p className={styles.p}>审核</p>
            </div>
          )}
          {login ? (
            <div className={styles.bigger_box} onClick={logout}>
              <Link to="/">
                <p className={styles.p}>退出登录</p>
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.bigger_box}>
                <Link to="/login">
                  <p className={styles.p}>登录</p>
                </Link>
                <div className={styles.box_fill}></div>
                <Link to="/signup">
                  <p className={styles.p}>注册</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
