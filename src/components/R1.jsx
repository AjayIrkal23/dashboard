import React, { useContext } from "react";
import { AccountContext } from "../context/context";

const R1 = ({ open, setOpen }) => {
  const { period } = useContext(AccountContext);
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-2">
        <p>R1 Gap Time Actual </p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>R1 Process Time Actual</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
      {period !== "Last Piece" && (
        <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
          <p>R1 Process Time Average</p>
          <p>-</p>
          <p className="font-semibold ">3</p>
        </div>
      )}

      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>R1 Travel Delay</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
      <div className="flex text-xs justify-between px-1 pb-1 items-center pt-1 italic pr-2 b ">
        <p>R1 Process Delay</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
    </div>
  );
};

export default R1;
