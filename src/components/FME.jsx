import React, { useContext } from "react";
import { AccountContext } from "../context/context";

const FME = ({ open, setOpen }) => {
  const { period } = useContext(AccountContext);
  return (
    <div className="flex flex-col justify-center border border-black/40 p-1 rounded-md   !text-xs bg-[whitesmoke] shadow-md">
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center border-black/40 pt-1 italic pr-2">
        <p>FME Travel Delay </p>
        <p>-</p>
        <p className="font-semibold">25</p>
      </div>
      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>FME Process Time Actual</p>
        <p>-</p>
        <p className="font-semibold">2</p>
      </div>
      {period !== "Last Piece" && (
        <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
          <p>FME Process Time Average</p>
          <p>-</p>
          <p className="font-semibold ">3</p>
        </div>
      )}

      <div className="flex text-xs justify-between px-1 border-b pb-2 items-center pt-1 italic pr-2 border-black/40">
        <p>FME Gap Time Average</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
      <div className="flex text-xs justify-between px-1  pb-2 items-center pt-1 italic pr-2 ">
        <p>Role Change Delay</p>
        <p>-</p>
        <p className="font-semibold ">3</p>
      </div>
    </div>
  );
};

export default FME;
