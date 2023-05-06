import { NavLink } from "react-router-dom";

import useBreadcrumbs from "use-react-router-breadcrumbs";

import "./breadcrumbs.css";

export default function Breadcrumbs({ propertyName }) {
  const DynamicPropertyBreadcrumb = () => propertyName;
  const DynamicMessageBreadcrumb = ({ match }) =>
    `Message ID: ${match.params.messageId}`;
  const routes = [
    { path: "/properties", breadcrumb: "Properties" },
    { path: "/properties/:propertyId", breadcrumb: DynamicPropertyBreadcrumb },
    {
      path: "/properties/:propertyId/messages/:messageId",
      breadcrumb: DynamicMessageBreadcrumb,
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: ["/", "/properties/:propertyId/messages"],
  });
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
