import { Link } from "react-router-dom";
import "./button.css";

function JoinButton() {
  return (
    <Link to="/teacher" className="join-button h4">
      JOIN NOW
    </Link>
  )
}

export default JoinButton
