import { Modal } from "@mui/material";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
const Calender = ({ open, setOpen, onChange, value }) => {
  const [open1, setOpen1] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute  bg-white outline-none top-[5%] left-[50%] -translate-x-[50%] py-4 px-12 rounded-md">
          <h1 className="text-gray-700 italic font-semibold  pb-1 text-center">
            Please Select Date
          </h1>
          <Calendar onChange={onChange} selectRange value={value} />
          <div
            className="my-4 bg-blue-500 shadow-md text-center text-white py-1.5 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={handleClose}
          >
            <p>Done</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Calender;
