"use client";

import { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { FileUpload } from "./components/FileUpload";
import { useMockFiles } from "./hooks/useMockFiles";
import { Loading } from "./components/Loading";
import { FileContent } from "./components/FileContent";

export default function Home() {
  const { files } = useMockFiles();

  const [fileLoaded, setFileLoaded] = useState(false);
  const [isProcessingFile, setIsProcessingFile] = useState(false);

  const [fileSelectedName, setSelectedFileName] = useState<any>(null);
  const [fileSelected, setSelectedFile] = useState<any>(null);

  const handleOnFileSubmit = (e: any) => {
    const selectedFileName = e.target.value.replace("C:\\fakepath\\", "");

    setIsProcessingFile(true);
    setSelectedFileName(selectedFileName);
  };

  useEffect(() => {
    if (isProcessingFile && fileSelectedName) {
      setTimeout(() => {
        const file = files.find(
          (file: any) => file.filePath === fileSelectedName
        );
        if (file) {
          setSelectedFile(file);
          setIsProcessingFile(false);
          setFileLoaded(true);
        }
      }, 10000);
    }
  }, [isProcessingFile, fileSelectedName]);

  const displayUploadArea = !fileLoaded && !isProcessingFile;

  const headerTitle = fileSelected ? fileSelected.displayName : null;

  return (
    <main className="h-full">
      <Dashboard headerTitle={headerTitle}>
        {isProcessingFile && <Loading />}

        {displayUploadArea && <FileUpload handleSubmit={handleOnFileSubmit} />}

        {fileLoaded && <FileContent content={fileSelected.fileContent} />}
      </Dashboard>
    </main>
  );
}
