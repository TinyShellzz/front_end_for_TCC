import * as yup from "yup";

const EditeAreaSchema = yup.object().shape({
  content: yup.string(),
});
export default EditeAreaSchema;
