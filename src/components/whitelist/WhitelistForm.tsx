import { useFormik } from "formik";
import { useEffect, useState } from "react";
import WhitelistFormSchema from "../../schema/WhitelistFormSchema";
import styles from "./WhitelistForm.module.css";
import axios from "axios";
import { config } from "../../config/config";

const WhitelistForm = () => {
  const [whitelistNum, setWhitelistNum] = useState(10);
  const [whitelists, setWhitelists] = useState([]);
  const [pageNum, setPageNum] = useState(2);
  const [page, setPage] = useState(1);

  const onSubmit = async (values: any) => {
    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist",
      data: { keyword: values.keyword, page: 1 },
    }).then((res) => {
      setWhitelists(res.data);
      return res.data;
    });

    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist_amount",
      data: { keyword: values.keyword },
    }).then((res) => {
      setWhitelistNum(res.data.amount);
      setPageNum(Math.ceil(res.data.amount / 12));
      return res.data;
    });

    setPage(1);
  };

  const { values, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        keyword: "",
      },
      validationSchema: WhitelistFormSchema,
      onSubmit,
    });

  const handlePageChange = (event: any) => {
    setPage(event.target.value);
  };

  const handleKey = (event: any) => {
    if (event.code === "Enter" && config.pre_page != page) {
      config.pre_page = page;

      axios({
        method: "post",
        url: "http://localhost/backend/get_whitelist",
        data: { keyword: values.keyword, page: page },
      }).then((res) => {
        setWhitelists(res.data);
        return res.data;
      });
    }
  };

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist",
      data: { page: 1 },
    }).then((res) => {
      setWhitelists(res.data);
      return res.data;
    });

    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist_amount",
      data: {},
    }).then((res) => {
      setWhitelistNum(res.data.amount);
      setPageNum(Math.ceil(res.data.amount / 12));
      return res.data;
    });
  }, []);

  const handlePreviousPage = () => {
    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist",
      data: { keyword: values.keyword, page: page - 1 },
    }).then((res) => {
      setWhitelists(res.data);
      return res.data;
    });

    setPage(page - 1);
  };

  const handleNextPage = () => {
    axios({
      method: "post",
      url: "http://localhost/backend/get_whitelist",
      data: { keyword: values.keyword, page: page + 1 },
    }).then((res) => {
      setWhitelists(res.data);
      return res.data;
    });

    setPage(page + 1);
  };

  return (
    <div>
      <div>
        <div className={styles.title_box}>
          <h1>白名单列表</h1>
        </div>
        <div className={styles.title_box}>
          <p>共{whitelistNum}个白名单</p>
        </div>
      </div>
      <div className={styles.title_box}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            value={values.keyword}
            id="keyword"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="输入游戏昵称或邮箱"
          />

          <button type="submit" disabled={isSubmitting}>
            查找
          </button>
        </form>
      </div>

      <div className={styles.table_box}>
        <table className={styles.content_table}>
          <thead>
            <tr>
              <td>游戏昵称</td>
              <td>QQ号</td>
              <td>上次登录时间</td>
              <td>备注</td>
            </tr>
          </thead>
          <tbody>
            {whitelists.map((w: any, i: any) => (
              <tr key={i}>
                <td>{w.display_name}</td>
                <td>{w.qq_num}</td>
                <td>{w.last_login_time}</td>
                <td>{w.remark.substring(1, 40)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.title_box}>
        <button type="button" onClick={handlePreviousPage}>
          上一页
        </button>
        <button type="button" onClick={handleNextPage}>
          下一页
        </button>
      </div>
      <div className={styles.title_box}>
        第
        <input
          className={styles.page_input}
          value={page}
          onChange={handlePageChange}
          onKeyDown={handleKey}
        />
        页/共{pageNum}页
      </div>
    </div>
  );
};

export default WhitelistForm;
