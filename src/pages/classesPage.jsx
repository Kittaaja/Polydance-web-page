import PricingSection from "../components/Other/pricing.jsx";
import ClassInfo from "../components/Other/classinfo.jsx";
import BookButton from "../components/Other/bookbutton.jsx";
import JoinButton from "../components/Other/joinbutton.jsx";

function ClassesPage() {
  const breakingSchedule = [
    { day: "Monday", time: "19.00 - 20.00", level: "Beginners" },
    { day: "Monday", time: "20.00 - 21.00", level: "Advanced" },
    { day: "Monday", time: "21.00 - 22.00", level: "Open Level" },
  ];
  const breakingDate = "10-Week Course | Starting September 17th, 2026";
  const contemporarySchedule = [
    { day: "Thursday", time: "16.30 - 18.00", level: "Intermediate" },
  ];
  const contemporaryDate = "10-Week Course | Starting September 17th, 2026";
  const webropolLink = "https://link.webropolsurveys.com/S/DC07749A79D3C242";
  return (
    <main>

      <section id="pricing">
        <div className="pricing-header">
        <h1 className="h1">
          CLASS <span style={{ color: "#5FFFC4" }}>SCHEDULE</span>
        </h1>

        <p className="p pricing-subtitle">
          Choose your path. First class is always free to try!
        </p>
        </div>
        <PricingSection />
      </section>

      <section id="breaking" className="class-detail-section">
        <div className="class-detail-card">
          <div className="class-detail-image">
            <img src="/teachers-breaking.jpg" alt="Breaking teacher" />
          </div>
          
          <div className="class-detail-content">
            <div className="class-header">
            <h1 className="h1" style={{ color: '#5FFFC4' }}>BREAKING</h1>
            <p className="h4 teacher">with Vicious</p>
            <p className="p description">Power moves, freezes, and footwork fundamentals</p>
            </div>
            <ClassInfo 
              scheduleData={breakingSchedule}
              location="Multifacility hall - JMT 3C"
              date={breakingDate}
            />

            <div className="what-you-need">
              <h4 className="h3">What You'll Need</h4>
              <ul className="p">
                <li><span className="dot"></span> Clothes where you are comfortable to move</li>
                <li><span className="dot"></span> Indoor shoes if possible</li>
                <li><span className="dot"></span> Water bottle</li>
              </ul>
            </div>

            <BookButton text="BOOK YOUR FIRST CLASS" link={webropolLink} />
          </div>
        </div>
      </section>

      <section id="contemporary" className="class-detail-section">
        <div className="class-detail-card">
          <div className="class-detail-image">
            <img src="/teachers-contemporary.jpg" alt="Contemporary teacher" />
          </div>
          
          <div className="class-detail-content">
            <div className="class-header">
            <h1 className="h1" style={{ color: '#5FFFC4' }}>CONTEMPORARY</h1>
            <p className="h4 teacher">with Eero</p>
            <p className="p description">Expressive movement, floor work, and artistic technique</p>
            </div>
            <ClassInfo 
              scheduleData={contemporarySchedule}
              location="Multifacility hall - JMT 3C"
              date={contemporaryDate}
            />

            <div className="what-you-need">
              <h4 className="h3">What You'll Need</h4>
              <ul className="p">
                <li><span className="dot"></span> Clothes where you are comfortable to move</li>
                <li><span className="dot"></span> Open mind to try out different things!</li>
                <li><span className="dot"></span> Water bottle</li>
              </ul>
            </div>

            <BookButton text="BOOK YOUR FIRST CLASS" link={webropolLink} />
          </div>
        </div>
      </section>
    </main>
    
  )
}

export default ClassesPage
