import styles from "./MainPageBanner.module.css";
import tcc_img from "../../assets/images/Image_1706264651337.png";

const MainPageBanner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.TccSiteFirstPage_text}>
              <h1>
                <span className={styles.span1}>欢迎来到</span>
                <span className={styles.span2}>Tcc</span>
                <span className={styles.span3}>的全新网页</span>😉
                <br />
                <span className={styles.span4}>New WebSite Of</span>
                <span className={styles.span5}>1T2C🎉</span>
              </h1>
              <p>
                <span className={styles.span6}>
                  ♥️我们特意重新构建了网页，只为您更美好的体验.♥️
                </span>
                <br />
                <span className={styles.span7}>
                  🔥并加入了许多功能，希望您对Tcc的热爱持之以恒.🔥
                </span>
              </p>
              <div className={styles.button}>
                <a
                  href="https://www.bilibili.com/video/BV1ma4y1y7CA/?spm_id_from=333.788"
                  target="_blank"
                  className={styles.btn}
                >
                  🔥点击即可加入Tcc!!!🔥
                </a>
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <div className={styles.img}>
              <img src={tcc_img} alt="提嘻嘻小合照" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageBanner;
