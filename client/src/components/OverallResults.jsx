import React from 'react'

const OverallResults = ({results}) => {
  return (
    <div className="bg-[#F5F6FA] shadow rounded-xl p-4 border border-gray-200">
      <h2 className="font-bold mb-3">Overall Results</h2>

      <div className="flex flex-col gap-8">
        {results.map((candidate, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>{candidate.name}</span>
              <span>{candidate.percent}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${candidate.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default OverallResults



