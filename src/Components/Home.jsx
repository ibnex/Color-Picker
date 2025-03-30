import React, { useState } from "react";
import Sampler from "./Sampler";
import GoolgleColor from "./GoolgleColor";
import Colorimages from "./Colorimages";
import Spectrum from "./Spectrum";

function Home() {
  const [tog, setTog] = useState(1);
  const [Color, SetColor] = useState(0);

  const sampler = () => {
    setTog(1);
  };
  const Specrum = () => {
    setTog(2);
  };
  const image = () => {
    setTog(3);
  };
  const Googlecolor = () => {
    setTog(4);
  };
  return (
    <div className=" w-screen h-screen flex justify-center  ">
      <div className="mt-32 w-[90vw] h-[90vh] justify-items-center ">
        <div className="m-3 flex gap-4 ">
          <h1 className="text-4xl pr-3 font-serif">Pick Color</h1>
          <button className="border rounded-sm px-3 py-1" onClick={sampler}>
            Sampler
          </button>
          <button className="border rounded-sm px-3 py-1" onClick={Specrum}>
            Spectrum
          </button>
          <button className="border rounded-sm px-3 py-1" onClick={image}>
            image
          </button>
          <button className="border rounded-sm px-3 py-1" onClick={Googlecolor}>
            Google color
          </button>
        </div>
        <div className="w-[60%] h-[60%] rounded-lg  shadow-2xl border-2 p-1">
          {tog == 1 ? <Sampler /> : null}
          {tog == 2 ? <Spectrum /> : null}
          {tog == 3 ? <Colorimages /> : null}
          {tog == 4 ? <GoolgleColor /> : null}
        </div>

        <div className="w-[60%]   mt-1 p-2 space-y-2 border-2 rounded-lg">
          <div className="flex justify-between px-4 rounded-lg  shadow-2xl">
            <div className="flex gap-1 items-center p-2 rounded-lg  shadow-2xl">
              <div className="flex items-center px-3 py-1 border gap-1">
                <h1>pixel color</h1>
                <h1>{Color}</h1>
              </div>
              <h1 className="px-3 py-1 border w-52">no pixel sselected </h1>
            </div>
            <div className="flex gap-1 items-center p-2 rounded-lg  shadow-2xl">
              <h1 className="px-3 py-1 border">pixel x</h1>
              <h1 className="px-3 py-1 border w-40">number</h1>
            </div>
          </div>

          <div className="flex justify-between px-4 rounded-lg  shadow-2xl">
            <div className="flex gap-1 items-center p-2 rounded-lg  shadow-2xl">
              <h1 className="px-3 py-1 border">magnifier</h1>
              <h1 className="px-3 py-1 border">zoom in </h1>
              <h1 className="px-3 py-1 border">zoom out</h1>
            </div>
            <div className="flex gap-1 items-center p-2 rounded-lg  shadow-2xl">
              <h1 className="px-3 py-1 border">pixel y</h1>
              <h1 className="px-3 py-1 border w-40">number</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
