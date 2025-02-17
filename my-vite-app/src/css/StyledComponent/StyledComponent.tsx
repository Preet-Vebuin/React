import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: darkblue;
  }
`;

const Wrapper = styled.div`
background-color : pink;
align-Items : center; 
width : 300px;
`;

const Button3 = () => {
    return (<Wrapper>
        <StyledButton>Click Me</StyledButton>
            </Wrapper>);
};

export default Button3;
