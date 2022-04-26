import React from "react";
import Routes from "routes";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      {ReactDOM.createPortal(
        <ToastContainer
          className="toaster"
          autoClose={false}
        />,
        document.getElementById("toasts")
      )}
    </>
  );
}

export default App;
