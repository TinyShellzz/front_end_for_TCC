import { useFormik } from "formik";
import EmailLoginSchema from "../schema/EmailLoginSchema";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/slice/LoginSlice";

const EmailLoginForm = () => {
  const dispatch = useDispatch();

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
      dispatch(setLogin()); // 状态切换到login
      // navigate("/"); // 回到主页
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">邮箱</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        placeholder="邮箱"
        type="text"
      ></input>
      {touched.email && errors.email && <p>{errors.email}</p>}

      <label htmlFor="password">密码</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        placeholder="密码"
        type="password"
      ></input>
      <button disabled={isSubmitting} type="submit">
        submit
      </button>
    </form>
  );
};

export default EmailLoginForm;
