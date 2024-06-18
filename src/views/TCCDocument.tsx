import NavbarDocument from "../components/tcc_document/NavbarDocument";
import DocumentComponent from "../components/tcc_document/DocumentComponent";

export const TCCDocument = (Props: { name: string }) => {
  return (
    <div>
      <NavbarDocument></NavbarDocument>
      <DocumentComponent name={Props.name} />
    </div>
  );
};

export default TCCDocument;
