import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/navbar";
import Footer from "./components/navigation/footer";
import HomePage from "./pages/HomePage";
import TeacherPage from "./pages/teacherPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
