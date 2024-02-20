const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starRatingStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1.5",
  margin: "0",
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starRatingStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span className="star-rating">★{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
