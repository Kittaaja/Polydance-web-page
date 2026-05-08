import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import HomePage from "./pages/HomePage";
import ClassesPage from "./pages/classesPage";
import EventsPage from "./pages/events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  )
}

export default App
