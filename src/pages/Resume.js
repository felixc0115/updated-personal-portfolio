import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdf from "../data/felix_chen_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

console.log(pdf);

const Resume = () => {
  return (
    <div>
      <Document file={pdf}>
        <Page pageNumber="1" />
      </Document>
    </div>
  );
};

export default Resume;
