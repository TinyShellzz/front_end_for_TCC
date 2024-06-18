import styles from "./EditButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setEdit } from "../../store/doc_slice/EditDocumentSlice";

const EditButton = () => {
  const edit = useSelector((state: RootState) => state.edit.value);
  const permission = useSelector((state: RootState) => state.login.permission);
  const dispatch = useDispatch();

  return edit || permission < 3 ? (
    <></>
  ) : (
    <button onClick={() => dispatch(setEdit(true))} className={styles.button}>
      编辑
    </button>
  );
};

export default EditButton;
