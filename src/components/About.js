import React, { useState } from "react";

export default function About() {
  // Here we use useState function to theme change
  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [myStyle1, setStyle1] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  // Here toogle is theme function that change dark into light
  const toggleStyle = () => {
    if (myStyle.color === "gold") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setStyle1({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    } else {
      setStyle({
        color: "gold",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setStyle1({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtnText("Enable Light Mode");
    }
  };
  return (
    <>
      <div className='container ' style={myStyle}>
        <h1 className='my-2'>About Us</h1>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle1}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle1}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body' style={myStyle1}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className='container my-3'>
          <button className='btn btn-primary' onClick={toggleStyle}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
