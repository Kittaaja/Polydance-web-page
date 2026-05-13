import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import QuizComponent from "../components/Other/quiz";
import "../components/Other/quiz.css";

function QuizPage() {
  return (
    <>
      <main>
        <section id="header" className="quiz-section">
          <div className="quiz-header">
            <p className="p-accent">DISCOVER YOUR FLOW</p>
            <h1 className="h1">STYLE <span style={{ color: '#5FFFC4' }}>FINDER</span></h1>
          </div>
          
          <QuizComponent />
          
        </section>
      </main>
    </>
  );
}

export default QuizPage;