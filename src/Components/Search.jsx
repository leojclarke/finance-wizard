import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <>
      <input type="text" placeholder="Search transactions..." />{" "}
      <button type="submit">Search</button>
    </>
  );
}
