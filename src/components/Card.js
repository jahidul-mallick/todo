import React, { useState, useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./css/card.css"

const Card = ({ card, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState({ ...card });
  const cardRef = useRef(null);

  const cardContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardContentRef.current && !cardContentRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  useEffect(() => {
    if (isEditing && !isActive) {
      localStorage.setItem(`card_${card.id}`, JSON.stringify(editedCard));
    }
  }, [isEditing, isActive, card.id, editedCard]);

  const handleCardClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [isActive]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  return (
    <div className={`card ${isActive ? "active" : "disabled"}`} ref={cardRef}>
      <div
        className={`card-content ${isEditing ? "edit-mode" : ""}`}
        onClick={handleCardClick}
        ref={cardContentRef}
      >
        <div className="heading">{isEditing ? <input type="text" name="heading" className="heading" value={editedCard.heading} onChange={handleInputChange} /> : editedCard.heading}</div>
        <div className="sub-heading">{isEditing ? <input type="text" name="subHeading" className="sub-heading" value={editedCard.subHeading} onChange={handleInputChange} /> : card.subHeading}</div>
        <div className="para">{isEditing ? <textarea name="para" value={editedCard.para} className="para" onChange={handleInputChange} /> : card.para}</div>

      </div>
    </div>
  );
};

export default Card;
