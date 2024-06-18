import { Link } from "react-router-dom";

const NavbarDocument = () => {
  return (
    <nav>
      <div>
        <Link to="/document/1_rules">服务器守则</Link>
        <Link to="/document/2_newplayer">新玩家相关</Link>
      </div>
    </nav>
  );
};
export default NavbarDocument;
