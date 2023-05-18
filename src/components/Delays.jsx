import { Modal } from "@mui/material";
import { useState } from "react";
import Chart from "react-apexcharts";

const Delays = ({ open, setOpen }) => {
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
        data: [13, 84, 42, 44, 0, 0, 12, 16],
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
      text: "Delay Visualization",
    },
    xaxis: {
      categories: [
        "FCEWISE Discharge Delay",
        "FCEWISE  Extractor Delay",
        "FCE slip delay",
        "R1 Travel delay",
        "R1 process delay",
        "R2 Travel delay",
        "R2 Process delay",
        "FME Travel delay",
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
      text: "Rocking Analysis",
    },
    xaxis: {
      categories: [
        "Manual Rock Count",
        "Auto Rock Count",
        "Manual Rock Time",
        "Auto Rock Time",
      ],
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

export default Delays;
