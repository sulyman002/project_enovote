import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const ElectionMap = () => {
  return (
    <ComposableMap projection="geoMercator">
      <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/nigeria/nigeria-states.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              className="hover:fill-blue-300 cursor-pointer transition"
              style={{
                default: { fill: "#e2e8f0", outline: "none" },
                hover: { fill: "#3b82f6", outline: "none" },
                pressed: { fill: "#1e40af", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default ElectionMap;
