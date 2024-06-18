import styles from "./DocumentContent.module.css";

const DocumentContent = (Props: { name: string }) => {
  console.log(Props);

  console.log(Props.name);
  return <div className={styles.root}>{Props.name}</div>;
};
export default DocumentContent;
