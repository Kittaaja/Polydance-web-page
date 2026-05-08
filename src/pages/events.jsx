import WorkshopCard from "../components/Other/workshopcard";
import { Link } from "react-router-dom";
import InfoCard from "../components/Other/infocard"; 
import AccentButton from "../components/Other/accentbutton";
import Footer from "../components/navigation/footer";

function EventsPage() {
  return (
    <main>
      <section className="info-section" id = "info">
        <div className="info-header">
            <img src="/icon-bell.svg" alt="Bell" className="info-header__icon" />
            <h1 className="h1">LATEST <span style={{ color: '#5FFFC4' }}>INFO</span></h1>
            <p className="p">Stay updated with announcements, events, and community news</p>
        </div>

        <div className="info-list">
          <h2 className="h2" style={{ color: 'var(--color-accent)', marginBottom: '32px' }} id="info">ANNOUNCEMENTS</h2>
          
          <InfoCard 
            date="MAY 7, 2026"
            title="Summer Intensive Registration Now Open!"
            text="Join us for an intensive 3-day workshop featuring guest instructors and special sessions. Early bird pricing available until May 15th."
          />

          <InfoCard 
            date="APRIL 28, 2026"
            title="Studio Schedule Update"
            text="Starting May 1st, we're adding an extra Breaking session on Saturdays at 16:00. Open to all levels!"
          />

          <InfoCard 
            date="MARCH 20, 2026"
            title="Spring Jam Photos are up!"
            text="Check out the gallery for highlights from our last community jam."
          />
        </div>
      </section>
      <section className="workshops-section" id="workshop">
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
            teacher="With Pauliina Diallo"
          />
          <WorkshopCard
            status="past"
            image="/workshop-improvisation-class.jpg"
            title="Improvisation Class"
            date="NOVEMBER 7, 2025"
            teacher="Amelie Koerbs"
            teacherbio="I’m Amelie and I started dancing contemporary in 2017. Over the years I explored contact, modern, hip hop, ballet, 5-rhythms, and improvisation with different teachers. I use dance as a tool to connect with my body, emotions, and creativity. Improvisation has become something I return to again and again because it creates space to explore and express freely without judgement. This class is about sharing that space together."
            description="This class invites you to get from your head into your body, to arrive in the space, let go of the day, and connect with yourself, others, and your surroundings through movement. We’ll begin by warming up the body, activating the skin, and exploring our physical possibilities and limits. Gradually, we’ll build movement vocabulary through improvisation exercises and floor work. In the final part of the class, we’ll bring it all together, improvising to different kinds of music. To close, we’ll slow down and do our stretches. Practical info: Wear comfortable clothing and long trousers. We’ll be moving both through the space and on the floor. Dancing barefoot is recommended for better grip, but socks are also fine. No shoes needed."
            images={["/workshop-improvisation-class1.jpeg"]}
          />
          <WorkshopCard
            status="past"
            image="/workshop-ravexbreak.jpg"
            title="Rave x Break"
            date="MAY 18, 2024"
            teacher="DJ Tauko & AaltoDJ"
            images={["/workshop-ravexbreak1.jpg"]}
            description="Brief!
            Open cypher jam where you can freestyle to your hearts content along to music supplied by The Mexican and DJ Tauko who will play beats to keep the energy high. We will also have three Exhibition battles so come along and enjoy the event!
            If you still want more then stay for the after cypher rave which will continue on through the night!
            HOSTS	– DJ Tauko & Aalto DJ
            LOCATION	– Underpass Otakaari 22 (link)
            TIMING

            PRICE!?
              – Cypher Jam
            14:00 -> 19:00 ( 2pm – 7pm )
            – Exhibition Battles
            15:00 ( 3pm )
            – Rave
            19:00 -> 04:00 ( 7pm – 4am )

            –Free

            CYPHER EXHIBITION BATTLES!
            MARCIN DRE	<-VS->	VIRVA
            INTO	<-VS->	TANSSANTERI
            NOKKAHIIRI	<-VS->	KIITTIS

            RAVE!
            MUSIC– JUNGLE / DUB / DUBSTEP TECHNO"

          />
          <WorkshopCard
            status="past"
            image="/workshop-shuffle.jpg"
            title="Shuffle Workshop"
            date="MARCH 13, 2024"
            teacher="Julia Piironen"
            description="Location – The MutliFacility Hall, Jämeräntaival 3A, Otaniemi
            Workshop Date – 13th of March 2024
            Time – 21.00-22.00 pm
            Price – 15€

            Shuffle teacher Julia Piiroen will arrive in Otaniemi to give us an introduction to shuffle as a dance style. No matter if you are an experienced dancer or just considering starting a dancing hobby, don’t miss this opportunity! "
          />
        </div>

      <div className="workshops-actions">
        <AccentButton text="BACK TO HOME" id ="/#hero" />
      </div>
    </section>
    <Footer />
    </main>
  );
}

export default EventsPage;
