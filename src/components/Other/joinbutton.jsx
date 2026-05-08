import { HashLink } from "react-router-hash-link";
import "./button.css";

function JoinButton({text, id}) {
  return (
    <HashLink to={id} className="join-button h4">
      {text}
    </HashLink>
  )
}

export default JoinButton
