import React from "react";

const ActivityLogs = () => {
  const logs = [
    { date: "13th July, 1979", action: "Deposited 153KG Of Alluvial" + (window.innerWidth >= 1024 ? " Gold Bars" : "...") },
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
          <p className="text-gray-400 font-normal text-sm lg:text-base">IBV/INV689/1979</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Amount Paid </h4>
          <p className="text-green-500 font-bold text-base">$23,760</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Month </h4>
          <p className="text-gray-400 font-normal text-base">$90</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Year </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$1,080</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Duration (July, 1979 - July, 2001) </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$23,760</p>
        </div>
        <div className="flex justify-between pb-9">
          <h4 className='text-sm lg:text-base'> Balance </h4>
          <p className="text-black font-bold text-sm lg:text-base">-</p>
        </div>


        <div className="flex justify-between">
          <h4 className="text-sm lg:text-base font-semibold">Invoice No. </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">IBV/INV.96542/2001</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Amount Paid </h4>
          <p className="text-black font-bold text-sm lg:text-base">-</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Month </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$90</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Deposit Fee per Year </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$1,080</p>
        </div>

        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'>Duration (July, 2001 - July 2025) </h4>
          <p className="text-gray-400 font-normal text-sm lg:text-base">$25,920</p>
        </div>
        <div className="flex justify-between">
          <h4 className='text-sm lg:text-base'> Balance </h4>
          <p className="text-red-500 font-bold text-sm lg:text-base">$25,920</p>
        </div>
      </div>
    
    </div>
  );
};

export default ActivityLogs;
