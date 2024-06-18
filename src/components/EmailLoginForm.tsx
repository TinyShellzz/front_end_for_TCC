import { useFormik } from "formik";
import EmailLoginSchema from "../schema/EmailLoginSchema";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginWithSessionToken from "../hooks/loginWithSessionToken";
import styles from "./EmailLoginForm.module.css";

const EmailLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: any, actions: any) => {
    let data: any = await axios({
      method: "post",
      url: "http://localhost/backend/login_email",
      data: {
        email: values.email,
        password: values.password,
      },
      withCredentials: true, // 设置cookie
    }).then((res) => res.data);

    if (data && data.errorMessage != undefined) {
      console.log(data.errorMessage);
    } else {
      loginWithSessionToken(dispatch);
      navigate("/"); // 回到主页
    }
    actions.resetForm(); // clear the from
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: EmailLoginSchema,
    onSubmit,
  });

  return (
    <div className={styles.box}>
      <div className={styles.box_login}>
        <h1 className={styles.h1}>立🐔登录</h1>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className={styles.box_input}>
            <label htmlFor="email">邮箱</label>
            <input
              className={styles.input}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              placeholder="键入QQ邮箱"
              type="text"
            ></input>
            <div className={styles.box_error}>
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.box_input}>
            <label htmlFor="password">密码</label>
            <input
              className={styles.input}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              placeholder="键入密码"
              type="password"
            ></input>
          </div>
          <div className={styles.box_error}>
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>

          <div className={styles.box_action}>
            <div>忘记密码?</div>{" "}
            <div>
              <Link to="/signup">注册一个</Link>
            </div>
          </div>

          <div className={styles.box_submit}>
            <button
              className={styles.submit_button}
              disabled={isSubmitting}
              type="submit"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailLoginForm;
