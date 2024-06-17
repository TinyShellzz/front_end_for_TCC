import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const emailRules = /^[a-zA-Z0-9_.+-]+@qq.com$/;
const codeRules = /^[a-zA-Z0-9]{6}$/;

export const EmailSignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("邮箱格式不正确")
    .required("必填")
    .matches(emailRules, "只接受qq邮箱注册"),
  password: yup
    .string()
    .matches(passwordRules, { message: "密码至少6位，包含至少一个数组和字母" })
    .required("必填"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "密码不匹配")
    .required("必填"),
  code: yup.string().matches(codeRules, "验证码格式错误").required("必填"),
});
export default EmailSignUpSchema;
