import * as yup from "yup";

const emailRules = /^[a-zA-Z0-9_.+-]+@qq.com$/;

export const EmailLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("邮箱格式不正确")
    .required("必填")
    .matches(emailRules, "只接受qq邮箱注册"),
  password: yup.string().required("必填"),
});
export default EmailLoginSchema;
