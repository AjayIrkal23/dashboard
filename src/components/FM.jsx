import React from "react";

const FM = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-2">
        <p>FM Rocking Man Count </p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>FM Rocking Auto Count</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>Manual Rock Time </p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
      <div className="flex text-xs justify-between px-1  pb-2 items-center pt-1 italic pr-2 ">
        <p>Manual Rock Time </p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
    </div>
  );
};

export default FM;
