import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import "./App.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const App = () => {
  const [cards, setCards] = React.useState([
    { id: 1, heading: "Untitled 1", subHeading: "add a sub title here 1", para: "this is your body 1" },
    { id: 2, heading: "Untitled 2", subHeading: "add a sub title here 2", para: "this is your body 2" },
    { id: 3, heading: "Untitled 3", subHeading: "add a sub title here 3", para: "this is your body 3" },
  ]); 
  const [activeCard, setActiveCard] = React.useState(2);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleCreateCard = () => {
    const newCard = {
      id: cards.length + 1,
      heading: "Untitled " + (cards.length + 1),
      subHeading: "add a sub title here",
      para: "this is your body text add some thing here",
    };
    setCards([...cards, newCard]);
    handleCardChange(1)
    if((cards.length)==0){
      setActiveCard(1)  
    }else if((cards.length)==1) setActiveCard(2)  
    
  };

  const handleCopyCard = () => {
    const activeCardIndex = cards.findIndex((card) => card.id === activeCard);
    if (activeCardIndex !== -1) {
      const copiedCard = { ...cards[activeCardIndex], id: cards.length + 1 };
      setCards([...cards, copiedCard]);
    }
    handleCardChange(1)
  };

  const handleDeleteCard = () => {
    const filteredCards = cards.filter((card) => card.id !== activeCard);
    setCards(filteredCards);
  
    if (filteredCards.length > 9) {

      handleCardChange(-1)
    }
    
    else if(filteredCards.length > 4){
      setActiveCard((filteredCards.length)/2)
    }
    else if(filteredCards.length > 1){
    setActiveCard(filteredCards[1].id);

    } 
    else if(filteredCards.length == 1){
    setActiveCard(filteredCards[0].id);

    } 
    else {
      // setActiveCard(filteredCards[0].id); 
      setActiveCard(null); 
    }
  };

  const handleShowMoreOptions = () => {
    window.confirm("delete all")
  };

  const handleCardChange = (step) => {
    const activeCardIndex = cards.findIndex((card) => card.id === activeCard);
    if (activeCardIndex !== -1) {
      const nextCardIndex = activeCardIndex + step;
      if (nextCardIndex >= 0 && nextCardIndex < cards.length) {
        setActiveCard(cards[nextCardIndex].id);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    const firstCardIndex = (pageNumber - 1) * cardsPerPage;
    if (firstCardIndex < cards.length) {
      setActiveCard(cards[firstCardIndex].id);
    }
  };

  return (
    <div className="app">
      <Navbar
        onCreateCard={handleCreateCard}
        onCopyCard={handleCopyCard}
        onDeleteCard={handleDeleteCard}
        onShowMoreOptions={handleShowMoreOptions}
      />
      <div className="card-container">
        <button className="arrow-left" onClick={() => handleCardChange(-1)}>
          <FiArrowLeft />
        </button>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isActive={card.id === activeCard}
            // ...
          />
        ))}
        <button className="arrow-right" onClick={() => handleCardChange(1)}>
          <FiArrowRight />
        </button>
      </div>
      <Pagination
        totalCards={cards.length}
        activeCard={activeCard}
        onPageChange={handlePageChange}
        cardsPerPage={cardsPerPage}
      />
    </div>
  );
};

export default App;
