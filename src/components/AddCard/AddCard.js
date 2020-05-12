import React, { useState } from "react";
import "./AddCard.scss";

const AddCard = (props) => {
  const initialState = {
    title: "",
    text: "",
    link: "",
  };
  const [newCard, setNewCard] = useState(initialState);

  const handleChange = (event) => {
    const newCardData = {
      ...newCard,
      [event.target.name]: event.target.value,
    };
    setNewCard(newCardData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleNewData(newCard);
    setNewCard(initialState);
  };
  return (
    <form onSubmit={handleSubmit} className="new-post">
      <input
        className="new-post-input"
        type="text"
        name="title"
        onChange={handleChange}
        value={newCard.title}
        required
      />
      <input
        className="new-post-input"
        type="textarea"
        name="text"
        onChange={handleChange}
        value={newCard.text}
        required
      />
      <input
        className="new-post-input"
        type="text"
        name="link"
        onChange={handleChange}
        value={newCard.link}
        required
      />
      <input className="new-post-submit" type="submit" value="submit" />
    </form>
  );
};

export default AddCard;
