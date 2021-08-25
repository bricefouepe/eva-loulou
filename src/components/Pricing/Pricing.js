import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nos Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Soins de visage</PricingCardPlan>
                <PricingCardCost>20 000 FCFA</PricingCardCost>
                <PricingCardLength />
                <PricingCardLength />
                <PricingCardFeatures>
                  <PricingCardFeature>Masque</PricingCardFeature>
                  <PricingCardFeature>Contour des yeux</PricingCardFeature>
                  <PricingCardFeature>Soins anti-tache</PricingCardFeature>
                  <PricingCardFeature>Hydratant & nourrissant</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>En savoir plus</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Soins de corps</PricingCardPlan>
                <PricingCardCost>30 000 FCFA</PricingCardCost>
                <PricingCardLength/>
                <PricingCardLength/>
                <PricingCardFeatures>
                  <PricingCardFeature>Masque</PricingCardFeature>
                  <PricingCardFeature>Contour des yeux</PricingCardFeature>
                  <PricingCardFeature>Soins anti-tache</PricingCardFeature>
                  <PricingCardFeature>Hydratant & nourrissant</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>En savoir plus</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Soins visage corps</PricingCardPlan>
                <PricingCardCost>40 000 FCFA</PricingCardCost>
                <PricingCardLength/>
                <PricingCardLength/>
                <PricingCardFeatures>
                  <PricingCardFeature>Masque</PricingCardFeature>
                  <PricingCardFeature>Contour des yeux</PricingCardFeature>
                  <PricingCardFeature>Soins anti-tache</PricingCardFeature>
                  <PricingCardFeature>Hydratant & nourrissant</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>En savoir plus</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
