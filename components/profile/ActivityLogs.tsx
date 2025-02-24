import React from "react";

const ActivityLogs = () => {
  const logs = [
    { date: "10th May, 1999", action: "Deposited One Trunk Box Of" + (window.innerWidth >= 1024 ? " Gold Bars" : "...") },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md">

<h2 className="text-base lg:text-lg font-semibold mb-2">Activity Logs</h2>
      <ul className="space-y-2 pb-10">
        {logs.map((log, index) => (
          <li key={index} className="flex justify-between ">
            <span className='text-sm lg:text-base'>{log.date}</span>
            <span className='text-green-500 text-sm lg:text-base'>{log.action}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h1 className="text-base lg:text-lg font-semibold mb-4">Invoices</h1>

        <div className="flex justify-between">
          <h4 className="text-sm lg:text-base font-semibold">Invoice No. </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">IBV/INV589/1999</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Amount Paid </h4>
          <p className="text-green-500 font-bold text-base">$47,000</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Month </h4>
          <p className="text-gray-400 font-normal text-base">$227</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Year </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$2,724</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Duration (May, 1999 - May, 2017) </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$46,308</p>
        </div>
        <div className="flex justify-between pb-9">
          <h4 className='text-sm lg:text-base'> Balance </h4>
          <p className="text-green-500 font-bold text-sm lg:text-base">$692</p>
        </div>


        <div className="flex justify-between">
          <h4 className="text-sm lg:text-base font-semibold">Invoice No. </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">IBV/INV.90542/2017</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Amount Paid </h4>
          <p className="text-green-500 font-bold text-sm lg:text-base">$692</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Month </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$227</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Year </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$2,724</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Duration (May, 2017 - Till Date) </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$21,792</p>
        </div>
        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'> Balance </h4>
          <p className="text-red-500 font-bold text-sm lg:text-base">$21,100</p>
        </div>
      </div>
    
    </div>
  );
};

export default ActivityLogs;
