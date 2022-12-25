import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  let Len = text.split(" ").length - 1; // find Length of the text
  /* we can update the variable in react directly like other languages here
   we need function to update variable just like below setText is work as a function
            Ex:-  setText("dffdafdafdasfd")
  */
  /*
    text = "new text"           Wrong way to change the state
    setText = "new text"        Correct way to change the state  
  */
  //   Function 1
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to upper case", "success");
  };
  //   Function 2
  const handleLowerClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert(" Converted to lower case", "success");
  };
  //   Function 3
  const handleFormatClick = () => {
    let textlow = text.slice(1);
    let newText1 = text.charAt(0).toUpperCase() + textlow.toLowerCase();
    setText(newText1);
    props.showAlert(" First letter is capitalized", "success");
  };
  //   Function 4
  const ResetClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text Reset", "success");
  };
  //   Function 5
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  //  Function 6
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text is copied to clipboard", "success");
  };
  // Function 7
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra space was removed", "success");
  };
  return (
    <>
      <div
        className='container'
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading} </h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            id='myBox'
            rows='5'
            value={text}
            onChange={handleOnChange}
            //there is two curlybraces are used one for javascript and second for object
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary my-2' onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          type='button'
          class='btn btn-success mx-1'
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          type='button'
          class='btn btn-danger my-1'
          onClick={handleFormatClick}
        >
          Format the Text
        </button>
        <button type='button' class='btn btn-dark mx-1' onClick={ResetClick}>
          Reset
        </button>
        <button className='btn btn-primary ' onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className='btn btn-primary my-1 mx-1'
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className='container my-3'
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary </h2>
        <p>
          {Len} words and {text.length} characters
        </p>
        <p>{0.008 * Len} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter the text to Analysis",
};
