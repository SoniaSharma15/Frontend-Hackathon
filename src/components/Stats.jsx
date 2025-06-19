import React from "react";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { ArrowRightCircleIcon, ArrowUp } from "lucide-react";

const Stats = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div className="flex flex-row gap-[20vw] m-5 justify-center items-center">
      <div>
        <div className="flex flex-row mx-3 gap-20">
          <h2>Managed portfolio carbon footprint</h2>
          <p>CO<sub>2</sub></p>
        </div>
        <div className="flex flex-row row-cols-2 gap-20 px-5">
           <div><h1 className="text-6xl">35,545</h1></div> 
            <div className="pl-10 flex flex-col mt-4">
              <p>from 2019</p>
              <p className=" flex items-center">
              <span>
                <ArrowUp size={24} color="black" /> </span> <span className="text-lg"> 16%</span>
              </p>
            </div>
          </div>
        <ProgressBar progress={50} year={2022} value={40044} />
        <ProgressBar progress={90} year={2021} value={4004} />
        <ProgressBar progress={80} year={2022} value={4004} />
        <ProgressBar progress={30} year={2021} value={4004} />
        <h2 className="mt-3 flex mx-2">
          See full breakdown of Carbon Footprint{" "}
          <ArrowRightCircleIcon className="mx-2" />
        </h2>
      </div>
    </div>
  );
};

export default Stats;
