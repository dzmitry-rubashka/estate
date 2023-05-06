import { NavLink } from "react-router-dom";

import useBreadcrumbs from "use-react-router-breadcrumbs";

import "./breadcrumbs.css";

export default function Breadcrumbs({ propertyName }) {
  const DynamicPropertyBreadcrumb = () => propertyName;
  const routes = [
    { path: "/", breadcrumb: "Properties" },
    { path: "/property/:propertyId", breadcrumb: DynamicPropertyBreadcrumb },
  ];
  const breadcrumbs = useBreadcrumbs(routes, { excludePaths: ["/property"] });
  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <NavLink
          className="breadcrumbs__link"
          key={match.pathname}
          to={match.pathname}
        >
          {index !== 0 && " > "}
          {breadcrumb}
        </NavLink>
      ))}
    </nav>
  );
}
