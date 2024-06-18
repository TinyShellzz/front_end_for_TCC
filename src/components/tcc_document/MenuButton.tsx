import { useDispatch } from "react-redux";
import styles from "./MenuButton.module.css";
import { toggleMenu } from "../../store/doc_slice/ChapterSlice";

const MenuButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button className={styles.button} onClick={() => dispatch(toggleMenu())}>
        菜单
      </button>
    </>
  );
};
export default MenuButton;
