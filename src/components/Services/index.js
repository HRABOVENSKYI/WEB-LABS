import React from "react";

import Icon1 from "../../images/cat-icon.svg";
import Icon2 from "../../images/fish-bowl.svg";
import Icon3 from "../../images/bear.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Our Logo</ServicesH2>
          <ServicesP>
            San Diego Zoo Wildlife Alliance is committed to saving species
            worldwide by uniting our expertise in animal care.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Our Name</ServicesH2>
          <ServicesP>
            Our organization, formerly named San Diego Zoo Global, is moving in
            a new direction and evolving into an alliance.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Our Work</ServicesH2>
          <ServicesP>
            Working collaboratively with our committed partners, we contribute
            to larger.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
