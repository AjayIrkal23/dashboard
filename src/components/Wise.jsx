import React, { useEffect } from "react";

const Wise = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-2">
        <p>FCE Slab Count</p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>FCE Discharge Delay</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>FCE Extractor Delay</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
      <div className="flex text-xs justify-between px-1 pb-1 items-center pt-1 italic pr-2 b ">
        <p>FCE Slip Delay</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
    </div>
  );
};

export default Wise;
