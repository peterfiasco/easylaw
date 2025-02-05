import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaRobot, FaBuilding, FaFileAlt, FaSearch, FaShieldAlt, FaBell } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  background: #FAFAF9;
`;

const HeroSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0E0D0C 0%, #1A1A1A 100%);
  color: #FAFAF9;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled(motion.h1)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 24px;
`;

const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TwoColumnSection = styled.section`
  padding: 120px 0;
  background: #FAFAF9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div`
  color: #0E0D0C;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'PP Mori', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #0E0D0C;
`;

const Text = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 32px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  padding: 120px 0;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #0E0D0C 0%, #1A1A1A 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #FAFAF9;
  margin-bottom: 24px;
`;

const ServiceTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #0E0D0C;
`;

const ServiceDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  color: #64748b;
  line-height: 1.6;
`;
const services = [
    {
      icon: <FaBuilding />,
      title: "Business Registration & Compliance",
      description: "Register LLCs, NGOs, Cooperatives, and handle pre/post-incorporation services including TIN, VAT, and Annual Returns."
    },
    {
      icon: <FaFileAlt />,
      title: "Legal Documents & AI Review",
      description: "Generate customizable legal documents with AI-powered review for compliance and accuracy."
    },
    {
      icon: <FaSearch />,
      title: "Due Diligence & Risk Assessment",
      description: "Comprehensive verification for land, property, and company legal standing assessment."
    },
    {
      icon: <FaShieldAlt />,
      title: "Intellectual Property Protection",
      description: "Complete IP services including trademark, patent, copyright registration and dispute resolution."
    },
    {
      icon: <FaBell />,
      title: "Automated Compliance Monitoring",
      description: "AI-driven alerts and monitoring system for legal and regulatory compliance."
    }
  ];
  
  const aiFeatures = [
    {
      icon: <FaRobot />,
      title: "Instant Legal Advice",
      description: "Get AI-powered legal guidance anytime, anywhere based on Nigerian laws and regulations."
    },
    {
      icon: <FaFileAlt />,
      title: "Smart Document Generation",
      description: "Create legal documents instantly using intelligent templates and AI assistance."
    },
    {
      icon: <FaBell />,
      title: "Compliance Monitoring",
      description: "Automated system to track and alert you about regulatory requirements and deadlines."
    }
  ];
  const About = () => {
    return (
      <AboutSection>
        <HeroSection>
          <Container>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simplifying Legal Solutions with AI
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where innovation meets legal expertise
            </Subtitle>
          </Container>
        </HeroSection>
  
        <TwoColumnSection>
          <Container>
            <Grid>
              <Content>
                <SectionTitle
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Who We Are
                </SectionTitle>
                <Text>
                  Easy Law Solutions is a legal tech platform that leverages AI to provide affordable and efficient legal services. Our AI assistant uses a comprehensive database of Nigerian laws and regulations to offer instant, tailored legal guidance.
                </Text>
              </Content>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* AI Animation Placeholder */}
              </motion.div>
            </Grid>
          </Container>
        </TwoColumnSection>
  
        <Container>
          <SectionTitle
            style={{ textAlign: 'center', marginBottom: '64px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AI Legal Assistance
          </SectionTitle>
          <ServicesGrid>
            {aiFeatures.map((feature, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                <IconWrapper>{feature.icon}</IconWrapper>
                <ServiceTitle>{feature.title}</ServiceTitle>
                <ServiceDescription>{feature.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
  
        <Container>
          <SectionTitle
            style={{ textAlign: 'center', marginBottom: '64px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </AboutSection>
    );
  };
  
  export default About;
  