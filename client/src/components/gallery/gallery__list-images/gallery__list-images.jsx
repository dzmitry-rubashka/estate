import "./gallery__list-images.css";

export default function GalleryListImages({
  arrayImages,
  changeMainPhoto,
  mainImage,
}) {
  return (
    <div className="gallery__list-images">
      {arrayImages.map(
        (image, index) =>
          index <= 3 && (
            <img
              src={image}
              alt={`home${index}`}
              key={`${image}${index}`}
              className={
                image === mainImage
                  ? "gallery__item-image active-image"
                  : "gallery__item-image"
              }
              onClick={() => changeMainPhoto(image)}
            />
          )
      )}
    </div>
  );
}
