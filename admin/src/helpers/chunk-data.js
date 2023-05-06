export default function chunkData(propertiesData) {
  const chunkSize = 6;
  return propertiesData.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
}
