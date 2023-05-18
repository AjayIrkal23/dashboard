import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import { AccountContext } from "../context/context";

const PMC = ({ open, setOpen, setTitle }) => {
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-2 ">
        <p>PMA Count</p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>Pacing Offset (+)</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
      <div className="flex text-xs justify-between px-1  items-center pt-1 italic pb-1 pr-2 border-black/40">
        <p>Pacing Offset (-)</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
    </div>
  );
};

export default PMC;
