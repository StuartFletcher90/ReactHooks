import React, {useState} from 'react'
import styled from 'styled-components'

const Number = () => {
    const [number, setNumber] = useState(0);
    const [show, setShow] = useState(false);
    return (
    <Container>
    <ButtonContainer>
      <Button onClick = {() => 
      {setNumber(number + 1) 
      setShow(!show)}}>+</Button>
      <Button onClick = {() => setNumber("number - 1")}>-</Button>
    </ButtonContainer>
    <p>{number}</p>
    {show ? <h1>hello</h1> : null}
   </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`
const Button = styled.button`
height: 30px;
width: 60px;
background-color: green;
color: black;
font-size: 18px;
`
const ButtonContainer = styled.div ``;

export default Number;