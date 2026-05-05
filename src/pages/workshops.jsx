import WorkshopCard from "../components/Other/workshopcard";
import { Link } from "react-router-dom";

function WorkshopsPage() {
  return (
    <main>
      <section id="workshops" className="workshops-section">
        <div className="workshops-header">
          <h1 className="h1">WORKSHOPS & <span style={{ color: '#5FFFC4' }}>EVENTS</span></h1>
          <p className="p">Our community in action</p>
        </div>

        <div className="workshops-grid">
        <div className="classes-grid__glow"/>
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
        <Link to="/" className="workshops-button h4">
          BACK TO HOME
        </Link>
      </div>
    </section>
    </main>
  );
}

export default WorkshopsPage;
