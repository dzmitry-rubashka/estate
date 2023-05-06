import { ReactComponent as Apartment } from "./icon__glyphs/icon__glyph_apartment.svg";
import { ReactComponent as Approve } from "./icon__glyphs/icon__glyph_approve.svg";
import { ReactComponent as Area } from "./icon__glyphs/icon__glyph_area.svg";
import { ReactComponent as Bathroom } from "./icon__glyphs/icon__glyph_bathroom.svg";
import { ReactComponent as Bedroom } from "./icon__glyphs/icon__glyph_bed.svg";
import { ReactComponent as Business } from "./icon__glyphs/icon__glyph_business.svg";
import { ReactComponent as Cancel } from "./icon__glyphs/icon__glyph_cancel.svg";
import { ReactComponent as Delete } from "./icon__glyphs/icon__glyph_delete.svg";
import { ReactComponent as Done } from "./icon__glyphs/icon__glyph_done.svg";
import { ReactComponent as Edit } from "./icon__glyphs/icon__glyph_edit.svg";
import { ReactComponent as Email } from "./icon__glyphs/icon__glyph_email.svg";
import { ReactComponent as Grid } from "./icon__glyphs/icon__glyph_grid.svg";
import { ReactComponent as House } from "./icon__glyphs/icon__glyph_house.svg";
import { ReactComponent as List } from "./icon__glyphs/icon__glyph_list.svg";
import { ReactComponent as Messages } from "./icon__glyphs/icon__glyph_messages.svg";
import { ReactComponent as NotDone } from "./icon__glyphs/icon__glyph_not-done.svg";
import { ReactComponent as Phone } from "./icon__glyphs/icon__glyph_phone.svg";
import { ReactComponent as SignIn } from "./icon__glyphs/icon__glyph_sign-in.svg";
import { ReactComponent as Townhouse } from "./icon__glyphs/icon__glyph_townhouse.svg";
import { ReactComponent as User } from "./icon__glyphs/icon__glyph_user.svg";

const pickIcon = (type) => {
  switch (type) {
    case "apartment":
      return Apartment;
    case "area":
      return Area;
    case "bathroom":
      return Bathroom;
    case "bed":
      return Bedroom;
    case "business":
      return Business;
    case "house":
      return House;
    case "townhouse":
      return Townhouse;
    case "email":
      return Email;
    case "phone":
      return Phone;
    case "grid":
      return Grid;
    case "list":
      return List;
    case "home":
      return House;
    case "user":
      return User;
    case "delete":
      return Delete;
    case "edit":
      return Edit;
    case "done":
      return Done;
    case "not-done":
      return NotDone;
    case "approve":
      return Approve;
    case "cancel":
      return Cancel;
    case "messages":
      return Messages;
    case "sign-in":
      return SignIn;
    default:
      return undefined;
  }
};

export default function Icon(props) {
  const defaultValues = {
    fill: "#adb2b6",
    height: "15px",
    width: "15px",
  };

  const { iconType, ...otherProps } = { ...defaultValues, ...props };
  const IconComponent = pickIcon(iconType);

  if (IconComponent === undefined) return null;
  return <IconComponent {...otherProps} />;
}
