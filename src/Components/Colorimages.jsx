import React, { useState } from "react";
import { FaImages } from "react-icons/fa";
function Colorimages() {
  const [userImage, setUserImage] = useState(null);
  const [userImageurl, setUserImageurl] = useState(null);
  const [inp, setinp] = useState(null);

  console.log(inp);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      
      const localUrl = URL.createObjectURL(file);
      setUserImage(localUrl);

    }
  };

  return (
    <div className=" h-full w-full">
      {userImage && userImageurl == null ? (
        <div className="w-full h-[100%] bg-red-200 rounded-lg">
          <div className=" w-full h-[60%] mb-3 rounded-lg flex justify-center items-end gap-3 ">
            <label
              className="bg-green-200 border font-bold rounded-lg text-center py-10 text-2xl drop-shadow-2xl text-zinc-400 px-10 "
              htmlFor="fileinput"
            >
              <div className="flex items-center gap-2">
                <p>choose image</p>
                <p>
                  <FaImages />
                </p>
              </div>
            </label>
            <input
              type="file"
              id="fileinput"
              placeholder="File location "
              onChange={handleFileChange}
              className="hidden"
              // accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <input
              type="url"
              placeholder="image url"
              onChange={(e) => setinp(e.target.value)}
              className="bg-green-200 border font-bold rounded-lg text-center py-10 text-2xl drop-shadow-2xl text-zinc-500"
            />
          </div>
          <div className="flex w-full items-center justify-center ">
            <button
              className="border rounded-lg px-6 bg-black text-white py-2 "
              onClick={() => setUserImageurl(inp)}
            >
              submit
            </button>
          </div>
        </div>
      ) : (
        <div className=" w-full h-[100%] rounded-lg flex justify-center items-center gap-3 ">
          <img
            src={userImageurl}
            alt="not found"
            className="w-full  h-[100%] rounded-lg "
          />
        </div>
      )}
    </div>
  );
}

export default Colorimages;
