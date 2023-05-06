import "./property-info__gallery.css";

export default function PropertyGallery({ photos }) {
  return (
    <div className="property-info__gallery">
      {photos.map(
        (image, index) =>
          index <= 3 && (
            <img src={image} alt={`home${index}`} key={`${image}${index}`} />
          )
      )}
    </div>
  );
}
