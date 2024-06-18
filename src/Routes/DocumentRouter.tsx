import { Route, Routes } from "react-router-dom";
import TCCDocument from "../views/TCCDocument";

const DocumentRouter = () => {
  return (
    <Routes>
      <Route path="/document" element={<TCCDocument name="服务器守则" />} />
      <Route
        path="/document/1_rules"
        element={<TCCDocument name="这是服务器守则" />}
      />
      <Route
        path="/document/2_newplayer"
        element={<TCCDocument name="这是新玩家相关" />}
      />
    </Routes>
  );
};

export default DocumentRouter;
