import { HashLink } from "react-router-hash-link";
import "./button.css";

function AccentButton({ text, id }) {
  return (
    <HashLink to={id} className="schedule-button h4">
      {text}
    </HashLink>
  )
}

export default AccentButton
