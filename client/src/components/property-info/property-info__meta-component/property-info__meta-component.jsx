import Icon from "../../icon/icon.jsx";

import "./property-info__meta-component.css";

export default function MetaComponent({
  iconType,
  metaComponent,
  metaComponentDescription,
  ft,
  iconHeight,
  iconWidth,
}) {
  return (
    <div className="meta-component">
      {metaComponentDescription ? (
        <span>
          {metaComponentDescription}: {metaComponent}
        </span>
      ) : (
        <>
          <Icon iconType={iconType} height={iconHeight} width={iconWidth} />
          <span>
            {metaComponent}
            {ft}
          </span>
        </>
      )}
    </div>
  );
}
