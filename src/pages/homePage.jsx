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

      <section id="classes" className="classes-section">
        <div className="classes-header">
          <h1 className="h1">MASTER YOUR <span style={{ color: '#5FFFC4' }}>STYLE</span></h1>
          <p className="p">Move with power. Train with precision. Break boundaries.</p>
        </div>

        <div className="classes-grid">
          <div className="classes-grid__glow" />
          <article className="classes-card">
            <div className="classes-card__image-wrap">
              <img
                src="/classes-breaking.jpg"
                alt="Breaking class"
                className="classes-card__image"
              />
            </div>
            <div className="classes-card__text">
              <h2 className="h2">BREAKING</h2>
              <p className="p">Power moves, freezes, and footwork fundamentals</p>
            </div>
          </article>

          <article className="classes-card">
            <div className="classes-card__image-wrap">
              <img
                src="/classes-contemporary.jpg"
                alt="Contemporary class"
                className="classes-card__image"
              />
            </div>
            <div className="classes-card__text">
              <h2 className="h2">CONTEMPORARY</h2>
              <p className="p">Expressive movement, floor work, artistic technique</p>
            </div>
          </article>
        </div>
      </section>

      <section id="teachers" style={{ padding: "120px 24px", minHeight: "100vh" }}>
        <h1>Teachers</h1>
        <p>Meet our instructors</p>
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
