export default function reduceImages(data, field) {
  return data[field].reduce((acc, item, index) => {
    const obj = {};
    if (field === "photos") {
      obj.photo_url = item;
    } else {
      obj.floorplan_url = item;
      obj.floorplan_number = index + 1;
    }
    acc.push(obj);
    return acc;
  }, []);
}
