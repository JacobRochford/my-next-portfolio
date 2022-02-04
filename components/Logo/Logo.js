import Link from 'next/link';
import React from 'react';
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return <StyledLogo>
    <Link href='/'>
    {"{ ...JR }"}    
    </Link>
  </StyledLogo>;
};

export default Logo;
