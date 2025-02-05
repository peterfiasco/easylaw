import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { 
  FaFileAlt, 
  FaRobot, 
  FaCheck, 
  FaArrowRight, 
  FaUpload, 
  FaShieldAlt,
  FaFileContract,
  FaHandshake,
  FaHome,
  FaClock,
  FaLock,
  FaMoneyBill
} from 'react-icons/fa';

const PageContainer = styled.div`
  background: #0E0D0C;
  color: #FAFAF9;
  min-height: 100vh;
  position: relative;
`;
const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #FAFAF9;
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
  justify-content: center;
  gap: 8px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: 48px;
  background: linear-gradient(90deg, #FAFAF9 0%, #E0E0E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(250, 250, 249, 0.03) 0%, transparent 50%);
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;
const HeroSection = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(14, 13, 12, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

const DocumentTemplatesSection = styled.section`
  padding: 120px 0;
  background: #0E0D0C;
  position: relative;
`;

const TemplatesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 64px;
`;

const TemplateCard = styled(motion.div)`
  background: #1F1D1A;
  border-radius: 12px;
  padding: 32px;
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
const TemplateIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #FAFAF9;
  margin-bottom: 24px;
`;

const TemplateName = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #FAFAF9;
  margin-bottom: 12px;
`;

const TemplateDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #8E8B85;
  margin-bottom: 24px;
`;

const AIReviewSection = styled.section`
  padding: 120px 0;
  background: #1A1A1A;
  position: relative;
  overflow: hidden;
`;

const ProcessSteps = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
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
    right: -16px;
    width: 32px;
    height: 2px;
    background: linear-gradient(90deg, #FAFAF9, transparent);
    opacity: 0.2;

    @media (max-width: 968px) {
      display: none;
    }
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #FAFAF9;
  margin: 0 auto 24px;
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
const TrustSection = styled.section`
  padding: 120px 0;
  background: #0E0D0C;
  position: relative;
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const VideoPreview = styled(motion.div)`
  aspect-ratio: 16/9;
  background: #1F1D1A;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(250, 250, 249, 0.1), transparent);
  }
`;

const TrustPoints = styled(motion.div)`
  display: grid;
  gap: 32px;
`;

const TrustPoint = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const TrustIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #FAFAF9;
  flex-shrink: 0;
`;

const TrustContent = styled.div``;

const TrustTitle = styled.h4`
  font-family: 'PP Mori', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #FAFAF9;
  margin-bottom: 8px;
`;

const TrustDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #8E8B85;
`;

const CTASection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1A1A1A 0%, #0E0D0C 100%);
  text-align: center;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 48px;

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;
const documentTemplates = [
    {
      icon: <FaFileContract />,
      name: "Employment Contracts",
      description: "Comprehensive agreements detailing employment terms, responsibilities, and conditions"
    },
    {
      icon: <FaShieldAlt />,
      name: "Non-Disclosure Agreements",
      description: "Protect sensitive information with legally binding confidentiality agreements"
    },
    {
      icon: <FaHandshake />,
      name: "Memorandums of Understanding",
      description: "Preliminary agreements outlining intentions and responsibilities between parties"
    },
    {
      icon: <FaHome />,
      name: "Tenancy Agreements",
      description: "Legally binding contracts between landlords and tenants with clear terms"
    },
    {
      icon: <FaMoneyBill />,
      name: "Loan Agreements",
      description: "Establish clear terms between lenders and borrowers with payment schedules"
    },
    {
      icon: <FaFileAlt />,
      name: "Power of Attorney",
      description: "Authorize representatives to act on your behalf in specific matters"
    }
  ];
  
  const aiSteps = [
    {
      icon: <FaUpload />,
      title: "Upload Document",
      description: "Simply drag & drop or select your document for instant AI review"
    },
    {
      icon: <FaRobot />,
      title: "AI Analysis",
      description: "Advanced AI scans for compliance issues and potential legal risks"
    },
    {
      icon: <FaCheck />,
      title: "Get Feedback",
      description: "Receive detailed suggestions and corrections in real-time"
    },
    {
      icon: <FaFileAlt />,
      title: "Finalize",
      description: "Apply changes and export your legally-sound document"
    }
  ];
  
  const trustPoints = [
    {
      icon: <FaClock />,
      title: "Save Time & Reduce Costs",
      description: "Generate legal documents in minutes instead of hours"
    },
    {
      icon: <FaShieldAlt />,
      title: "Legally Compliant",
      description: "All templates are regularly updated to meet current regulations"
    },
    {
      icon: <FaLock />,
      title: "Secure & Private",
      description: "Bank-level encryption protects your sensitive information"
    }
  ];
  const LegalDocuments = () => {
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
        transition: { duration: 0.5 }
      }
    };
  
    return (
      <PageContainer>
        <BackgroundDecoration />
        
        <HeroSection>
          <Container>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Generate, Customize & Review Legal Documents Instantly
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI-powered legal document automation to save you time and ensure compliance
              </Subtitle>
              <ButtonGroup>
                <CTAButton
                  primary
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Document
                </CTAButton>
                <CTAButton
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </CTAButton>
              </ButtonGroup>
            </HeroContent>
          </Container>
        </HeroSection>
  
        <DocumentTemplatesSection>
          <Container>
            <SectionTitle>Legal Document Templates</SectionTitle>
            <TemplatesGrid
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {documentTemplates.map((template, index) => (
                <TemplateCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <TemplateIcon>{template.icon}</TemplateIcon>
                  <TemplateName>{template.name}</TemplateName>
                  <TemplateDescription>{template.description}</TemplateDescription>
                  <CTAButton>
                    Create Now <FaArrowRight style={{ marginLeft: 8 }} />
                  </CTAButton>
                </TemplateCard>
              ))}
            </TemplatesGrid>
          </Container>
        </DocumentTemplatesSection>
  
        <AIReviewSection>
          <Container>
            <SectionTitle>AI-Powered Document Review</SectionTitle>
            <ProcessSteps
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aiSteps.map((step, index) => (
                <Step key={index} variants={itemVariants}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Step>
              ))}
            </ProcessSteps>
          </Container>
        </AIReviewSection>
  
        <TrustSection>
          <Container>
            <SplitLayout>
              <VideoPreview
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <TrustPoints
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {trustPoints.map((point, index) => (
                  <TrustPoint key={index} variants={itemVariants}>
                    <TrustIcon>{point.icon}</TrustIcon>
                    <TrustContent>
                      <TrustTitle>{point.title}</TrustTitle>
                      <TrustDescription>{point.description}</TrustDescription>
                    </TrustContent>
                  </TrustPoint>
                ))}
              </TrustPoints>
            </SplitLayout>
          </Container>
        </TrustSection>
  
        <CTASection>
          <Container>
            <Title>Start Creating Professional Legal Documents Today</Title>
            <ButtonGroup>
              <CTAButton primary>Start Free Trial</CTAButton>
              <CTAButton>Schedule Demo</CTAButton>
            </ButtonGroup>
          </Container>
        </CTASection>
      </PageContainer>
    );
  };
  
  export default LegalDocuments;
  