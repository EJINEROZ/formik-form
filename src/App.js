import { useState } from "react";
// import BasicForm from "./components/BasicForm";
import SignUp from "./components/SignUp";
// import AdvancedForm from "./components/AdvancedForm";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Sign Up
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Sign In
        </h3>
      </nav>
      {view === "basic" ? <SignUp /> : <SignIn />}
    </div>
  );
}

export default App;