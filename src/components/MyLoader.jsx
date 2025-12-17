import React from "react";

export const MyLoader = () => {
  return (
    <div className="py-4">
      <div className="placeholder-glow">
        <div className="placeholder col-12 mb-3" style={{ height: "180px", borderRadius: "12px" }}></div>
        <div className="placeholder col-6 mb-2"></div>
        <div className="placeholder col-8"></div>
      </div>
    </div>
  );
};
