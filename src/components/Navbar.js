// Navbar.js
import React from "react";
import { FiPlus, FiCopy, FiTrash, FiMoreVertical } from "react-icons/fi";
import "./css/navbar.css";

const Navbar = ({ onCreateCard, onCopyCard, onDeleteCard, onShowMoreOptions }) => {
  return (
    <div className="navbar">
      <button className="createcard" id="btn" onClick={onCreateCard}>
        <FiPlus />
      </button>
      <button className="copycard" id="btn" onClick={onCopyCard}>
        <FiCopy />
      </button>
      <button className="deletecard" id="btn" onClick={onDeleteCard}>
        <FiTrash />
      </button>
      <button className="moreoptions" id="btn" onClick={onShowMoreOptions}>
        <FiMoreVertical />
      </button>
    </div>
  );
};

export default Navbar;
