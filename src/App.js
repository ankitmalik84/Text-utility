import { useState } from "react";
// import About from "./components/About.js";
// import NavBar from "./components/NavBar.js";
import TextForm from "./components/TextForm.js";
// import Alert from "./components/Alert.js";
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light"); //whether dark mode is enable or not

  // <-------------Alert function -------------------->

  // const [alert, setAlert] = useState("light");

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  // setTimeout(() => {
  //   setAlert(null);
  // }, 1500);
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#093145";
      // showAlert(" Dark mode is enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert(" Light mode is enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      {/* <NavBar
        title='TextUtils'
        aboutText='About TextUtils'
        mode={mode}
        toggleMode={toggleMode}
      /> */}

      {/* <Alert alert={alert} /> */}

      <div className='container my-3'>
        {/* <Switch> */}
        {/* <Route exact path='./components/About.js'><About /></Route> */}
        {/* <Route exact path='/'> */}
        <TextForm
          heading='Enter the Text to Analyze below'
          mode={mode}
          // showAlert={showAlert}
        />
        {/* </Route> */}
        {/* </Switch> */}

        {/* <About />*/}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
