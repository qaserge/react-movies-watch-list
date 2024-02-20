import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starRatingStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={starRatingStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}
