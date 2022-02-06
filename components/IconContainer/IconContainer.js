import Link from 'next/link';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillFileText,
  AiOutlineMail,
} from 'react-icons/ai';
import SocialIcons from '../SocialIcons/SocialIcons';
import { StyledIconContainer } from './IconContainer.styled';

const IconContainer = () => {
  return (
    <StyledIconContainer>
      <SocialIcons
        target="_blank"
        href="https://linkedin.com/in/Jacob-Rochford/"
        rel="noopener noreferrer"
        title="Jacob's LinkedIn"
      >
        <AiOutlineLinkedin />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://github.com/JacobRochford/"
        rel="noopener noreferrer"
        title="Jacob's GitHub"
      >
        <AiFillGithub />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://1drv.ms/w/s!AgTm-w-g01XXgqtbWsBhC-ezJ6In3w?e=9PBA6X"
        rel="noopener noreferrer"
        title="Jacob's Resume"
      >
        <AiFillFileText />
      </SocialIcons>
      <Link href="/contact" passHref>
        <div>
          <SocialIcons title="Contact Me">
            <AiOutlineMail />
          </SocialIcons>
        </div>
      </Link>
    </StyledIconContainer>
  );
};

export default IconContainer;
