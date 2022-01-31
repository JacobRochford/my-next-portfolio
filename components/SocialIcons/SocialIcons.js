import { StyledSocialIcons } from "./SocialIcons.styled";

const SocialIcons = ({children, href, rel, target, title}) => {
  return (
    <StyledSocialIcons
      href={href}
      rel={rel}
      target={target}
      title={title}
    >
      {children}
    </StyledSocialIcons>
  );
}

export default SocialIcons;
