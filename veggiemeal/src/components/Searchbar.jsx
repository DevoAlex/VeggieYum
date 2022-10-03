import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + query);
  };


return (
  <Sform onSubmit={submitHandler}>
    <div>
      <FaSearch onClick={submitHandler} />
      <input
        type="text"
        placeholder="Search your next recipe..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  </Sform>
);
}

const Sform = styled.form`
  margin: 0rem 1rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    text-indent: 1rem;
    font-size: 1rem;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

export default Searchbar;
