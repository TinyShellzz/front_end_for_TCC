import { useFormik } from "formik";
import EmailLoginSchema from "../schema/EmailLoginSchema";

export const EmailLoginForm = () => {
  const onSubmit = () => {};

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
      <label htmlFor="email"></label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="邮箱"
        type="text"
      ></input>
      <label htmlFor="password"></label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="密码"
        type="password"
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default EmailLoginForm;
