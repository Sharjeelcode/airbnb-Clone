import React, { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { storage } from "../Firebase/config";
import useLocalDataStore from "../Hooks/localDataStore";
import { Spinner } from "@material-tailwind/react";

function UploadImages() {
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const { yourimage, yourfields } = useLocalDataStore();
  const [upload, setupload] = useState(false);

  const { handleImgFiles } = useLocalDataStore();
  useEffect(() => {
    handleImgFiles(files);
  }, [files]);

  const handleFile = async (e) => {
    setMessage("");
    let uploadedFile = e.target.files;

    for (let i = 0; i < uploadedFile.length; i++) {
      const fileType = uploadedFile[i]["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, uploadedFile[i]]);
      } else {
        setMessage("only images accepted");
        setupload(false);
      }
    }
  };
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  return (
    <>
      <div className="flex justify-center items-center px-3 pb-4">
        <div className="rounded-lg  shadow-md bg-gray-50 w-full">
          <div className="m-4">
            <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
              {message}
            </span>
            <div className="flex items-center justify-center w-full">
              <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-12 text-gray-400 group-hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFile}
                  className="opacity-0"
                  multiple="multiple"
                  name="files[]"
                />
              </label>
            </div>
            <div className="grid grid-cols-3 justify-items-center gap-2 mt-2">
              {files.map((file, key) => {
                return (
                  <div key={key} className="overflow-hidden relative">
                    <i
                      onClick={() => {
                        removeImage(file.name);
                      }}
                      className="mdi mdi-close absolute right-1 backdrop-blur-sm px-1  rounded-full hover:text-white cursor-pointer"
                    >
                      X
                    </i>
                    <img
                      className="h-20 w-20 rounded-md"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {upload && (
            <div className="flex justify-center mb-2">
              <span className="px-4">Uploading</span>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UploadImages;
