import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const login = useSelector((state: RootState) => state.login.login);
  const mobile = useSelector((state: RootState) => state.mobile.mobile);
  const permission = useSelector((state: RootState) => state.login.permission);

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
        <div>登出</div>
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
