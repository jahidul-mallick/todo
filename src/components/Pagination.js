import React from "react";
import "./css/pagination.css"

const Pagination = ({ totalCards, activeCard, onPageChange }) => {
  const pages = Math.ceil(totalCards / 3);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {/* <div className="box">start</div>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box-mid">3</div>
      <div className="box">4</div>
      <div className="box">5</div>
      <div className="box">...</div>
      <div className="box">end</div> */}
      {Array.from({ length: pages }).map((_, index) => (
        <button
          key={index + 1}
          className={`page-button ${index + 1 === activeCard ? "active" : ""}`}
          onClick={() => handlePageChange(index + 1)}
        >
           {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
