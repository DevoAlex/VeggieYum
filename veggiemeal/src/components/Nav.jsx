import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar>
        <Link to="#">
          <Bars onClick={showSidebar} />
        </Link>
      </Navbar>
      <Sidebar>
        <ul onClick={showSidebar}>
          <li>
            <Link to="#">
              <AiOutlineClose />
            </Link>
          </li>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/saved">
              <p>Saved</p>
            </Link>
          </li>
          <li>
            <Link to="/vegan">
              <p>Vegan</p>
            </Link>
          </li>
          <li>
            <Link to="/glutenfree">
              <p>Gluten</p>
            </Link>
          </li>
          <li>
            <Link to="/fast">
              <p>Fast</p>
            </Link>
          </li>

        </ul>
      </Sidebar>

      
    </>
  );
}

const Navbar = styled.div`
  border: 1px solid red;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
`;

const Sidebar = styled.nav``;

const Bars = styled(FaBars)`
  height: 25px;
  width: 30px;
  color: white;
`;

export default Nav;
