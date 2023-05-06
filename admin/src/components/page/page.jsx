import Header from "../header/header.jsx";
import { Breadcrumbs } from "../index.js";

import "./page.css";

export default function Page({
  title,
  className,
  children,
  propertyName,
  config,
}) {
  return (
    <>
      <Header title={title} config={config} />
      <Breadcrumbs propertyName={propertyName} />
      <main className={className}>{children}</main>
    </>
  );
}
