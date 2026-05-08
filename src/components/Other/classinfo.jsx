import "./classinfo.css";


function ClassInfo({ scheduleData, location }) {
  return (
    <div className="weekly-schedule">
      <div className="schedule-header">
        <img src="/calendar-icon.svg" alt="Calendar" className="schedule-icon" />
        <h4 className="h2">Weekly Schedule</h4>
      </div>
      
      <div>
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-row">
            <div className="schedule-day-time">
              <span className="dot"></span>
              <span className="p">{item.day}</span>
              <span className="p">|</span>
              <span className="p">{item.time}</span>
            </div>
            <span className={"h4 level-tag"}>
              {item.level.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div className="schedule-location">
        <img src="/icon-location.svg" alt="Location" className="location-icon" />
        <p className="p">{location}</p>
      </div>
    </div>
  );
}

export default ClassInfo;