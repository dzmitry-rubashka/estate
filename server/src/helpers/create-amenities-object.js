module.exports = function createAmenitiesObject(amenities, prevChar, nextChar) {
  const amenitiesObject = {};
  Object.keys(amenities)
    .sort()
    .forEach(
      (element) =>
        (amenitiesObject[element.replaceAll(prevChar, nextChar)] =
          amenities[element])
    );
  return amenitiesObject;
};
