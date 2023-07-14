import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import pdf from "../data/felix_chen_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <Document file={pdf}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
