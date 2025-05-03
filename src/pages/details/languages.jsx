import React from "react";

const languages = [
  { name: "Kannada", level: "Advanced" },
  { name: "Hindi", level: "Advanced" },
  { name: "English", level: "Advanced" },
  { name: "Tamil", level: "Beginner" },
];

const getBarWidth = (level) => {
  switch (level) {
    case "Beginner":
      return "33%";
    case "Intermediate":
      return "66%";
    case "Advanced":
      return "100%";
    default:
      return "0";
  }
};

const getBarColor = (level) => {
  switch (level) {
    case "Beginner":
      return "#f39c12"; // orange
    case "Intermediate":
      return "#2980b9"; // blue
    case "Advanced":
      return "#27ae60"; // green
    default:
      return "#ccc";
  }
};

const LanguageBar = () => (
  <div>
    <strong style={{ marginBottom: "1rem" }}>Languages</strong>
    {languages.map((lang) => (
      <div key={lang.name} style={{ marginBottom: "1rem", marginTop: "2rem" }}>
        <div style={{ marginBottom: "0.3rem", fontWeight: "bold" }}>
          {lang.name}
        </div>
        <div
          style={{
            background: "#eee",
            height: "10px",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: getBarWidth(lang.level),
              backgroundColor: getBarColor(lang.level),
              height: "100%",
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
        <div style={{ fontSize: "0.8rem", color: "#555", marginTop: "0.3rem" }}>
          {lang.level}
        </div>
      </div>
    ))}
  </div>
);

export default LanguageBar;
