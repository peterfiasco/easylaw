import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import heroImage from '../../assets/images/15554.jpg';

const HeroSection = styled.section`
  width: 1519.20px;
  height: 720px;
  background: #0E0D0C;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1520px) {
    width: 100%;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #0E0D0C 0%, rgba(14, 13, 12, 0.7) 100%);
  }
`;

const ContentContainer = styled.div`
  width: 1447.20px;
  height: 640px;
  left: 36px;
  top: 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1520px) {
    width: calc(100% - 72px);
  }
`;

const MainHeading = styled(motion.h1)`
  width: 703.59px;
  left: 0;
  top: 248px;
  position: absolute;
  color: #FAFAF9;
  font-size: 64px;
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weights.semibold};
  line-height: 76px;
  letter-spacing: -1px;
`;

const SubHeading = styled(motion.p)`
  width: 600px;
  left: 0;
  top: 416px;
  position: absolute;
  color: #FAFAF9;
  font-size: 24px;
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weights.light};
  line-height: 36px;
  opacity: 0.85;
`;

const ButtonGroup = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 512px;
  display: flex;
  gap: 24px;
`;

const PrimaryButton = styled(motion.button)`
  width: 180px;
  height: 56px;
  background: #FAFAF9;
  border-radius: 8px;
  border: none;
  color: #0E0D0C;
  font-size: 18px;
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weights.regular};
  cursor: pointer;
  transition: transform 0.2s ease;
`;

const SecondaryButton = styled(motion.button)`
  width: 180px;
  height: 56px;
  background: transparent;
  border: 2px solid #FAFAF9;
  border-radius: 8px;
  color: #FAFAF9;
  font-size: 18px;
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weights.regular};
  cursor: pointer;
  transition: transform 0.2s ease;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground />
      <ContentContainer>
        <MainHeading
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          The smart way to legal solutions
        </MainHeading>
        <SubHeading
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.85, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where law meets simplicity and innovation – affordable legal solutions, tailored for you
        </SubHeading>
        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </PrimaryButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </SecondaryButton>
        </ButtonGroup>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
