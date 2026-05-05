import { Link } from "react-router-dom";
import "./button.css";

function JoinButton({text}) {
  return (
    <Link to="/teacher" className="join-button h4">
      {text}
    </Link>
  )
}

export default JoinButton
