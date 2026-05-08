import { Link } from "react-router-dom";
import JoinButton from "../components/Other/joinbutton";
import AccentButton from "../components/Other/accentbutton";
import WorkshopCard from "../components/Other/workshopcard";
import BoardCard from "../components/Other/boardcard";
import ClassCard from "../components/Other/classcard";
import Footer from "../components/navigation/footer";

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
            <JoinButton text="VIEW SCHEDULE" id="/classes#pricing" />
            <AccentButton text="LATEST INFO" id="/events#info" />
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
          <ClassCard
            image="/classes-breaking.jpg"
            title="BREAKING"
            description="Power moves, freezes, and footwork fundamentals"
            id="breaking"
          />
          <ClassCard
            image="/classes-contemporary.jpg"
            title="CONTEMPORARY"
            description="Expressive movement, floor work, artistic technique"
            id="contemporary"
          />
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
            image="/workshop-afro.jpeg"
            title="West African Dance"
            date="MAY 19, 2026"
            teacher="Pauliina Diallo"
            teacherbio="
            Pauliina Diallo has been teaching African dance for over 20 years. Her background also includes contemporary and jazz dance, contact improvisation, and various forms of yoga.
            Pauliina has been involved in numerous productions as a dancer, singer, and producer, and has created several full-length multidisciplinary performances.
            African dance and music are especially close to her heart, and she has deepened her expertise in Guinea by participating in intensive dance and rhythm courses. She has performed with the Finnish-Guinean group Wonuwali as well as at the Finnish National Theatre, around Finland, and even in China." 
            description="
            In this class, you will dance to the rhythms of live drums in a relaxed and welcoming atmosphere – expect grounded movements, joy, sweat, and energy! The movements include bouncing, stomping, jumping, and engaging the whole body.
            West African dance is fun, energetic, and great for improving fitness, while also being easy to approach – no previous experience is needed."
            
          />
          <WorkshopCard
            image="/workshop-improvisation-class.jpg"
            title="Improvisation Class"
            date="NOVEMBER 7, 2025"
            teacher="Amelie Koerbs"
            teacherbio="I’m Amelie and I started dancing contemporary in 2017. Over the years I explored contact, modern, hip hop, ballet, 5-rhythms, and improvisation with different teachers. I use dance as a tool to connect with my body, emotions, and creativity. Improvisation has become something I return to again and again because it creates space to explore and express freely without judgement. This class is about sharing that space together."
            description="This class invites you to get from your head into your body, to arrive in the space, let go of the day, and connect with yourself, others, and your surroundings through movement. We’ll begin by warming up the body, activating the skin, and exploring our physical possibilities and limits. Gradually, we’ll build movement vocabulary through improvisation exercises and floor work. In the final part of the class, we’ll bring it all together, improvising to different kinds of music. To close, we’ll slow down and do our stretches. Practical info: Wear comfortable clothing and long trousers. We’ll be moving both through the space and on the floor. Dancing barefoot is recommended for better grip, but socks are also fine. No shoes needed."
            images={["/workshop-improvisation-class1.jpeg"]}
          />
          <WorkshopCard
            image="/workshop-ravexbreak.jpg"
            title="Rave x Break"
            date="MAY 18, 2024"
            teacher="DJ Tauko & AaltoDJ"
            images={["/workshop-ravexbreak1.jpg"]}
            description="Brief!
            Open cypher jam where you can freestyle to your hearts content along to music supplied by The Mexican and DJ Tauko who will play beats to keep the energy high. We will also have three Exhibition battles so come along and enjoy the event!
            If you still want more then stay for the after cypher rave which will continue on through the night!
            HOSTS	– DJ Tauko & Aalto DJ
            LOCATION	– Underpass Otakaari 22
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
            image="/workshop-shuffle.jpg"
            title="Shuffle Workshop"
            date="MARCH 13, 2024"
            teacher="Julia Piironen"
            description="Location – The MutliFacility Hall, Jämeräntaival 3A, Otaniemi
            Workshop Date – 13th of March 2024
            Time – 21.00-22.00 pm
            Price – 15€

            Shuffle teacher Julia Piironen will arrive in Otaniemi to give us an introduction to shuffle as a dance style. No matter if you are an experienced dancer or just considering starting a dancing hobby, don’t miss this opportunity! "
          />
        </div>

        <div className="workshops-actions">
          <AccentButton text="AND MORE" id="/events#workshop" />
        </div>
      </section>

      <section id="board" className="board-section">
        <div className="board-header">
          <h1 className="h1">MEET THE <span style={{ color: '#5FFFC4' }}>BOARD</span></h1>
          <p className="p">Driving our community forward</p>
        </div>

        <div className="board-grid">
          <BoardCard
            image="/board-veeti.jpg"
            name="Veeti Kittamaa"
            title="Chair"
            description="My name is Veeti and I am the Chair of Polydance! I first joined the board in late 2023, originally handling our marketing, and I’m now honored to lead this amazing community.

            I’m currently on my third year of Information Technology at ELEC. I remember being super hyped when I saw the Polydance stand during my orientation week; I’d been wanting to get back into breaking since I stopped at the age of nine. I've been also doing some DJing at AaltoDJ and love to play videogames! 

            As the Chair, my role has evolved from social media posts to overseeing our general administration and the day-to-day operations of the club. My goal is to ensure everything runs smoothly so that all of the dancers can experience our great classes and teachers."
          />
          <BoardCard
            image="/board-jaakko.jpg"
            name="Jaakko Rapeli"
            title="Secretary"
            description="Jaakko handles the administrative side, ensuring smooth operations and keeping everything organized."
          />
          <BoardCard
            image="/board-amelie.jpg"
            name="Amelie Koerbs"
            title="Artistic director"
            description="Amelie brings artistic vision to Polydance, curating workshops and events that inspire creativity and movement."
          />
          <BoardCard
            image="/board-ino.jpg"
            name="Ino Rupisan"
            title="Marketing person"
            description="Ino manages marketing efforts, spreading the word about Polydance and engaging the community online and offline."
          />
        </div>

      </section>
      <div className="board-bottom">
          <h1 className="h1">READY TO <br />
            <span style={{ color: '#5FFFC4' }}>ELEVATE?</span></h1>
          <p className="p">Join our community and unlock your potential</p>
            <JoinButton text="BOOK YOUR FIRST CLASS" id="/classes#pricing" />
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
