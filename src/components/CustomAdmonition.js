import React from "react";
import clsx from "clsx";
import admonitionConfig from "./admonitionConfig.js";
import styles from "./styles.module.css";

function CustomAdmonition({ type, title, children }) {
  const config = admonitionConfig[type];

  if (!config) {
    return (
      <div
        className={clsx(
          "alert",
          "theme-admonition",
          "admonition",
          styles.customAdmonition,
        )}
      >
        <div className={clsx("admonitionHeading", styles.admonitionHeader)}>
          {title && { title }}
        </div>
        <div className={clsx("admonitionContent", styles.admonitionContent)}>
          {children}
        </div>
      </div>
    );
  }

  const CustomIcon = config.icon;
  const customStyles = {
    borderLeftColor: config.color,
    backgroundColor: `rgba(${parseInt(config.color.slice(1, 3), 16)}, ${parseInt(config.color.slice(3, 5), 16)}, ${parseInt(config.color.slice(5, 7), 16)}, 0.2)`,
  };

  return (
    <div
      className={clsx(
        "alert",
        "theme-admonition",
        "admonition",
        styles.customAdmonition,
      )}
      style={customStyles}
    >
      <div className={clsx("admonitionHeading", styles.admonitionHeader)}>
        {CustomIcon && (
          <CustomIcon
            className={clsx("admonitionIcon", styles.admonitionIcon)}
          />
        )}
        {title}
      </div>
      <div className={clsx("admonitionContent", styles.admonitionContent)}>
        {children}
      </div>
    </div>
  );
}

export default CustomAdmonition;
