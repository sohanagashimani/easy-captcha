import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Form } from "./components";
function App() {
  return (
    <div className="App bg-slate-200 h-screen">
      <ToastContainer />
      <Form />
    </div>
  );
}

export default App;
