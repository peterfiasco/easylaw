import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaShieldAlt, FaCopyright, FaGavel, FaLightbulb, FaArrowRight, FaCheck } from 'react-icons/fa';

const PageContainer = styled.div`
  background: #0E0D0C;
  color: #FAFAF9;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(14, 13, 12, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%);
  position: relative;
  overflow: hidden;
`;

const ServicesSection = styled.section`
  padding: 120px 0;
  background: #FAFAF9;
  color: #0E0D0C;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
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

const SectionTitle = styled(motion.h2)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  margin-bottom: 24px;
  text-align: center;
  color: #000000;
`;


const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 40px;
  color: ${props => props.dark ? '#0E0D0C' : '#FAFAF9'};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 64px;
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
  color: #0E0D0C;
  margin-bottom: 16px;
`;

const ServiceDescription = styled.p`
  font-family: 'PP Mori', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 24px;
`;

const Button = styled(motion.button)`
  font-family: 'PP Mori', sans-serif;
  padding: 16px 32px;
  background: ${props => props.primary ? '#0E0D0C' : 'transparent'};
  color: ${props => props.primary ? '#FAFAF9' : '#0E0D0C'};
  border: ${props => props.primary ? 'none' : '1px solid #0E0D0C'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const BenefitsSection = styled.section`
  padding: 120px 0;
  background: #0E0D0C;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: #1A1A1A;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #FAFAF9;
  flex-shrink: 0;
`;

const ProcessSection = styled.section`
  padding: 120px 0;
  background: #FAFAF9;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40px;
    right: -16px;
    width: 32px;
    height: 2px;
    background: #0E0D0C;
    opacity: 0.2;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: #0E0D0C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #FAFAF9;
  margin: 0 auto 24px;
  font-family: 'PP Mori', sans-serif;
`;
const services = [
    {
      icon: <FaShieldAlt />,
      title: "Trademark Registration",
      description: "Secure exclusive rights to your brand name, logo, and slogans with legal trademark registration."
    },
    {
      icon: <FaLightbulb />,
      title: "Patent Registration",
      description: "Protect your inventions and innovations with legally recognized patent registration."
    },
    {
      icon: <FaCopyright />,
      title: "Copyright Registration",
      description: "Ensure ownership of your creative works, from books and music to digital content."
    },
    {
      icon: <FaGavel />,
      title: "IP Protection & Dispute Resolution",
      description: "Enforce your rights, resolve disputes, and protect your intellectual property from infringement."
    }
  ];
  
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Legal Protection",
      description: "Prevent unauthorized use of your intellectual property"
    },
    {
      icon: <FaLightbulb />,
      title: "Monetization",
      description: "Exclusive rights to earn from your intellectual property"
    },
    {
      icon: <FaCopyright />,
      title: "Brand Value",
      description: "Protect your reputation and maintain authenticity"
    },
    {
      icon: <FaGavel />,
      title: "Competitive Edge",
      description: "Keep your ideas safe from competitors"
    }
  ];
  
  const steps = [
    {
      number: "01",
      title: "Submit Your Application",
      description: "Fill in the required details and upload documents"
    },
    {
      number: "02",
      title: "We Handle the Filing",
      description: "Our team processes and submits your application"
    },
    {
      number: "03",
      title: "Get Your Certification",
      description: "Receive your legal trademark, patent, or copyright"
    }
  ];
  const IntellectualProperty = () => {
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
                Protect Your Brand, Ideas, and Creativity
              </Title>
              <Subtitle
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  style={{ textAlign: 'center' }}
>
  Secure your intellectual property with our expert registration and protection services.
</Subtitle>
              <motion.div
                style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button primary whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Get Started <FaArrowRight />
                </Button>
                <Button 
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }}
  style={{ 
    borderColor: '#FAFAF9', 
    color: '#FAFAF9' 
  }}
>
  Learn More
</Button>
              </motion.div>
            </HeroContent>
          </Container>
        </HeroSection>
  
        <ServicesSection>
          <Container>
          <SectionTitle
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  What We Offer
</SectionTitle>

            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Learn More <FaArrowRight />
                  </Button>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Container>
        </ServicesSection>
        <BenefitsSection>
        <Container>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Protect Your Intellectual Property?
          </Title>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <div>
                  <ServiceTitle style={{ color: '#FAFAF9' }}>{benefit.title}</ServiceTitle>
                  <ServiceDescription style={{ color: '#8E8B85' }}>{benefit.description}</ServiceDescription>
                </div>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>

      <ProcessSection>
        <Container>
        <SectionTitle
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  How It Works
</SectionTitle>

          <ProcessSteps>
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <ServiceTitle>{step.title}</ServiceTitle>
                <ServiceDescription>{step.description}</ServiceDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button primary whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Start Your Registration Today <FaArrowRight />
            </Button>
          </motion.div>
        </Container>
      </ProcessSection>
      <section style={{ background: '#0E0D0C', padding: '120px 0' }}>
        <Container>
          <HeroContent>
            <Title
              as="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Start Protecting Your Intellectual Property Today
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Don't wait until it's too late. Secure your rights with our comprehensive IP protection services.
            </Subtitle>
            <motion.div
              style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button 
                primary 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                style={{ background: '#FAFAF9', color: '#0E0D0C' }}
              >
                Register Now <FaArrowRight />
              </Button>
              <Button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                style={{ borderColor: '#FAFAF9', color: '#FAFAF9' }}
              >
                Get a Free Consultation
              </Button>
            </motion.div>
          </HeroContent>
        </Container>
      </section>
    </PageContainer>
  );
};

export default IntellectualProperty;

