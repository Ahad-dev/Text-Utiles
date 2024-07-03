import React, { useState } from "react";

export default function Textform(props) {

  const [text, setText] = useState("");
  const [showMore, setShowMore] = useState(false);

  function clickedUpperCase() {
    setText(text.toUpperCase());
    props.showAlert("Upper Case Is Clicked", "Success")
  }
  function clickedLowerCase() {
    setText(text.toLowerCase());
    props.showAlert("Lower Case Is Clicked", "Success")

  }
  function handleOnchange(event) {
    setText(event.target.value);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function clickedClear() {
    setText("");
    props.showAlert("Clear Text Is Clicked", "Success")

  }
  function clickedCopy() {
    props.showAlert("Text Copy Is Clicked", "Success")

    var copyText = document.getElementsByClassName("form-control")[1];

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    try {
      document.execCommand("copy");
      
    } catch (err) { console.log('Error while copying to clipboard: ' + err); }
  }
 
  let hasPrev = text.length > 0



  return (
    <div className="container my-4 ">
      <h1 style={props.myStyle}>Textila-Paste your text tosee features of this amazing app</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
          style={props.myStyle}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clickedUpperCase} >
        Click to Upper Case
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clickedLowerCase}>
        Click to Lower Case
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clickedClear}>
        Click to Clear Text
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clickedCopy}>
        Click to Copy
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2" >
        Click to Capitalize First letter of every word
      </button>
      <h1 style={props.myStyle}>Sammary of the Paragraph</h1>
      <p className="my-3" style={props.myStyle}>
        <b>
          {text.split(" ").filter(() => {
            return text.length !== 0;
          }).length} Words and {text.length} No of Characters
        </b>
        <br />
        <b>
          {0.25 * text.split(" ").filter(() => {
            return text.length !== 0;
          }).length} secend to read the whole Paragrph
        </b>
      </p>
      <button className="btn btn-primary btn-lg" onClick={handleMoreClick} disabled={!hasPrev} >
        {showMore ? "Hide" : "Show"} Preview
      </button>
      <p className="my-3" style={props.myStyle}>{showMore && <p>{text}</p>}</p>
    </div>
  );
}
