import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am open to work. I am a Senior level developer which can make things easy and build awesome looking and fuctional Web and Mobile Apps for fun.
        </SectionText>
        <a style={{ textDecoration: "none", color: "inherit" }} href={"https://github.com/arham1999"}><Button>Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;