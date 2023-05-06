import { getVisiblePages } from "../../helpers";
import { Button } from "../index.js";

import "./pagination.css";

function PageButton({ onChange, page, borderRadius, current = false }) {
  return (
    <Button
      value={page}
      className={`pagination__page-btn${current ? " active" : ""} ${
        borderRadius || ""
      }`}
      onClick={() => onChange(page)}
    />
  );
}

export default function Pagination({ pages, page, onChange }) {
  if (pages === 1) {
    return null;
  }

  function whatRadiusDirection(btnIndex, btnArr) {
    if (btnIndex === btnArr.length - 1) {
      return "radius-right";
    }
    if (btnIndex === 0) {
      return "radius-left";
    }
    return null;
  }

  const nextPage = pages > page ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  return (
    <div className="pagination">
      {prevPage && (
        <div className="pagination__button-wrapper">
          <Button value="<" onClick={() => onChange(prevPage)} />
        </div>
      )}

      <div className="pagination__button-wrapper">
        {getVisiblePages(page, pages, onChange).map(
          (pageData, index, array) => (
            <PageButton
              key={pageData.page}
              onChange={pageData.onChange}
              page={pageData.page}
              borderRadius={whatRadiusDirection(index, array)}
              current={pageData.current}
            />
          )
        )}
      </div>

      {nextPage && (
        <div className="pagination__button-wrapper">
          <Button value=">" onClick={() => onChange(nextPage)} />
        </div>
      )}
    </div>
  );
}
