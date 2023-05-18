import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PMC from "../components/PMC";
import Three from "../components/Three";
import Wise from "../components/Wise";
import SSP from "../components/SSP";
import R1 from "../components/R1";
import R2 from "../components/R2";
import FM from "../components/FM";
import FME from "../components/FME";

import { AccountContext } from "../context/context";
import Delays from "../components/Delays";
import GapTime from "../components/GapTime";
import Process from "../components/Process";
import FRC from "../components/FRC";
import BottleNeck from "../components/BottleNeck";
import Calender from "../components/Calender";

const HomePage = () => {
  const date = new Date().toLocaleDateString();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [title, setTitle] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [value, onChange] = useState(new Date());
  const { period, setPeriod } = useContext(AccountContext);
  const handleChange = (e) => {
    setPeriod(e);
    if (e === "Custom") {
      setOpen5(true);
    }
  };

  return (
    <div className="bg relative min-h-screen  max-h-[1080px] ">
      <div className="sticky top-[0%] bg-gray-200 shadow-md h-[50px]">
        <div className="flex justify-center  items-center h-full">
          <div>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png"
              alt=""
              className="h-8 w-20  "
            />
          </div>
          <div className="flex absolute right-6 font-semibold text-xs gap-3 justify-end  items-center justify-self-end">
            <div>
              <p className=" italic text-gray-700">Date</p>
            </div>
            <div>
              <p>-</p>
            </div>
            <div>
              <p>{date.toString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-[33%] px-4 flex gap-6  !text-xs justify-center">
        <div className=" w-[200px] ">
          <PMC open={open} setOpen={setOpen} setTitle={setTitle} />
        </div>
        <div className="    w-[200px]   ">
          <Three open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <Wise open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <SSP open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <R1 open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <R2 open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <FM open={open} setOpen={setOpen} />
        </div>
        <div className=" w-[250px]">
          <FME open={open} setOpen={setOpen} />
        </div>
      </div>

      <div className="sticky top-[74%] ml-6   flex left-5 text-center gap-24">
        <div>
          <p className="text-gray-700 text-sm italic pb-1">
            Please Select An Option
          </p>
          <div className="  border flex  justify-center border-black cursor-pointer bg-white shadow-md">
            <div
              onClick={() => handleChange("Last Piece")}
              className={`${
                period === "Last Piece" && "bg-blue-500 !text-white"
              } hover:bg-blue-500  p-3 italic font-semibold  hover:text-white text-sm border-r border-black`}
            >
              <p>Last Coil</p>
            </div>
            <div
              onClick={() => handleChange("Last 5 Piece")}
              className={`${
                period === "Last 5 Piece" && " bg-blue-500 !text-white"
              } hover:bg-blue-500  p-3 italic font-semibold hover:text-white  text-sm border-r border-black`}
            >
              <p>Last 5 Coils</p>
            </div>
            <div
              onClick={() => handleChange("Last Hour")}
              className={`${
                period === "Last Hour" && " bg-blue-500 !text-white"
              } hover:bg-blue-500 hover:text-white  p-3 italic font-semibold border-r border-black  text-sm `}
            >
              <p>Last Hour</p>
            </div>
            <div
              onClick={() => handleChange("Current Shift")}
              className={`${
                period === "Current Shift" && "bg-blue-500 !text-white"
              } hover:bg-blue-500  p-3 italic font-semibold  hover:text-white text-sm border-r border-black`}
            >
              <p>Last Shift</p>
            </div>
            <div
              onClick={() => handleChange("Last Day")}
              className={`${
                period === "Last Day" && " bg-blue-500 !text-white"
              } hover:bg-blue-500 hover:text-white  p-3 italic font-semibold border-r border-black  text-sm `}
            >
              <p>Last Day</p>
            </div>
            <div
              onClick={() => handleChange("Custom")}
              className={`${
                period === "Custom" && " bg-blue-500 !text-white"
              } hover:bg-blue-500 hover:text-white  p-3 italic font-semibold   text-sm `}
            >
              <p>Custom Date</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-gray-700 text-sm italic pb-1">Visual Graphs</p>
          <div className="  flex  justify-center border-black cursor-pointer  gap-3">
            <div
              onClick={(e) => setOpen(true)}
              className={`
               hover:bg-blue-500 bg-blue-500 text-white hover:scale-105 transition-all duration-200 ease-in-out p-3 italic font-semibold bg-blue shadow-md rounded-md hover:text-white text-sm  `}
            >
              <p>Delay</p>
            </div>
            <div
              onClick={(e) => setOpen1(true)}
              className={`
              hover:bg-blue-500 bg-blue-500 text-white hover:scale-105 transition-all duration-200 ease-in-out p-3 italic font-semibold bg-blue shadow-md rounded-md hover:text-white text-sm  `}
            >
              <p>Gap Time</p>
            </div>
            <div
              onClick={(e) => setOpen2(true)}
              className={`
             hover:bg-blue-500 bg-blue-500 text-white hover:scale-105 transition-all duration-200 ease-in-out p-3 italic font-semibold bg-blue shadow-md rounded-md hover:text-white text-sm  `}
            >
              <p>Process Time</p>
            </div>
            <div
              className={`
             hover:bg-blue-500 bg-blue-500 text-white hover:scale-105 transition-all duration-200 ease-in-out p-3 italic font-semibold bg-blue shadow-md rounded-md hover:text-white text-sm  `}
            >
              <p>FRC </p>
            </div>
            <div
              onClick={(e) => setOpen4(true)}
              className={`
            hover:bg-blue-500 bg-blue-500 text-white hover:scale-105 transition-all duration-200 ease-in-out p-3 italic font-semibold bg-blue shadow-md rounded-md hover:text-white text-sm  `}
            >
              <p>BNF1 Gap Time</p>
            </div>
          </div>
        </div>
      </div>
      <Delays open={open} setOpen={setOpen} />
      <GapTime open={open1} setOpen={setOpen1} />
      <Process open={open2} setOpen={setOpen2} />
      <FRC open={open3} setOpen={setOpen3} />
      <BottleNeck open={open4} setOpen={setOpen4} />
      <Calender
        open={open5}
        setOpen={setOpen5}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default HomePage;
