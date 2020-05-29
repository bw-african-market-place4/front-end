import styled from "styled-components";
import { Link } from "react-router-dom";

//App
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 62.5%;
  font-family: "Nunito", sans-serif;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 0;
`;

//Navbar

export const NavbarDiv = styled.div`

background: #333;
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
width: 100%;
padding: 1% 0;
margin: 0;
`

export const NavbarUl = styled.ul`
list-style-type: none;
display: flex;
font-size: 1rem;
padding:0;
margin: 0;
`
export const NavbarLi = styled.li`
font-family: 'Nunito', sans-serif;
color: #FEFEFE;
`
//style on Nav links
export const NavbarLink = styled(Link)`
color: #FEFEFE;
display: block;
text-decoration: none;
padding: .6rem 1rem;
transition: all .5s ease;


  &:focus,
  &:hover,
  &:active {
    color: #e84c3d;
  }
`;
//Forms
export const ContainerFormDiv = styled.div`
  width: 40%;
  font-family: "Nunito", sans-serif;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 0;
`;

export const StyleInput = styled.input`
font-size: 1rem;
font-family: 'Nunito', sans-serif;
letter-spacing: .1rem;
display: block;
width: 90%;
padding: 0.4rem;
border: 1px solid #333;
border-radius: 2px;
margin: 2% auto;

}
`;
export const StyleLabel = styled.label`
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
`;
//error div text
export const StyleError = styled.div`
  font-size: 1rem;
  text-align: center;
  color: red;
  line-height: 1.2rem;
  background-color: lightgrey;
`;

//other text in P tag
export const StyleP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
//buttons

export const StyleBtns = styled.button`

    font-size: 1.2rem;
    color: #F3F3F3;
    background-color: #E84C3D;
    padding: 1.5% 3%;
    border: 1px solid #333333;
    border-radius: 2px;
    margin: 1%;
    transition: all .5s ease;

  &:hover,
  &:active {
    background-color: #333333;
  }
`;

//style the Links not in Navbar
export const StyleLink = styled(Link)`
  text-decoration: none;

  color: #E84C3D;
  transition: all .5s ease;


  &:hover,
  &:active {
    color: #333333;
  }
`;
