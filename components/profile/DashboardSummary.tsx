import React from "react";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Item Deposit Value <span className='text-base font-medium text-gray-600'>(2001)</span> </h2>
        <p className="text-xl text-gray-600 font-medium">$4,536,477.54</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Items Stored</h2>
        <p className="text-xl text-gray-600 font-medium"> 153KG Of Alluvial Gold Bars</p>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Date Deposited</h2>
        <p className="text-xl text-gray-600 font-medium">13th July, 1979</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
