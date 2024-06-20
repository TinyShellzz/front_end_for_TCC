import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setChapter } from "../../store/doc_slice/ChapterSlice";
import styles from "./NavbarDocument.module.css";
import arrowDown from "../../assets/svgs/arrow-ios-downward-outline.svg";
import arrowUp from "../../assets/svgs/arrow-ios-upward-outline.svg";
import { useNavigate } from "react-router-dom";
import { config } from "../../config/config";

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
            {config.TCCDocumentStructure.map((obj: any, index: any) => {
              return (
                <div key={index}>
                  <div
                    className={styles.chapter}
                    onClick={() => {
                      dispatch(setChapter(index));
                      navigate("/document/" + obj.url);
                    }}
                  >
                    <div>
                      <p className={styles.p}>{obj.title}</p>
                    </div>
                    {obj.child.length != 0 && (
                      <div className={styles.arrow_box}>
                        {chapter == index ? (
                          <img
                            src={arrowUp}
                            className={styles.arrow}
                            alt="arrowDown"
                          />
                        ) : (
                          <img
                            src={arrowDown}
                            className={styles.arrow}
                            alt="arrowUp"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  {chapter == index && (
                    <div className={styles.child_box}>
                      {obj.child.map((child: any, index: any) => {
                        return (
                          <div
                            key={index}
                            className={styles.child_chapter}
                            onClick={() => navigate("/document/" + child.url)}
                          >
                            <p className={styles.p}>{child.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default NavbarDocument;
