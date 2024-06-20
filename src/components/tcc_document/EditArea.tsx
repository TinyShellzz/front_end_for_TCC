import { useFormik } from "formik";
import styles from "./EditArea.module.css";
import EditeAreaSchema from "../../schema/EditeAreaSchema";
import { config } from "../../config/config";
import { useDispatch } from "react-redux";
import { setEdit } from "../../store/doc_slice/EditDocumentSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditArea = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    // 等待 axios 执行完毕
    let data: any = await axios({
      method: "post",
      url: "http://localhost/backend/update_document",
      data: {
        name: config.content_name,
        content: values.content,
      },
      withCredentials: true, // 设置cookie
    }).then((res) => res.data);

    if (data && data.errorMessage != undefined) {
      console.log(data.errorMessage);
    } else {
      console.log(data);
      dispatch(setEdit(false)); // 状态切换到不编辑
      navigate("/document");
    }
  };
  const dispatch = useDispatch();

  const { values, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        content: config.documentContent,
      },
      validationSchema: EditeAreaSchema,
      onSubmit,
    });

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <textarea
          className={styles.textarea}
          value={values.content}
          id="content"
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        <div className={styles.button_box}>
          <button
            disabled={isSubmitting}
            type="button"
            onClick={() => dispatch(setEdit(false))}
          >
            退出编辑
          </button>
          <button disabled={isSubmitting} type="submit">
            提交
          </button>
        </div>
      </form>
    </>
  );
};
export default EditArea;
