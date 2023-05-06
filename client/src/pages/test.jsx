import { useState } from "react";

import {
  Amenities,
  Button,
  ViewModeToggle,
  PropertyListItem,
  AgentInfo,
  Header,
  Pagination,
  Subtitle,
  FloorPlans,
  TextField,
  DropDownControl,
  LoadingSpinner,
} from "../components";

export default function Test() {
  const [currentMode, setCurrentMode] = useState("gridMode");
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("");
  const [inputText, setInputText] = useState({
    propertyTitle: "",
    bedrooms: "",
  });

  const handleInputChange = (key, text, reset = false) => {
    if (reset === true) {
      setInputText({ propertyTitle: "", bedrooms: "" });
    } else {
      setInputText({ ...inputText, ...{ [key]: text } });
    }
  };

  return (
    <main>
      <Header title="PROPERTIES" />
      Hello, World!
      <h2>Button Component</h2>
      <div>
        <Button value=">" />
      </div>
      <h2>ViewModeToggle Component</h2>
      <div>
        <ViewModeToggle
          currentMode={currentMode}
          changeModeHandler={(viewMode) => setCurrentMode(viewMode)}
        />
      </div>
      <h2>Subtitle</h2>
      <div>
        <Subtitle>floor plans</Subtitle>
      </div>
      <h2>PropertyInfo</h2>
      <h2>&lt;PropertyListItem /&gt;</h2>
      <PropertyListItem
        photoUrl="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        propertyType="apartment"
        offerType="sale"
        price="37 000 000"
        title="Covina Grand"
        location="Burbank, California"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum lectus a condimentum dignissim. Curabitur vel lacus eget nisi hendrerit euismod. Ut eget lorem non nunc rhoncus feugiat id ut ex. Aliquam egestas urna massa, ac cursus lectus sagittis id. Nunc finibus lectus diam, fringilla sollicitudin ante condimentum vitae. Nam nec augue tempus, lacinia nisi a, sollicitudin est. Vivamus fermentum dui et lorem aliquam, in convallis felis faucibus. Nam nec est a justo faucibus consequat in sed ante. Quisque tincidunt ullamcorper est, non tincidunt nunc convallis at. Praesent at mi magna. Proin dapibus hendrerit odio nec porta. Nulla eu vulputate nisl, sed malesuada mauris. Ut faucibus varius neque, ac iaculis nunc euismod sit amet."
        area="1320"
        bedrooms="4"
        bathrooms="2"
        view="list"
      />
      <br />
      <PropertyListItem
        photoUrl="https://cdn.vox-cdn.com/thumbor/FrnLQTpuAoAmp0GZRZctSSdkC04=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21905363/iStock_185930591.jpg"
        propertyType="townhouse"
        offerType="rent"
        price="3 500"
        title="Covina Grand"
        location="Burbank, California"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum lectus a condimentum dignissim. Curabitur vel lacus eget nisi hendrerit euismod. Ut eget lorem non nunc rhoncus feugiat id ut ex. Aliquam egestas urna massa, ac cursus lectus sagittis id. Nunc finibus lectus diam, fringilla sollicitudin ante condimentum vitae. Nam nec augue tempus, lacinia nisi a, sollicitudin est. Vivamus fermentum dui et lorem aliquam, in convallis felis faucibus. Nam nec est a justo faucibus consequat in sed ante. Quisque tincidunt ullamcorper est, non tincidunt nunc convallis at. Praesent at mi magna. Proin dapibus hendrerit odio nec porta. Nulla eu vulputate nisl, sed malesuada mauris. Ut faucibus varius neque, ac iaculis nunc euismod sit amet."
        area="1320"
        bedrooms="4"
        bathrooms="2"
        view="grid"
      />
      <h2>Agent Info Component</h2>
      <AgentInfo
        agentPhotoUrl=""
        agentName="Adam Conover"
        agentLocation="Los Angeles, California"
        agentEmail="adam@example.com"
        agentPhone="+0 123-456-7890"
        PropertyID="123456"
      />
      <h2>&lt;Amenities /&gt;</h2>
      <Amenities
        amenities={{
          Balcony: true,
          "Air conditioning": true,
          "Alarm clock": false,
          "Clothes Dryer": false,
          "Coffee Maker": false,
          Dishwasher: false,
          "Dishes & Utensils": false,
          Fireplace: true,
          "Deck / Patio": true,
          Freezer: true,
          Garage: false,
          Heating: true,
          "Ice Maker": false,
          Internet: false,
          Microwave: true,
          "Outdoor Grill": false,
          Oven: false,
          "Parking On Street": false,
          "Water Cooler": false,
          "Washing Machine": true,
          Toaster: false,
          Telephone: true,
          Stove: true,
          "Sofa Bed": true,
          "Security System": true,
          "Satellite / Cable TV": false,
          Refrigerator: true,
        }}
      />
      <h2>Property List</h2>
      <h2>Pagination Component</h2>
      <Pagination pages={15} page={page} onChange={(page) => setPage(page)} />
      <h2>&lt;Floorplans /&gt;</h2>
      <FloorPlans
        floors={[
          {
            title: "Ground Floor",
            url: "https://s3-alpha-sig.figma.com/img/6cd3/e7bf/b47df96b36c0261454f392ea6082a056?Expires=1671408000&Signature=NOnshjzigCYot7KNXOyVymeSVUeNVECTneUe4tooidGsbLdghZ8-99vwxu5e2M03Mw2-R52qrEZAh~RP4FxxtDXZB1S82JQGWgbYIwWbqtCIReahihuKEh3up-A1dU3fyXGGpJD4006PJq0XsfNlIFh3-5tcb0um2I73~pSpnnwTjowU~teW746W1eZXOb~y92rmfAFxrRo6gfZ9mvaWVh~fyfS0p8gZnJKdWSwiurQn6VFTGDR0Yu02RBU29O7KQBNkcobff-dN32vx6Q6B4d3dAOftV4Zgc3rpktYPOhzqnw2wDonobMz0CjtSrTwAU-sCn8F5RkHydDqfEP58eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          },
          {
            title: "1st Floor",
            url: "https://www.houseplanshelper.com/images/how-to-read-floor-plans-full-floor-plan.jpg",
          },
        ]}
      />
      <h2>&lt;TextField /&gt;</h2>
      <div style={{ display: "flex", width: `${600}px`, columnGap: `${16}px` }}>
        <TextField
          id="textfield"
          placeholder="Property Title"
          inputText={inputText.propertyTitle}
          onChange={(text) => handleInputChange("propertyTitle", text)}
        />
        <TextField
          id="textfield"
          placeholder="Bedrooms"
          inputText={inputText.bedrooms}
          onChange={(text) => handleInputChange("bedrooms", text)}
        />
      </div>
      <TextField
        id="textfield"
        placeholder="Property Title"
        inputText={inputText.propertyTitle}
        onChange={(text) => handleInputChange("propertyTitle", text)}
      />
      <TextField
        id="textfield"
        placeholder="Bedrooms"
        inputText={inputText.bedrooms}
        onChange={(text) => handleInputChange("bedrooms", text)}
      />
      <Button value="RESET" onClick={() => handleInputChange("", "", true)} />
      <h2>DROPDOWN</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: `${600}px`,
          rowGap: `${16}px`,
        }}
      >
        <DropDownControl
          onChange={(e) => setOption(e.target.value)}
          data={["townhouse", "apartment", "house", "business"]}
          name="houses"
          id="houses"
          placeholder="Type"
        />
        <DropDownControl
          onChange={(e) => setOption(e.target.value)}
          data={["For rent", "For sale"]}
          name="offerType"
          id="offerType"
          placeholder="Offer Type"
        />
      </div>
      <div
        style={{
          display: "flex",
          width: `${300}px`,
          columnGap: `${16}px`,
          rowGap: `${16}px`,
        }}
      >
        <DropDownControl
          onChange={(e) => setOption(e.target.value)}
          data={["25", "50"]}
          name="minArea"
          id="minArea"
          placeholder="Min Area"
        />
        <DropDownControl
          onChange={(e) => setOption(e.target.value)}
          data={["100", "150"]}
          name="maxArea"
          id="maxArea"
          placeholder="Max Area"
        />
      </div>
      <LoadingSpinner />
    </main>
  );
}
