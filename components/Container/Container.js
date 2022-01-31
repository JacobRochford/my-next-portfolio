import { StyledContainer } from "./Container.styled";

const Container = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default Container;