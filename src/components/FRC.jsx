import { Modal } from "@mui/material";
import { useState } from "react";
import Chart from "react-apexcharts";

const FRC = ({ open, setOpen }) => {
  const [open1, setOpen1] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  var options = {
    series: [
      {
        data: [13, 84, 42, 44],
      },
    ],
    chart: {
      height: 350,
      events: {
        click: function (chart, w, e) {
          setOpen1(true);
        },
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: true,
    },

    legend: {
      show: false,
    },
    title: {
      text: "Gap Time Visualization",
    },
    xaxis: {
      categories: [
        " SSP Gap time",
        "R1 Gap time",
        "R2 Gap time",
        "FM Gap time",
      ],
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
  };

  var options1 = {
    series: [
      {
        data: [7, 4],
      },
    ],
    chart: {
      height: 350,
      events: {
        click: function (chart, w, e) {
          setOpen1(true);
        },
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: true,
    },

    legend: {
      show: false,
    },
    title: {
      text: "2-5 or >5 Mins Delay Analysis",
    },
    xaxis: {
      categories: ["Delay 2 - 5 Mins", "Delay >5 Mins"],
      labels: {
        style: {
          fontSize: "10px",
        },
      },
    },
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
        <div className="absolute min-w-[60vw] bg-white outline-none top-[5%] left-[50%] -translate-x-[50%] py-4 flex">
          <div className=" w-full h-full">
            <Chart options={options} series={options.series} type="bar" />
          </div>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="absolute min-w-[60vw] bg-white outline-none top-[5%] left-[50%] -translate-x-[50%] py-4 flex">
              <div className="w-full h-full">
                <Chart options={options1} series={options1.series} type="bar" />
              </div>
            </div>
          </Modal>
        </div>
      </Modal>
    </>
  );
};

export default FRC;
