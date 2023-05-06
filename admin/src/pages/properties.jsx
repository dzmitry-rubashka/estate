import { useEffect, useState, useContext } from "react";

import { AdminContext } from "..";
import {
  Page,
  PropertyList,
  Subtitle,
  Pagination,
  LoadingSpinner,
  NewProperty,
} from "../components";
import { chunkData, reduceImages } from "../helpers";
import { useFetch } from "../hooks";

function PropertyError({ error }) {
  return (
    <Page className="property" title="AGENT DASHBOARD">
      {error}
    </Page>
  );
}

export default function Properties() {
  const [properties, isPropLoading, propError] = useFetch({
    url: "/api/properties",
  });
  const { config } = useContext(AdminContext);
  const [propertiesData, setPropertiesData] = useState([]);
  const [page, setPage] = useState(1);

  async function handleCreateProperty(propData) {
    try {
      const newData = { ...propData };
      newData.agent_id = config.agent.id;
      newData.photos = {};
      newData.floorplans = {};

      newData.photos = reduceImages(propData, "photos");

      newData.floorplans = reduceImages(propData, "floorplans");

      const response = await fetch("/api/properties/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      window.location.reload();

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  const handleChangePage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const agent = config?.agent;

  useEffect(() => {
    if (!agent) {
      return;
    }
    if (properties) {
      const filteringProperties = properties.filter(
        (property) => property.agent_id === agent.id
      );
      setPropertiesData(filteringProperties);
      handleChangePage(1);
    }
  }, [properties]);

  if (isPropLoading) return <LoadingSpinner />;
  if (propError) return <PropertyError error={`${propError}`} />;
  if (config.status !== "authenticated")
    return <PropertyError error="Please login as agent to continue" />;

  const chunks = chunkData(propertiesData);

  const handleDelete = (id) => {
    fetch(`/api/properties/${id}`, { method: "delete" });
    setPropertiesData((data) => {
      const newData = [...data];
      return newData.filter((item) => item.id !== id);
    });
  };

  async function handleEdit(id, dataForm) {
    try {
      const response = await fetch(`/api/properties/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(dataForm),
        headers: { "Content-Type": "application/json" },
      });
      window.location.reload();
      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  return (
    <Page title="PROPERTIES" className="properties" config={config}>
      <div className="properties__container">
        <Subtitle>PROPERTIES</Subtitle>
        <NewProperty handleCreateProperty={handleCreateProperty} />
        <PropertyList
          properties={chunks[page - 1]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <Pagination
          pages={chunks.length}
          page={page}
          onChange={(pageNumber) => handleChangePage(pageNumber)}
        />
      </div>
    </Page>
  );
}
