import { useState } from "react";
import "./App.css";
import Dock from "./Dock";
import NoteGrid from "./NoteGrid";

const App = () => {
  const [text, setText] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <nav>
        <input
          className="search"
          name="search"
          value={text.search}
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        ></input>
      </nav>
      <Dock />
      <div className="title">Notes</div>
      <NoteGrid />
    </div>
  );
};

export default App;
