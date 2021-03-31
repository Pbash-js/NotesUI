import React, { useState } from "react";

const Note = () => {
  const [text, setText] = useState({
    title: "Untitled Note",
    text: "Note here",
  });

  const handleChange = (e) => {
    setText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <input
        className="noteTitle"
        type="text"
        name="title"
        onChange={(e) => handleChange(e)}
        value={text.title}
        placeholder="You left me Empty!"
      ></input>
      <textarea
        className="noteText"
        name="text"
        onChange={(e) => handleChange(e)}
        value={text.text}
      ></textarea>
    </div>
  );
};

export default Note;
