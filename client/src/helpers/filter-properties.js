export default function filterProperties(data, filters = {}) {
  if (JSON.stringify(filters) === "{}") {
    return data;
  }

  let filteredProperties = [...data];
  function filterBy(prop) {
    filteredProperties = filteredProperties.filter(
      (item) => String(item[prop]) === String(filters[prop])
    );
  }

  function filterByRange(prop, min, max) {
    filteredProperties = filteredProperties.filter((item) => {
      const value = Number(item[prop]);
      if (!filters[min] && !filters[max]) {
        return item;
      }
      if (filters[min] && !filters[max]) {
        return value >= filters[min];
      }
      if (!filters[min] && filters[max]) {
        return value <= filters[max];
      }

      return value >= filters[min] && value <= filters[max];
    });
  }

  function filterByTitle() {
    if (!filters.title) {
      return;
    }
    const keywords = filters.title.split(" ");
    keywords.forEach((word) => {
      filteredProperties = filteredProperties.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
    });
  }

  const filtersArr = Object.keys(filters);

  filtersArr.forEach((item) => {
    if (
      item === "type" ||
      item === "offer" ||
      item === "bedrooms" ||
      item === "bathrooms"
    ) {
      filterBy(item);
    }
  });

  filterByRange("area", "minArea", "maxArea");
  filterByRange("price", "minPrice", "maxPrice");
  filterByTitle();

  return filteredProperties;
}
