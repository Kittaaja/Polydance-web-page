import { HashLink } from "react-router-hash-link";
import "./button.css";

function JoinButton({text}) {
  return (
    <HashLink to="/teacher" className="join-button h4">
      {text}
    </HashLink>
  )
}

export default JoinButton
