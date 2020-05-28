import styled from 'styled-components'
//App
export const ContainerDiv = styled.div`
display:flex;
flex-direction: column;
width: 100%;
font-size: 62.5%;
font-family: 'Nunito', sans-serif;
background-color: #FEFEFE;
height: 100%;
margin: 0 auto;
padding: 0;
`

//Navbar

export const NavbarDiv = styled.div`
background: #333;
display: flex;
flex-wrap: nowrap;
justify-content: flex-end;
width: 100%;
padding: 1% 0;
`

export const NavbarUl = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
font-size: 1.2rem;
overflow: hidden;
`
export const NavbarLi = styled.li`
display: inline;
text-align: right;
font-family: 'Nunito', sans-serif;
color: #FEFEFE;

`
//work on Nav links
export const NavbarLink = styled.a`
color: #FEFEFE;
`
//Forms
export const ContainerFormDiv = styled.div`
width: 40%;
font-family: 'Nunito', sans-serif;
background-color: #FEFEFE;
margin: 0 auto;
padding: 0;
`

export const StyleInput = styled.input`
font-size: 1rem;
font-family: 'Nunito', sans-serif;
letter-spacing: .1rem;
display: block;
width: 90%;
padding: 0.4rem;
border: 1px solid #333;
margin: 2% auto;
`
export const StyleLabel = styled.label`
font-size: 1rem;
font-family: 'Nunito', sans-serif;
`
//error div text
export const StyleError = styled.div`
font-size: 1rem;
text-align: center;
color: red;
line-height: 1.2rem;
background-color: lightgrey;
`

//other text in P tag
export const StyleP = styled.p`
font-size: 1rem;
text-align: center;
`
//buttons

export const StyleBtns = styled.button`
    font-size: 1rem;
    color: #F3F3F3;
    background-color: #E84C3D;
    padding: 1.5% 3%;
    border: 1px solid #333333;
    border-radius: 2px;
    margin: 1%;
`