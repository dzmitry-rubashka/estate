import { useState } from "react";

import GalleryListImages from "./gallery__list-images/gallery__list-images.jsx";
import MainImage from "./gallery__main-image/gallery__main-image.jsx";

import "./gallery.css";

export default function Gallery({
  arrayImages,
  propertyType,
  offerType,
  price,
}) {
  const [main, setMain] = useState(arrayImages[0]);

  const changeMainPhotoHandler = (image) => {
    setMain(image);
  };

  return (
    <div className="gallery">
      <MainImage
        mainImage={main}
        propertyType={propertyType}
        offerType={offerType}
        price={price}
      />
      <GalleryListImages
        arrayImages={arrayImages}
        mainImage={main}
        changeMainPhoto={changeMainPhotoHandler}
      />
    </div>
  );
}
