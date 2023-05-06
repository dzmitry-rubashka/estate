import { useState } from "react";

import FloorList from "./floorplans__floorlist/floorplans__floorlist.jsx";

import "./floorplans.css";

export default function FloorPlans({ floors }) {
  const formatedFloors = floors.map((floor) => {
    return { [floor.floorplan_number]: floor.floorplan_url };
  });
  const [activeFloor, setActiveFloor] = useState(formatedFloors[0]);

  return (
    <div className="floorplans__container">
      <FloorList
        floors={formatedFloors}
        handleActiveFloor={(floor) => setActiveFloor(floor)}
        activeFloor={activeFloor}
      />
      <img
        src={Object.values(activeFloor)}
        alt={Object.keys(activeFloor)}
        className="floorplans__floor_picture"
      />
    </div>
  );
}
