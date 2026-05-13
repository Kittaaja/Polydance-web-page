import { useState } from "react";
import JoinButton from "../Other/joinbutton"; // Adjust path as needed
import "./quiz.css";

const questions = [
  {
    question: "What kind of music gets you moving most?",
    options: [
      { text: "Hard-hitting beats, Funk, and Hip-Hop", type: "breaking" },
      { text: "Atmospheric, Cinematic, or Soulful melodies", type: "contemporary" }
    ]
  },
  {
    question: "How do you prefer to use your energy?",
    options: [
      { text: "Explosive power and physical challenges", type: "breaking" },
      { text: "Fluid transitions and emotional expression", type: "contemporary" }
    ]
  },
  {
    question: "Which environment sounds more exciting?",
    options: [
      { text: "A high-energy circle (cypher) with people cheering", type: "breaking" },
      { text: "A quiet studio space for personal exploration", type: "contemporary" }
    ]
  },
  {
    question: "What is your main goal for dancing?",
    options: [
      { text: "Learning impressive tricks and footwork", type: "breaking" },
      { text: "Connecting with my body and storytelling", type: "contemporary" }
    ]
  },
  {
    question: "How do you feel about floorwork?",
    options: [
      { text: "I want to spin, freeze, and use my hands for power", type: "breaking" },
      { text: "I want to roll, slide, and use the floor for momentum", type: "contemporary" }
    ]
  }
];

function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ breaking: 0, contemporary: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type) => {
    setScores({ ...scores, [type]: scores[type] + 1 });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = scores.breaking >= scores.contemporary ? "BREAKING" : "CONTEMPORARY";

  if (showResult) {
    return (
      <div className="quiz-container">
        <p className="p-accent">YOUR MATCH IS...</p>
        <h1 className="h1" style={{ color: 'var(--color-accent)' }}>{result}</h1>
        <p className="p">
          Based on your vibe, {result.toLowerCase()} is the perfect way to start your dance journey.
        </p>
        <div style={{ marginTop: '30px' }}>
          <JoinButton text={`VIEW ${result} CLASSES`} id={`/classes#${result.toLowerCase()}`} />
        </div>
      </div>
    );
  }

return (
    <div className="quiz-container">
      <div className="quiz-progress" style={{ color: '#5FFFC4', marginBottom: '20px' }}>
        Step {currentStep + 1} of {questions.length}
      </div>
      <h2 className="h2" >
        {questions[currentStep].question}
      </h2>
      <div className="quiz-options" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {questions[currentStep].options.map((option, index) => (
          <button
            key={index}
            className="h4 quiz-opt-btn"
            onClick={() => handleAnswer(option.type)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizPage;