import { Link } from "react-router-dom";
import JoinButton from "../components/Other/joinbutton";
import ScheduleButton from "../components/Other/schedulebutton";

function HomePage() {
  return (
    <main>
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <p className="p-accent">FROM STUDENTS, TO STUDENTS</p>
            <img src="/logo.png" alt="Logo" className="hero-logo" />
          <p className="h4 hero-headline">
            Bringing professional dance<br />
            training to the student community.

          </p>
          <div className="hero-actions">
            <JoinButton />
            <ScheduleButton />
          </div>
        </div>
      </section>

      <section id="classes" style={{ padding: "120px 24px", minHeight: "100vh" }}>
        <h1>Classes</h1>
        <p>dippadappa</p>
      </section>

      <section id="workshops" style={{ padding: "120px 24px", minHeight: "100vh" }}>
        <h1>Workshops</h1>
        <p>dippadappa</p>
      </section>

      <section id="board" style={{ padding: "120px 24px", minHeight: "100vh" }}>
        <h1>Board</h1>
        <p>dippadappa</p>
      </section>
    </main>
  )
}

export default HomePage
