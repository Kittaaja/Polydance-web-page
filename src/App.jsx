import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import HomePage from "./pages/homePage";
import ClassesPage from "./pages/classesPage";
import EventsPage from "./pages/events";
import QuizPage from "./pages/quizPage";
import Footer from "./components/navigation/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
