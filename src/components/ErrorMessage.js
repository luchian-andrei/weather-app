import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorMessage() {
  return (
    <div className="ErrorPage">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        style={{ color: "yellow", fontSize: "60px" }}
      />
      <h2>Unknown city</h2>
      <h4>Please provide a valid city name</h4>
    </div>
  );
}
