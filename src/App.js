// import logo from "./logo.svg";
// import "./App.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import recordList from "./components/RecordList";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    (
      <Routes>
        <Route exact path="/" element={recordList} />
      </Routes>
    ),
    (
      <div className="App">
        <Navbar />
      </div>
    )
  );
}

export default App;
