import NavbarDocument from "../components/tcc_document/NavbarDocument";
import DocumentContent from "../components/tcc_document/DocumentContent";
import { useParams } from "react-router-dom";
import styles from "./TCCDocument.module.css";
import RightSideNavbar from "../components/tcc_document/RightSideNavbar";
import MenuButton from "../components/tcc_document/MenuButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const TCCDocument = () => {
  let { name } = useParams();
  const mobile = useSelector((state: RootState) => state.mobile.mobile);

  return (
    <div className={styles.document}>
      <MenuButton />
      {mobile < 3 && <NavbarDocument></NavbarDocument>}
      <DocumentContent name={"" + name} />
      {mobile < 2 && <RightSideNavbar />}
    </div>
  );
};

export default TCCDocument;
