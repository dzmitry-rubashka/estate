export default function DropDownControlItem(props) {
  return (
    <option className="dropdown-control-item" {...props}>
      {props.value}
    </option>
  );
}
