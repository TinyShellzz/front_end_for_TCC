import { useFormik } from "formik";
import EmailSignUpSchema from "../schema/EmailSignUpSchema";
import useRegisterCodeQuery from "../hooks/useRegisterCodeQuery";
import styles from "./EmailSignUpForm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmail, setLogin } from "../store/slice/LoginSlice";
import { useNavigate } from "react-router-dom";

const EmailSignUpForm = () => {
  const [gotCode, setGotCode] = useState(false);
  const [time, setTime] = useState(0);
  const [errorButton, setErrorButton] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values: any, actions: any) => {
    // 等待 axios 执行完毕
    let data: any = await axios({
      method: "post",
      url: "http://localhost/backend/register_email",
      data: {
        email: values.email,
        password: values.password,
        code: values.code,
      },
      withCredentials: true, // 设置cookie
    }).then((res) => res.data);

    if (data && data.errorMessage != undefined) {
      console.log(data.errorMessage);
      setErrorButton(data.errorMessage);
    } else {
      dispatch(setLogin()); // 状态切换到login
      dispatch(setEmail(values.email));
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
      confirmPassword: "",
      code: "",
    },
    validationSchema: EmailSignUpSchema,
    onSubmit,
  });

  const {
    data: code,
    isLoading,
    error,
    refetch,
  } = useRegisterCodeQuery({
    email: values.email,
    phone: "",
  });

  const get_code = () => {
    if (
      !touched.email ||
      !touched.password ||
      !touched.confirmPassword ||
      errors.email ||
      errors.password ||
      errors.confirmPassword
    ) {
      setErrorButton("请先填写上面的内容");
      return;
    }

    refetch();
    console.log("获取验证码");
    setGotCode(true);
    // 获取验证码倒计时
    setTime(10);
  };

  useEffect(() => {
    if (gotCode) {
      if (time == 0) {
        setGotCode(false);
      }
      const intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [time]);

  return (
    <div className={styles.box}>
      <div className={styles.box_login}>
        <h1 className={styles.h1}>立🐔注册</h1>
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
              type="text"
              placeholder="键入你的QQ邮箱"
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
              type="password"
              placeholder="键入你的密码"
            ></input>
            <div className={styles.box_error}>
              {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
          </div>

          <div className={styles.box_input}>
            <label htmlFor="confirmPassword">确认密码</label>
            <input
              className={styles.input}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              type="password"
              placeholder="再次键入你的密码"
            ></input>
            <div className={styles.box_error}>
              {touched.confirmPassword && errors.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className={styles.box_input}>
            <label htmlFor="code">
              验证码
              <br />
            </label>
            <input
              className={styles.code_input}
              value={values.code}
              onChange={handleChange}
              onBlur={handleBlur}
              id="code"
              type="text"
              placeholder="输入验证码"
            ></input>

            <button
              disabled={gotCode}
              className={styles.code_button}
              onClick={get_code}
              type="button"
            >
              {gotCode ? time : "获取验证码"}
            </button>
            <div className={styles.box_error}>
              {touched.code && errors.code && <p>{errors.code}</p>}
              {errorButton &&
                (!touched.password ||
                  !touched.confirmPassword ||
                  !touched.email ||
                  errors.password ||
                  errors.email ||
                  errors.confirmPassword) && <p>{errorButton}</p>}
              {!isLoading && error && <p>网络错误</p>}
              {!isLoading &&
                code &&
                Object.prototype.hasOwnProperty.call(code, "errorMessage") && (
                  <p>{code.errorMessage}</p>
                )}
            </div>
          </div>

          <div className={styles.box_submit}>
            <button
              className={styles.submit_button}
              disabled={isSubmitting}
              type="submit"
            >
              注册
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EmailSignUpForm;
