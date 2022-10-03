import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import vegan from '../images/vegetarian.png'
import home from '../images/home.png'
import fast from '../images/fast.png'
import star from '../images/star.png'
import glutenFree from '../images/gluten-free.png'


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
        <Link to='/'>
          <h2>Title here</h2>
        </Link>
      </Navbar>
      {isOpen ? (
        <SSidebar isOpen={isOpen} onClick={showSidebar}>
          <SSlink to="#">
            <AiOutlineClose style={{height: '20px', width: '20px'}}/>
            <p>Close</p>
          </SSlink>

          <SSlink to="/">
          <img src={home} />
            <p>Home</p>
          </SSlink>

          <SSlink to="/saved">
          <img src={star} />
            <p>Saved</p>
          </SSlink>

          <SSlink to="/vegan">
          <img src={vegan} />
            <p>Vegan</p>
          </SSlink>

          <SSlink to="/glutenfree">
          <img src={glutenFree} />
            <p>Gluten</p>
          </SSlink>

          <SSlink to="/fast">
          <img src={fast} />
            <p>Fast</p>
          </SSlink>
        </SSidebar>
      ) : (
        ""
      )}
    </>
  );
}

const Navbar = styled.div`
  border: 1px solid red;
  display: flex;
  color: white;
  align-items: center;
  gap: 20px;
  margin: 0px 20px;
`;

const SSidebar = styled.div`
  background-color: #307351;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 200px;
  z-index: 1;
  left: ${props => props.isOpen ? '0' : '-100%'};
  animation: showSidebar .4s;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }}
`;

const Bars = styled(FaBars)`
  height: 25px;
  width: 30px;
 
  cursor: pointer;
  text-align: center;
`;

const SSlink = styled(Link)`
display: flex;
align-items: center;
gap: 10px;
margin-left: 15px;
img {
  width: 20px;
  height: 20px;
}
&:hover {
  color: white;
}
`

export default Nav;
