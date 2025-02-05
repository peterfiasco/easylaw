import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaBuilding, FaFileAlt, FaClipboardCheck, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { typography } from '../../styles/typography';

const SpiralBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    background: conic-gradient(from 0deg, transparent, #FAFAF9);
    animation: rotate 20s linear infinite;
    top: -50%;
    left: -50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    background: conic-gradient(from 180deg, transparent, #FAFAF9);
    animation: rotate 20s linear infinite reverse;
    bottom: -50%;
    right: -50%;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const PageContainer = styled.div`
  background: linear-gradient(180deg, #0E0D0C 0%, #1A1A1A 100%);
  color: #FAFAF9;
  position: relative;
  overflow: hidden;
`;

const Hero = styled.section`
  padding: 120px 0 80px;
  background: linear-gradient(90deg, rgba(14, 13, 12, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%),
              url('/path-to-your-image.jpg') center/cover;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: 'PP Mori', sans-serif;
  font-weight: 500;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #FAFAF9 0%, #E0E0E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const ServiceCard = styled(motion.div)`
  background: #1F1D1A;
  border-radius: 4px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceType = styled.span`
  color: #FAFAF9;
  font-size: 20px;
  font-family: 'PP Mori', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
`;

const ServiceTitle = styled.h3`
  color: #FAFAF9;
  font-size: 56px;
  font-family: 'PP Mori', sans-serif;
  font-weight: 400;
  line-height: 58.8px;
`;

const ServiceDescription = styled.p`
  color: #FAFAF9;
  font-size: 15.75px;
  font-family: 'PP Mori', sans-serif;
  font-weight: 300;
  line-height: 20.8px;
  opacity: 0.9;
`;

const ExploreLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8E8B85;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #FAFAF9;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 24px;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #FAFAF9;
  opacity: 0.8;

  &:before {
    content: "•";
    margin-right: 8px;
    color: ${props => props.theme.colors.accent};
  }
`;

const services = [
  {
    icon: <FaBuilding />,
    type: "Formation",
    title: "Company Formation",
    description: "Complete business registration and incorporation services",
    items: [
      "Limited Liability Companies",
      "NGOs & Cooperatives",
      "Sole Proprietorships",
      "Partnerships",
      "CAC Compliance"
    ]
  },
  {
    icon: <FaFileAlt />,
    type: "Pre-Incorporation",
    title: "Documentation",
    description: "Handle all pre-incorporation requirements",
    items: [
      "TIN Registration",
      "VAT Registration",
      "Business Name Search",
      "Document Preparation",
      "Compliance Check"
    ]
  },
  {
    icon: <FaClipboardCheck />,
    type: "Post-Incorporation",
    title: "Management",
    description: "Comprehensive post-incorporation services",
    items: [
      "Annual Returns Filing",
      "Statutory Updates",
      "Structure Changes",
      "Director Updates",
      "Share Transfers"
    ]
  },
  {
    icon: <FaShieldAlt />,
    type: "Advisory",
    title: "Compliance",
    description: "Expert guidance on compliance and risk",
    items: [
      "Risk Management",
      "Regulatory Tracking",
      "Compliance Monitoring",
      "Risk Mitigation",
      "Advisory Services"
    ]
  }
];

const BusinessRegistration = () => {
    return (
      <PageContainer>
        <SpiralBackground />
      <Hero>
        <Container>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Business Registration & Compliance
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Streamline your business registration process with our comprehensive services.
              We handle everything from company formation to ongoing compliance management.
            </Description>
          </HeroContent>
        </Container>
      </Hero>

      <Container>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceHeader>
                <ServiceType>{service.type}</ServiceType>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceHeader>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceList>
                {service.items.map((item, idx) => (
                  <ServiceItem
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </ServiceItem>
                ))}
              </ServiceList>
              <ExploreLink>
                Explore {service.type} <FaArrowRight />
              </ExploreLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </PageContainer>
  );
};

export default BusinessRegistration;
