import React from "react";

const Three = ({ open, setOpen }) => {
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-1 ">
        <p>3 + 3 Passes Count</p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1  pb-1 items-center pt-1 italic pr-2 ">
        <p>3 + 5 Passes Count</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
    </div>
  );
};

export default Three;
