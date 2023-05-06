import "./floorplans__floorlist.css";

export default function FloorList({ floors, handleActiveFloor, activeFloor }) {
  const floorString = (floorNumber) =>
    Number(floorNumber) === 1 ? "Ground floor" : `Floor ${floorNumber - 1}`;

  return (
    <ul className="floorplans__floorlist">
      {floors.map((floor) => {
        return (
          <li
            key={Object.keys(floor)}
            className={`floorplans__floorlist__floor${
              Number(Object.keys(activeFloor)) === Number(Object.keys(floor))
                ? ` active_floor`
                : ""
            }`}
            onClick={() => handleActiveFloor(floor)}
          >
            {floorString(Object.keys(floor))}
          </li>
        );
      })}
    </ul>
  );
}
