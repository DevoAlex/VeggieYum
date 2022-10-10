import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { device } from "./device";

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
  padding: 0rem 0.8rem;
  display: flex;
  div {
    width: 100%;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  input {
    text-indent: 1rem;
    font-size: 1rem;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
  }
  svg {
    position: relative;
    top: 0.7rem;
    left: 1rem;
    transform: translate(100%, -50%);
  }
  @media ${device.tablet} {
    input {
      padding: 1rem 6rem;
    }
    svg {
      left: 2rem;
    }
  }
  @media ${device.laptopL} {
    input {
      padding: 1rem 10rem;
    }
  }
`;

export default Searchbar;
