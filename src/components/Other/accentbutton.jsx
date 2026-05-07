import { Link } from "react-router-dom";
import "./button.css";

function AccentButton({ text }) {
  return (
    <Link to="/teacher" className="schedule-button h4">
      {text}
    </Link>
  )
}

export default AccentButton
