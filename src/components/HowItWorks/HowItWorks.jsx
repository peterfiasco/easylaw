import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaFileAlt, FaKeyboard, FaMagic, FaDownload } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f6f9fc 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-family: ${theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${theme.colors.gradient};
    z-index: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    
    &::after {
      display: none;
    }
  }
`;

const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
`;

const IconBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${theme.colors.secondary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const StepTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const StepDescription = styled.p`
  font-family: ${theme.fonts.body};
  color: #64748b;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  margin-top: 4rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 50px;
  background: ${theme.colors.gradient};
  color: white;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Choose Template",
    description: "Select from our extensive library of legal document templates"
  },
  {
    icon: <FaKeyboard />,
    title: "Input Information",
    description: "Fill in your details through our smart form interface"
  },
  {
    icon: <FaMagic />,
    title: "AI Generation",
    description: "Our AI engine creates your customized document instantly"
  },
  {
    icon: <FaDownload />,
    title: "Review & Download",
    description: "Review, make adjustments, and download your document"
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How It Works
        </Title>

        <StepsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <Step key={index} variants={itemVariants}>
              <IconBox
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </IconBox>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </StepsContainer>

        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get Started
        </CTAButton>
      </Container>
    </Section>
  );
};

export default HowItWorks;
