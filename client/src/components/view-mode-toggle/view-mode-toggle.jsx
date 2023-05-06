import { Button } from "../index.js";

import "./view-mode-toggle.css";

export default function ViewModeToggle({ currentMode, changeModeHandler }) {
  const isGridActive =
    currentMode === "grid"
      ? "view-mode-toggle__button active"
      : "view-mode-toggle__button";

  const isListActive =
    currentMode === "list"
      ? "view-mode-toggle__button active"
      : "view-mode-toggle__button";

  return (
    <div className="view-mode-toggle__container">
      <span className="view-mode-toggle__label">View Mode:</span>
      <div className="view-mode-toggle__buttons-container">
        <Button
          type="grid"
          color="#ADB2B6"
          width="32px"
          height="32px"
          className={isGridActive}
          onClick={(viewMode) =>
            viewMode !== "grid" && changeModeHandler("grid")
          }
        />
        <Button
          type="list"
          color="#ADB2B6"
          width="32px"
          height="32px"
          className={isListActive}
          onClick={(viewMode) =>
            viewMode !== "list" && changeModeHandler("list")
          }
        />
      </div>
    </div>
  );
}
