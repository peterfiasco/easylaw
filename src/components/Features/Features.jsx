import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaRobot, FaShieldAlt, FaCog, FaChartLine, FaLightbulb, FaSync, FaPiggyBank, FaArrowDown, FaRocket  } from 'react-icons/fa';
import { typography } from '../../styles/typography';

const FeaturesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #FAFAF9 0%, #F3F3F3 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-family: ${typography.fontFamily};
  font-size: 48px;
  font-weight: 600;
  color: #0E0D0C;
  margin-bottom: 24px;
`;

const Subtitle = styled(motion.p)`
  font-family: ${typography.fontFamily};
  font-size: 20px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0E0D0C, #2A2A2A);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
const ActionCard = styled(motion.div)`
  background: linear-gradient(135deg, #0E0D0C 0%, #2A2A2A 100%);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #FAFAF9;
  cursor: pointer;
`;

const BounceWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 16px;
`;

const ActionTitle = styled.h3`
  font-family: ${typography.fontFamily};
  font-size: 24px;
  font-weight: 600;
  color: #FAFAF9;
  text-align: center;
`;
const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: linear-gradient(135deg, #0E0D0C 0%, #2A2A2A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FAFAF9;
  font-size: 24px;
  margin-bottom: 24px;
  transition: transform 0.3s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const FeatureTitle = styled.h3`
  font-family: ${typography.fontFamily};
  font-size: 24px;
  font-weight: 600;
  color: #0E0D0C;
  margin-bottom: 16px;
`;

const FeatureDescription = styled.p`
  font-family: ${typography.fontFamily};
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 24px;
`;

const features = [
    {
      icon: <FaRobot />,
      title: "AI-Powered Legal Automation",
      description: "Generate and customize legal documents instantly with our advanced AI technology, ensuring accuracy and compliance."
    },
    {
      icon: <FaShieldAlt />,
      title: "Real-Time Compliance Monitoring",
      description: "AI tools continuously monitor business operations, identifying risks and flagging compliance issues proactively."
    },
    {
      icon: <FaCog />,
      title: "Intuitive Smart Workflows",
      description: "Experience seamless legal processes with our AI-enhanced platform, offering intuitive workflows and real-time guidance."
    },
    {
      icon: <FaChartLine />,
      title: "AI-Driven Insights",
      description: "Get bespoke solutions for unique legal challenges with our AI-powered analytics and recommendations."
    },
    {
      icon: <FaLightbulb />,
      title: "Instant Legal Guidance",
      description: "Access real-time legal advice through our AI assistant, available 24/7 for immediate consultation."
    },
    {
      icon: <FaSync />,
      title: "Always Up-to-Date",
      description: "Stay current with automatically updated legal content based on the latest laws and regulations."
    },
    {
      icon: <FaPiggyBank />,
      title: "Affordable Solutions",
      description: "Access high-quality legal services at competitive prices through our AI-powered platform."
    }
  ];
  
  const Features = () => {
    const bounceAnimation = {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  
    const floatAnimation = {
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    };
  
    return (
      <FeaturesSection>
        <Container>
          <SectionHeader>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose EasyLaw?
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Harness the power of AI for smarter, faster, and more affordable legal solutions
            </Subtitle>
          </SectionHeader>
          <Grid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <IconWrapper>{feature.icon}</IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
            
            <ActionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BounceWrapper animate={bounceAnimation}>
                <FaArrowDown />
              </BounceWrapper>
              <ActionTitle>Explore More</ActionTitle>
            </ActionCard>
  
            <ActionCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BounceWrapper animate={floatAnimation}>
                <FaRocket />
              </BounceWrapper>
              <ActionTitle>Get Started</ActionTitle>
            </ActionCard>
          </Grid>
        </Container>
      </FeaturesSection>
    );
  };
  
  export default Features;