import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  LoadingSpinner,
  Page,
  Pagination,
  PropertyFilter,
  PropertyList,
  ViewModeToggle,
} from "../components";
import { filterProperties } from "../helpers";
import { useFetch } from "../hooks";

export default function Properties() {
  const [properties, isPropertyLoading, fetchPropertyError] = useFetch({
    url: "/api/properties",
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [propertiesData, setPropertiesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentMode, setCurrentMode] = useState("grid");
  const [page, setPage] = useState(1);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      page: newPage,
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (properties) {
      const propertiesAfterFilter = filterProperties(
        properties,
        Object.fromEntries([...searchParams])
      );
      setPropertiesData(propertiesAfterFilter);
      handleChangePage(1);
      return () => setIsButtonClicked(false);
    }
  }, [isButtonClicked, properties]);

  function chunkData() {
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

  const chunks = chunkData();

  const handleFilterParamsChange = (filterParams = {}) => {
    setSearchParams({ ...filterParams, page });
  };

  if (isPropertyLoading) return <LoadingSpinner />;
  return (
    <Page title="PROPERTIES" className="properties">
      <div className="properties__container">
        {chunks.length === 0 || (
          <ViewModeToggle
            currentMode={currentMode}
            changeModeHandler={(viewMode) => setCurrentMode(viewMode)}
          />
        )}
        <PropertyList view={currentMode} properties={chunks[page - 1]} />
        <Pagination
          pages={chunks.length}
          page={page}
          onChange={(pageNumber) => handleChangePage(pageNumber)}
        />
      </div>
      <PropertyFilter
        searchParams={searchParams}
        handleFilterParams={(filterParams) =>
          handleFilterParamsChange(filterParams)
        }
        handleIsButtonClicked={() => setIsButtonClicked(true)}
      />
    </Page>
  );
}
