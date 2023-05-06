export default function setPages(page, initIndex, endIndex, onChange) {
  const arr = [];
  for (let i = initIndex; i < endIndex; i++) {
    const pageIndex = i + 1;
    arr.push({
      onChange: () => onChange(pageIndex),
      page: pageIndex,
      current: pageIndex === page,
    });
  }
  return arr;
}
