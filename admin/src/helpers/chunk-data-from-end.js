export default function chunkDataFromEnd(data) {
  const chunkSize = 6;
  const reversedData = data.slice().reverse();
  return reversedData.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
}
