import styles from "./DocumentContent.module.css";
import useDocumentQuery from "../../hooks/useDocumentQuery";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import EditArea from "./EditArea";
import { config } from "../../config/config";

const DocumentContent = () => {
  const edit = useSelector((state: RootState) => state.edit.value);

  let { content_name } = useParams();
  let path = "introduce";
  if (content_name) {
    path = content_name;
  }

  const { data: doc, isError, refetch } = useDocumentQuery({ name: path });
  useEffect(() => {
    console.log("refetch");
    refetch();
  }, [path]);

  if (isError) {
    return <div className={styles.root}>网络错误</div>;
  }

  if (doc && doc.errorMessage) {
    return (
      <div className={styles.root}>
        {edit ? <EditArea></EditArea> : <div>{doc.errorMessage}</div>}
      </div>
    );
  }

  if (doc) {
    config.documentContent = doc.content;
    return (
      <div className={styles.root}>
        {edit ? (
          <EditArea></EditArea>
        ) : (
          <div>
            <Markdown>{config.documentContent}</Markdown>
          </div>
        )}
      </div>
    );
  }

  return <div className={styles.root}>加载中</div>;
};
export default DocumentContent;
