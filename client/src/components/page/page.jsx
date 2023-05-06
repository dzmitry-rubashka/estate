import { Header, Breadcrumbs } from "../index.js";

import "./page.css";

export default function Page({ title, className, children }) {
  return (
    <>
      <Header title={title} />
      <Breadcrumbs propertyName={title} />
      <main className={className}>{children}</main>
    </>
  );
}
