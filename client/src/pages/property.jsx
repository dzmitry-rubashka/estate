import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  AgentInfo,
  Amenities,
  FloorPlans,
  LoadingSpinner,
  Page,
  PropertyInfo,
  Subtitle,
} from "../components";
import { isValidEmail, isValidPhone } from "../helpers";
import { useFetch } from "../hooks";

export default function Property() {
  const { id } = useParams();
  const [propertyData] = useFetch({ url: `/api/properties/${id}` });
  const [formData, setFormData] = useState({
    userEmail: "",
    userPhone: "",
    userName: "",
    message: "",
  });
  const [isSendingMail, setIsSendingMail] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSendingMail((prev) => !prev);
      if (
        Object.values(formData).some((item) => item.replaceAll(" ", "") === "")
      )
        return;
      if (!isValidPhone(formData.userPhone)) return;
      if (!isValidEmail(formData.userEmail)) return;

      const message = {
        ...formData,
        agentEmail: propertyData.property.Agent.email,
        propertyID: propertyData.property.id,
        propertyTitle: propertyData.property.title,
      };

      const response = await fetch(
        `/api/properties/${propertyData.property.id}/messages`,
        {
          method: "POST",
          body: JSON.stringify(message),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        setFormData({
          userEmail: "",
          userPhone: "",
          userName: "",
          message: "Something goes wrong!",
        });
      } else {
        setFormData({
          userEmail: "",
          userPhone: "",
          userName: "",
          message: "Thank you for your message!",
        });
      }
    } catch (err) {
      throw err;
    } finally {
      setIsSendingMail((prev) => !prev);
    }
  };

  const handleContactFormInputs = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  if (!propertyData) return <LoadingSpinner />;

  return (
    <Page className="property" title={propertyData.property.title}>
      <PropertyInfo {...propertyData.property} />

      <Subtitle>floor plans</Subtitle>
      <FloorPlans floors={propertyData.property.floorplans} />

      <Subtitle>amenities</Subtitle>
      <Amenities amenities={propertyData.property.amenities} />

      <Subtitle>agent information</Subtitle>
      <AgentInfo
        {...propertyData.property.Agent}
        propertyId={propertyData.property.id}
        handleContactFormInputs={handleContactFormInputs}
        formData={formData}
        handleSubmit={handleSubmit}
        isSendingMail={isSendingMail}
      />
    </Page>
  );
}
