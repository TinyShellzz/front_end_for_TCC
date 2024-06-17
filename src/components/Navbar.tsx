import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";
import { UseDispatch } from "react-redux";
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

  if (mobile) {
    return <NavbarMobile />;
  }

  if (login) {
    return (
      <div>
        <div>图标</div>
        <div>文档</div>
        <div>白名单</div>
        <div>小黑屋</div>
        <div onClick={logout}>
          <Link to="/">登出</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>图标</div>
        <div>文档</div>
        <div>白名单</div>
        <div>小黑屋</div>
        <div>
          <Link to="/login">登录</Link>
        </div>
        <div>
          <Link to="/signup">注册</Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
