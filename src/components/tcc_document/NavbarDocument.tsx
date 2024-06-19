import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setChapter } from "../../store/doc_slice/ChapterSlice";
import styles from "./NavbarDocument.module.css";
import arrowDown from "../../assets/svgs/arrow-ios-downward-outline.svg";
import arrowUp from "../../assets/svgs/arrow-ios-upward-outline.svg";
import { useNavigate } from "react-router-dom";

const NavbarDocument = () => {
  const chapter = useSelector((state: RootState) => state.chapter.value);
  const menu = useSelector((state: RootState) => state.chapter.menu);
  const mobile = useSelector((state: RootState) => state.mobile.mobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {menu && (
        <div className={styles.nav}>
          {mobile < 1 && <div className={styles.fill}></div>}
          <div className={styles.container}>
            <div
              className={styles.chapter}
              onClick={() => navigate("/document/introduce")}
            >
              <p className={styles.p}>前言</p>
            </div>

            <div
              className={styles.chapter}
              onClick={() => {
                dispatch(setChapter(1));
                navigate("/document/1_rules");
              }}
            >
              <div>
                <p className={styles.p}>服务器守则</p>
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
                <div
                  className={styles.child_chapter}
                  onClick={() => navigate("/document/1_1_rules")}
                >
                  <p className={styles.p}>服务器守则1_1</p>
                </div>
                <div
                  className={styles.child_chapter}
                  onClick={() => navigate("/document/1_2_rules")}
                >
                  <p className={styles.p}>服务器守则1_2</p>
                </div>
              </div>
            )}

            {/* 上面的是demo */}
            <div className={styles.chapter}>
              <Link
                to="/document/2_newplayer"
                style={{ textDecoration: "none" }}
              >
                <p className={styles.p}>新玩家相关</p>
              </Link>
            </div>
            <div className={styles.chapter}>
              <Link to="/document/3_sponsor" style={{ textDecoration: "none" }}>
                <p className={styles.p}>赞助</p>
              </Link>
            </div>
            <div className={styles.chapter}>
              <Link to="/document/4_plugin" style={{ textDecoration: "none" }}>
                <p className={styles.p}>插件</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavbarDocument;
