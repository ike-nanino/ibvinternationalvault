import React from "react";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Total Value</h2>
        <p className="text-xl text-gray-600 font-medium">$1,250,000</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Items Stored</h2>
        <p className="text-xl text-gray-600 font-medium"> 18,715 Troy Oz of Gold</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Date Deposited</h2>
        <p className="text-xl text-gray-600 font-medium">10th May, 1999</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
