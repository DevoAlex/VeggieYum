import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import veganIcon from "../images/vegan-icon.png";
import { AiFillHome } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import glutenIcon from "../images/gluten-icon.png";
import dairyIcon from "../images/dairy-icon.png";
import { device } from "./device";

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
          <div>
            <Slink to="#">
              <AiOutlineClose style={{ height: "1.2rem", width: "1.2rem" }} />
              <p>Close</p>
            </Slink>

            <Slink to="/">
              <AiFillHome />
              <p>Home</p>
            </Slink>

            <Slink to="/favorites">
              <MdFavorite />
              <p>Favorites</p>
            </Slink>

            <Slink to="/fast">
              <BsClock />
              <p>Fast</p>
            </Slink>

            <Slink to="/vegan">
              <img src={veganIcon} />
              <p>Vegan</p>
            </Slink>

            <Slink to="/glutenfree">
              <img src={glutenIcon} />
              <p>Gluten free</p>
            </Slink>
          </div>
          <div>
            <Swrapper>
              <h4>Legend</h4>
            </Swrapper>
            <Swrapper>
              <img src={veganIcon} />
              <p>= Vegan</p>
            </Swrapper>
            <Swrapper>
              <img src={glutenIcon} />
              <p>= Gluten free</p>
            </Swrapper>
            <Swrapper>
              <img src={dairyIcon} />
              <p>= Dairy free</p>
            </Swrapper>
          </div>
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

  width: 100%;
`;

const SSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media ${device.tablet} {
    width: 16rem;
    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0rem;
      }
      to {
        opacity: 1;
        width: 16rem;
      }
    }
    @media ${device.desktop} {
      width: 18rem;
      @keyframes showSidebar {
        from {
          opacity: 0;
          width: 0rem;
        }
        to {
          opacity: 1;
          width: 18rem;
        }
      }
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

  @media ${device.tablet} {
    margin-left: 1.5rem;
  }
`;

const Swrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 1rem;
  text-decoration: none;
  color: white;
  margin-top: -1.5rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media ${device.tablet} {
    margin-left: 1.5rem;
  }
`;

export default Nav;
