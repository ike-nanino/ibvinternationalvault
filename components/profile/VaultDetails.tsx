import React from "react";

const VaultDetails = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Vault Details</h2>
      <div className="flex justify-between">
          <p className="font-semibold">Total Gold</p>
          <p className="text-gray-500 font-normal text-base">18,715 troy oz</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal">Karat</p>
          <p className="text-gray-500 font-normal text-base">22.11K</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal">Density</p>
          <p className="text-gray-500 font-normal text-base">17.91 g/cm³</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal">Purity</p>
          <p className="text-gray-500 font-normal text-base">92.2%</p>
        </div>
        <div className="flex justify-between">
          <p className="font-normal">Weight in Air</p>
          <p className="text-gray-500 font-normal text-base">1,000 g</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="font-normal">Weight in Water</p>
          <p className="text-gray-500 font-normal text-base">209.94 g</p>
        </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold">Vault Serial Number</p>
          <p className="text-gray-500 font-normal text-base">IBV******</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Vault Size</p>
          <p className="text-gray-500 font-normal text-base">Extra Large</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Status</p>
          <p className="text-green-500 font-normal text-base">Active</p>
        </div>
       
      </div>
    </div>
  );
};

export default VaultDetails;
