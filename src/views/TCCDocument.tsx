import NavbarDocument from "../components/tcc_document/NavbarDocument";
import DocumentContent from "../components/tcc_document/DocumentContent";
import { useParams } from "react-router-dom";
import styles from "./TCCDocument.module.css";
import RightSideNavbar from "../components/tcc_document/RightSideNavbar";
import MenuButton from "../components/tcc_document/MenuButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import EditButton from "../components/tcc_document/EditButton";

export const TCCDocument = () => {
  const mobile = useSelector((state: RootState) => state.mobile.mobile);

  return (
    <div className={styles.document}>
      <EditButton></EditButton>
      {mobile >= 3 && <MenuButton />}
      {mobile < 3 && <NavbarDocument></NavbarDocument>}
      <DocumentContent />
      {mobile < 2 && <RightSideNavbar />}
    </div>
  );
};

export default TCCDocument;
