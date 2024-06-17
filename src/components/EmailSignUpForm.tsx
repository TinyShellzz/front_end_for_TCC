import { useFormik } from "formik";
import { EmailSignUpSchema } from "../schema/EmailSignUpSchema";
import useRegisterCodeQuery from "../hooks/useRegisterCodeQuery";
import styles from "./EmailSignUpForm.module.css";
import { useEffect, useState } from "react";

const BasicForm = () => {
  const [gotCode, setGotCode] = useState(false);
  const [time, setTime] = useState(0);
  const [errorButton, setErrorButton] = useState("");

  const onSubmit = (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    //...
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
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        className={styles.input}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="text"
        placeholder="Enter your email"
      ></input>
      {touched.email && errors.email && (
        <p className={styles.error}>{errors.email}</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your email"
      ></input>
      {touched.password && errors.password && (
        <p className={styles.error}>{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        className={styles.input}
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Enter your email"
      ></input>
      {touched.confirmPassword && errors.confirmPassword && (
        <p className={styles.error}>{errors.confirmPassword}</p>
      )}

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
      {touched.code && errors.code && (
        <p className={styles.error}>{errors.code}</p>
      )}
      {errorButton &&
        (!touched.password ||
          !touched.confirmPassword ||
          !touched.email ||
          errors.password ||
          errors.email ||
          errors.confirmPassword) && (
          <p className={styles.error}>{errorButton}</p>
        )}
      {!isLoading && error && <p className={styles.error}>网络错误</p>}
      {!isLoading &&
        code &&
        Object.prototype.hasOwnProperty.call(code, "errorMessage") && (
          <p className={styles.error}>{code.errorMessage}</p>
        )}

      <button
        className={styles.submit_button}
        disabled={isSubmitting}
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default BasicForm;
