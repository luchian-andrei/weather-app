import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ nameProvider }) {
  const [value, setValue] = useState("");

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter your city..."
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={() => nameProvider(value)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
