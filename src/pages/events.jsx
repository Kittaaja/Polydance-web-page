import { Link } from "react-router-dom";
import WorkshopCard from "../components/Other/workshopcard.jsx";
import InfoCard from "../components/Other/infocard.jsx"; 
import AccentButton from "../components/Other/accentbutton.jsx";
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
          date="AUGUST 17, 2026"
          title="Sign up for the Autumn semester is now open!"
          text="The sign-up for the Autumn semester is now open! Secure your spot now in our classes. First class is always free to try!"
        />
        <InfoCard 
          date="AUGUST 26–27, 2026"
          title="See us at Otasuunnistus!"
          text="We'll be participating in Otasuunnistus to promote Polydance. Come and say hi!"
        />

        <InfoCard 
          date="SEPTEMBER 1, 2026"
          title="See us at Aalto Day One!"
          text="We'll be participating in Aalto Day One to promote Polydance. Come and say hi!"
        />

        <InfoCard 
          date="SEPTEMBER 12, 2026"
          title="See you at Otadance!"
          text="We'll be participating in Otadance on September 12th. Come join us and enjoy the event!"
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
            image="/event-otadance-26.jpg"
            title="OtaDance Night"
            date="SEPTEMBER 12, 2026"
            teacher="CSSADANCE • Polydance • Aalto Salsa Society • Otanko"
            description="✨ Finally, OtaDance Night is here again! ✨

            Otaniemi is home to many amazing dance associations — but which one should you join? This annual event brings together CSSADANCE, Polydance, Aalto Salsa Society, and Otanko for an evening of performances, dance, and inspiration!

            From Chinese dance, K-pop, Pole dance, Breaking, Salsa to Bachata — there’s something for everyone!

            📍 WHERE?
            Aalto Design Factory, Puumiehenkuja 5
            🗓️ WHEN?
            12/09/2026, 19:00–21:00
            🎟️ PRICE?
            FREE!

            The event is free, but tickets are limited. Secure yours now — and see you there! ✨

            Tickets here
            Follow CSSADANCE on Instagram here
            Follow CSSADANCE on Telegram! https://t.me/cssadance
            See CSSADANCE Youtube videos here

            Questions?
            communications@cssadance.fi"
          />
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
            image="/event-ravexbreak.jpg"
            title="Rave x Break"
            date="MAY 18, 2024"
            teacher="DJ Tauko & AaltoDJ"
            images={["/event-ravexbreak1.jpg"]}
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
    </main>
  );
}

export default EventsPage;
