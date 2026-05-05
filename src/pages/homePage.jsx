import { Link } from "react-router-dom";
import JoinButton from "../components/Other/joinbutton";
import ScheduleButton from "../components/Other/schedulebutton";
import WorkshopCard from "../components/Other/workshopcard";

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
          <div className="glow"/>
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

      <section id="teachers" className="teachers-section">
        <div className ="teachers-header">
          <h1 className="h1">
            MEET YOUR <span style={{ color: '#5FFFC4' }}>TEACHERS</span>
          </h1>
          <p className="p">
            World-class teachers bringing international excellence to Polydance.
          </p>
        </div>

        <div className="teacher-card">
          <div className="teacher-card__image-wrap">
            <img
              src="/teachers-breaking.jpg"
              alt="Victor Vicious Sono"
              className="teacher-card__image"
            />
          </div>

          <div className="teacher-card__content">
            <div className="glow" style={{ background: 'radial-gradient(circle, rgba(95, 255, 196, 0.2)' }} />
            <p className="p-accent">BREAKING TEACHER</p>
            <h2 className="h2">Victor “Vicious” Sono</h2>
            <p className="p">
              A world-class b-boy with nearly 30 years in the game, Vicious is a
              multiple-time World Champion and a member of the legendary Sweet
              Technique and Boogie Brats crews.
            </p>
            <p className="p">
              Originally from Montréal, Vicious was one of the first to put
              Canadian breaking on the international map. Now a resident of
              Finland, he brings that same world-stage energy and community-building
              expertise to Polydance.
            </p>
            <p className="p">
              From battling across the globe since 1998 to organizing events and
              festivals since 2010, Vicious’ classes are about more than just
              moves—they’re about the artistry and genius of the dance.
            </p>
            <div className="teacher-card__focus">
              <p className="p-accent">Class Focus:</p>
              <p className="p">
                The classes center on foundational flow, rhythmic “flavor,” and the strategic
                art of the battle. Victor encourages you to find your own unique artistic
                voice.
              </p>
            </div>
          </div>
        </div>

        <div className="teacher-card">


          <div className="teacher-card__content">
            <div className="glow" style={{ background: 'radial-gradient(circle, rgba(95, 255, 196, 0.2)' }} />
            <p className="p-accent">CONTEMPORARY TEACHER</p>
            <h2 className="h2">Eero Tahkola</h2>
            <p className="p">
              A professional dancer and performer based in Helsinki, Eero’s
              approach to dance is rooted in playfulness and curiosity, as well as
              constant exploration and learning.
            </p>
            <p className="p">
              Eero graduated from Outokumpu Dance Education in 2024 and is currently
              furthering his studies in the Art of Dance program at the Theater Academy
              of the University of the Arts, Helsinki.
            </p>
            <p className="p">
              His particular professionalism lies in various techniques used in contemporary
              dance, such as contact and task-based improvisation, floorwork, partnering and somatic
              techniques.
            </p>
            <div className="teacher-card__focus">
              <p className="p-accent">Class Focus:</p>
              <p className="p">
                The classes focus on the chaining of body movement, task-based
                improvisational movement research, and floorwork material. The goal is
                to learn through fun and sweat!
              </p>
            </div>
          </div>
                    <div className="teacher-card__image-wrap">
            <img
              src="/teachers-contemporary.jpg"
              alt="Eero Tahkola"
              className="teacher-card__image"
            />
          </div>
        </div>
      </section>

      <section id="workshops" className="workshops-section">
        <div className="workshops-header">
          <h1 className="h1">WORKSHOPS & <span style={{ color: '#5FFFC4' }}>EVENTS</span></h1>
          <p className="p">Our community in action</p>
        </div>

        <div className="workshops-grid">
          <div className="glow"/>
          <WorkshopCard
            status="upcoming"
            image="/workshop-afro.jpeg"
            title="Afro Dance Workshop"
            date="MAY 20, 2026"
            description="With Pauliina Diallo — a vibrant session blending rhythm, movement and cultural expression."
          />
          <WorkshopCard
            status="past"
            image="/workshop-improvisation-class.jpg"
            title="Improvisation Class"
            date="NOVEMBER 7, 2025"
            description="With Amelie Koerbs — unlocking spontaneous movement through play and floorwork tools."
          />
          <WorkshopCard
            status="past"
            image="/workshop-rave-break.jpeg"
            title="Rave x Break"
            date="MAY 18, 2024"
            description="With DJ Tauko & AaltoDJ — a high-energy breaking session set to rave-inspired beats."
          />
          <WorkshopCard
            status="past"
            image="/workshop-shuffle.jpeg"
            title="Shuffle Workshop"
            date="MARCH 13, 2024"
            description="With Julia Piironen — learn fast footwork, transitions, and groove structure."
          />
        </div>

        <div className="workshops-actions">
          <Link to="/workshops" className="workshops-button h4">
            AND MORE
          </Link>
        </div>
      </section>

      <section id="board" style={{ padding: "120px 24px", minHeight: "100vh" }}>
        <h1>Board</h1>
        <p>dippadappa</p>
      </section>
    </main>
  )
}

export default HomePage
