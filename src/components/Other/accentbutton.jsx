import { Link } from "react-router-dom";
import "./button.css";

function AccentButton({ text, id }) {
  return (
    <Link to={`/events#${id}`} className="schedule-button h4">
      {text}
    </Link>
  )
}

export default AccentButton
