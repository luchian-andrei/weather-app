import { useState } from "react";

export default function SearchBar({ nameProvider }) {
  const [value, setValue] = useState("");

  return (
    <div className="SearchBar">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button type="submit" onClick={() => nameProvider(value)}>
        Search
      </button>
    </div>
  );
}
