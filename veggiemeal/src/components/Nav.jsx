import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import vegan from "../images/vegetarian.png";
import home from "../images/home.png";
import fast from "../images/fast.png";
import star from "../images/star.png";
import glutenFree from "../images/gluten-free.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar>
        <Link to="#">
          <Bars onClick={showSidebar} />
        </Link>
        <Slink to="/">
          <Title>VeggieYum</Title>
        </Slink>
      </Navbar>
      {isOpen ? (
        <SSidebar isOpen={isOpen} onClick={showSidebar}>
          <Slink to="#">
            <AiOutlineClose style={{ height: "20px", width: "20px" }} />
            <p>Close</p>
          </Slink>

          <Slink to="/">
            <img src={home} />
            <p>Home</p>
          </Slink>

          <Slink to="/favorites">
            <img src={star} />
            <p>Favorites</p>
          </Slink>

          <Slink to="/vegan">
            <img src={vegan} />
            <p>Vegan</p>
          </Slink>

          <Slink to="/glutenfree">
            <img src={glutenFree} />
            <p>Gluten</p>
          </Slink>

          <Slink to="/fast">
            <img src={fast} />
            <p>Fast</p>
          </Slink>
        </SSidebar>
      ) : (
        ""
      )}
    </>
  );
}

const Title = styled.h2`
  font-family: "Concert One", cursive;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  margin-left: 0.5rem;
  color: white;
`;

const Navbar = styled.div`
  display: flex;
  color: white;
  align-items: center;
  gap: 20px;
  background-color: #01121c;
  width: 100%;
`;

const SSidebar = styled.div`
  background-color: #01121c;
  position: fixed;
  height: 100%;
  top: 0rem;
  left: 0rem;
  width: 12.5rem;
  z-index: 1;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0rem;
    }
    to {
      opacity: 1;
      width: 12.5rem;
    }
  }
`;

const Bars = styled(FaBars)`
  height: 1.8rem;
  width: 1.8rem;
  color: white;
  cursor: pointer;
  text-align: center;
  padding-left: 1.5rem;
`;

const Slink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
  text-decoration: none;
  color: white;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export default Nav;
