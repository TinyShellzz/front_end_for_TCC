import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setChapter } from "../../store/doc_slice/ChapterSlice";
import styles from "./NavbarDocument.module.css";
import arrowDown from "../../assets/svgs/arrow-ios-downward-outline.svg";
import arrowUp from "../../assets/svgs/arrow-ios-upward-outline.svg";

const NavbarDocument = () => {
  const chapter = useSelector((state: RootState) => state.chapter.value);
  const menu = useSelector((state: RootState) => state.chapter.menu);
  const mobile = useSelector((state: RootState) => state.mobile.mobile);
  const dispatch = useDispatch();

  return (
    <>
      {menu && (
        <div className={styles.nav}>
          {mobile < 1 && <div className={styles.fill}></div>}
          <div className={styles.container}>
            <div className={styles.chapter}>
              <Link to="/document/introduce" style={{ textDecoration: "none" }}>
                前言
              </Link>
            </div>

            <div
              className={styles.chapter}
              onClick={() => dispatch(setChapter(1))}
            >
              <div>
                <Link to="/document/1_rules" style={{ textDecoration: "none" }}>
                  <p className={styles.p}>服务器守则</p>
                </Link>
              </div>
              <div className={styles.arrow_box}>
                {chapter == 1 ? (
                  <img src={arrowUp} className={styles.arrow} alt="arrowDown" />
                ) : (
                  <img src={arrowDown} className={styles.arrow} alt="arrowUp" />
                )}
              </div>
            </div>
            {chapter == 1 && (
              <div className={styles.child_box}>
                <div>
                  <Link
                    to="/document/1_1_rules"
                    style={{ textDecoration: "none" }}
                  >
                    <p className={styles.p}>服务器守则1_1</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/document/1_2_rules"
                    style={{ textDecoration: "none" }}
                  >
                    <p className={styles.p}>服务器守则1_2</p>
                  </Link>
                </div>
              </div>
            )}
            <div>
              <Link to="/document/2_newplayer">新玩家相关</Link>
            </div>
            <div>
              <Link to="/document/3_sponsor">赞助</Link>
            </div>
            <div>
              <Link to="/document/4_plugin">插件</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavbarDocument;
