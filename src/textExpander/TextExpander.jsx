import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  let displayText = children;

  if (typeof children === "string") {
    displayText = isExpanded
      ? children
      : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  }

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{String(displayText)}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
