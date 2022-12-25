import { useState } from "react";
// import About from "./components/About";
import NavBar from "./components/NavBar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";

function App() {
  const [mode, setDarkMode] = useState("light"); //whether dark mode is enable or not

  const [alert, setAlert] = useState("light");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#093145";
      showAlert(" Dark mode is enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode is enabled", "success");
    }
  };
  return (
    <>
      <NavBar
        title='TextUtils'
        aboutText='About TextUtils'
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* <Alert alert={alert} /> */}

      <div className='container my-3'>
        {
          <TextForm
            heading='Enter the Text to Analyze below'
            mode={mode}
            showAlert={showAlert}
          />
        }

        {/* <About />*/}
      </div>
    </>
  );
}

export default App;
