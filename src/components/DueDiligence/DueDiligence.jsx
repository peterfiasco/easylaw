import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaSearch, FaBuilding, FaFileAlt, FaCheck, FaArrowRight, FaUpload } from 'react-icons/fa';

const PageContainer = styled.div`
  background: #0E0D0C;
  color: #FAFAF9;
  min-height: 100vh;
  position: relative;
`;

const HeroSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(14, 13, 12, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #FAFAF9 0%, #E0E0E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
`;

const CTAButton = styled(motion.button)`
  font-family: 'PP Mori', sans-serif;
  padding: 16px 32px;
  background: ${props => props.primary ? '#FAFAF9' : 'transparent'};
  color: ${props => props.primary ? '#0E0D0C' : '#FAFAF9'};
  border: ${props => props.primary ? 'none' : '1px solid #FAFAF9'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ServiceSection = styled.section`
  padding: 120px 0;
  background: #1A1A1A;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  margin-top: 64px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: #1F1D1A;
  border-radius: 12px;
  padding: 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #FAFAF9, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #FAFAF9;
  margin-bottom: 24px;
`;

const ServiceTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #FAFAF9;
  margin-bottom: 16px;
`;

const ServiceDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #8E8B85;
  margin-bottom: 32px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: #FAFAF9;
  font-family: 'PP Mori', sans-serif;

  svg {
    color: #FAFAF9;
    font-size: 18px;
  }
`;
const UploadSection = styled.div`
  margin-top: 32px;
`;

const UploadBox = styled(motion.div)`
  border: 2px dashed #2A2A2A;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #FAFAF9;
  }
`;

const ProcessSection = styled.section`
  padding: 120px 0;
  background: #FAFAF9;
  color: #0E0D0C;
`;
const ProcessTitle = styled(motion.h2)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  margin-bottom: 24px;
  text-align: center;
  color: #0E0D0C;
`;
const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 64px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled(motion.div)`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -12px;
    width: 24px;
    height: 2px;
    background: linear-gradient(90deg, #FAFAF9, transparent);
    opacity: 0.2;

    @media (max-width: 968px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #FAFAF9;
  margin: 0 auto 24px;
  font-family: 'PP Mori', sans-serif;
`;

const StepTitle = styled.h4`
  font-family: 'PP Mori', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #FAFAF9;
  margin-bottom: 12px;
`;

const StepDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #8E8B85;
`;
const services = [
    {
      icon: <FaBuilding />,
      title: "Land & Property Verification",
      description: "We conduct comprehensive land and property verification services, ensuring the property is free from encumbrances and has valid title documents before purchase.",
      features: [
        "Ownership Authentication",
        "Encumbrance Check",
        "Title Document Validation"
      ]
    },
    {
      icon: <FaFileAlt />,
      title: "Company Due Diligence",
      description: "We conduct a thorough investigation of a company's legal standing, compliance status, and key financial details to ensure risk-free business transactions.",
      features: [
        "Legal Standing & Compliance Review",
        "Financial & Risk Assessment",
        "Corporate Records Verification"
      ]
    }
  ];
  
  const processSteps = [
    {
      number: "01",
      title: "Upload Details",
      description: "Upload land or company details for verification"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI scans legal databases & official records"
    },
    {
      number: "03",
      title: "Get Report",
      description: "Receive comprehensive report with risk analysis"
    },
    {
      number: "04",
      title: "Expert Guidance",
      description: "Take action with expert guidance"
    }
  ];
  
  const DueDiligence = () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      }
    };
  
    return (
      <PageContainer>
        <HeroSection>
          <Container>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Due Diligence & Verification
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Eliminate risks before making legal or financial commitments. Our AI-driven due diligence ensures your property and business transactions are secure.
              </Subtitle>
              <motion.div style={{ display: 'flex', justifyContent: 'center' }}>
  <CTAButton
    primary
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Started <FaArrowRight />
  </CTAButton>
</motion.div>

            </HeroContent>
          </Container>
        </HeroSection>
        <ServiceSection>
        <Container>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <FeaturesList>
                  {service.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <FaCheck /> {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
                <UploadSection>
                  <UploadBox
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaUpload size={24} />
                    <p>Upload documents for instant AI review</p>
                  </UploadBox>
                </UploadSection>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </Container>
      </ServiceSection>

      <ProcessSection>
  <Container>
    <ProcessTitle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      How It Works
    </ProcessTitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <Step
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Step>
            ))}
          </ProcessSteps>
        </Container>
      </ProcessSection>

      <ServiceSection as="section" style={{ background: '#0E0D0C' }}>
        <Container>
          <HeroContent>
            <Title
              as="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Start Your Due Diligence Today!
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Don't take risks—let us verify your business or property before you commit.
            </Subtitle>
            <motion.div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CTAButton primary whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Verified Now
              </CTAButton>
              <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contact Support
              </CTAButton>
            </motion.div>
          </HeroContent>
        </Container>
      </ServiceSection>
    </PageContainer>
  );
};

export default DueDiligence;
