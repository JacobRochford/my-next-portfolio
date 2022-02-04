import React from 'react';
import { StyledSection } from './Section.styled';

const Section = ({children}) => {
  return <StyledSection>
    {children}
  </StyledSection>;
};

export default Section;
