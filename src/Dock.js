import React, { useState } from "react";
import ReactDOM from "react-dom";
import Note from "./Note";

const Dock = () => {
  document.addEventListener("resize", () => {
    shiftNotes();
  });

  const [colorPallete, toggleColorPallete] = useState(false);

  const shiftNotes = () => {
    var gridNoteArray = document.querySelectorAll(".gridNote");

    document.querySelectorAll(".note").forEach((note, index) => {
      if (index !== 0) {
        note.style.top = `${gridNoteArray[index].getBoundingClientRect().y}px`;
        note.style.left = `${gridNoteArray[index].getBoundingClientRect().x}px`;
      }
    });
  };

  const addNote = (e, color) => {
    let newNote = document.createElement("div");
    ReactDOM.render(<Note />, newNote);
    newNote.classList.add("note", color);
    newNote.style.top = `${e.target.getBoundingClientRect().top - 100}px`;
    newNote.style.left = `${e.target.getBoundingClientRect().left - 150}px`;
    document.querySelector(".App").prepend(newNote);
    let gridNote = document.createElement("div");
    gridNote.classList.add("gridNote");
    document.querySelector(".grid").prepend(gridNote);
    newNote.style.top = `${gridNote.getBoundingClientRect().y}px`;
    newNote.style.left = `${gridNote.getBoundingClientRect().x}px`;
    newNote.style.transform = `scale(${1})`;
    newNote.style.opacity = `${1}`;
    shiftNotes();
  };

  const animateColorSelector = () => {
    var colorArray = document.querySelectorAll(".newNoteColor");
    var colorContainer = document.querySelector(".colorContainer");
    if (!colorPallete) {
      colorContainer.style.opacity = null;

      colorContainer.style.marginTop = "3rem";
      colorArray.forEach((item, index) => {
        setTimeout(() => {
          for (let i = index; i < colorArray.length; i++) {
            colorArray[i].style.marginTop = `${3 * index}rem`;
          }
        }, 500 * index);
      });
      toggleColorPallete(!colorPallete);
    } else {
      colorContainer.style.marginTop = null;
      colorContainer.style.opacity = 0;

      colorArray.forEach((item, index) => {
        setTimeout(() => {
          for (let i = index; i < colorArray.length; i++) {
            colorArray[i].style.marginTop = null;
          }
        }, 500 * index);
      });
      toggleColorPallete(!colorPallete);
    }
  };

  return (
    <div className="dock">
      <div className="newButton" onClick={() => animateColorSelector()}>
        <i className="fas fa-plus"></i>
      </div>
      <div className="colorContainer">
        <div
          className="newNoteColor redNote"
          onClick={(e) => addNote(e, "redNote")}
        ></div>
        <div
          className="newNoteColor blueNote"
          onClick={(e) => addNote(e, "blueNote")}
        ></div>
        <div
          className="newNoteColor greenNote"
          onClick={(e) => addNote(e, "greenNote")}
        ></div>
        <div
          className="newNoteColor violetNote"
          onClick={(e) => addNote(e, "violetNote")}
        ></div>
        <div
          className="newNoteColor orangeNote"
          onClick={(e) => addNote(e, "orangeNote")}
        ></div>
      </div>
    </div>
  );
};

export default Dock;
