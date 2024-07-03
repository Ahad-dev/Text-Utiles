import React from "react";

export default function About(props) {
  return (
    <div className="container my-5" style={props.myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={props.myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.myStyle}
            >
              What is Textila{" "}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Textila is the text soluton website .</strong> This is
              useed to perform specific function on the given text Liek Upper
              Case and Lower Case , Copy text , and Clear text
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.myStyle}
            >
              Is it free to use?{" "}
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>yes this is absolutly free.</strong> this is completly
              frre ti use all the function in this app is always free for life
              time
            </div>
          </div>{" "}
        </div>
        <div className="accordion-item" style={props.myStyle}>
          {" "}
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.myStyle}
            >
              How Many time this ap take to perform the specific task?{" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                This app take almmost no time to perform it action.
              </strong>{" "}
              As this app is make in react so it is the sigle pageapplication
              and we can use it to get instant result of all of your work
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
