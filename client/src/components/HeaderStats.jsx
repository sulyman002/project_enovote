import React from "react";

const HeaderStats = ({stats}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F6FA] shadow space-y-3 rounded-xl p-4 border border-gray-100"
        >
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>

          <p className="text-2xl font-bold mt-1">{item.value}</p>

          {item.sub && (
            <p className="text-green-600 text-xs mt-1 font-medium">{item.sub}</p>
          )}

          {item.party && (
            <p className="text-blue-600 text-xs mt-1 font-medium">
              {item.party}
            </p>
          )}
        </div>
      ))}
    </div>
);
};

export default HeaderStats;


