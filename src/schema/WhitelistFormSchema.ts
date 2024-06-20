import * as yup from "yup";

const WhitelistFormSchema = yup.object().shape({
  keyword: yup.string(),
});
export default WhitelistFormSchema;
