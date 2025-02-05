import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const PricingSection = styled.section`
  min-height: 100vh;
  background: #FAFAF9;
  padding: 120px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const Title = styled(motion.h1)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #0E0D0C;
  margin-bottom: 24px;
`;

const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: #64748b;
  line-height: 1.6;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 64px auto 0;
  }
`;

const PricingCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  
  ${props => props.featured && `
    background: #0E0D0C;
    color: #FAFAF9;
    transform: scale(1.05);
    
    @media (max-width: 968px) {
      transform: none;
    }
  `}
`;
const PlanName = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  color: ${props => props.featured ? '#FAFAF9' : '#0E0D0C'};
`;

const PlanPrice = styled.div`
  font-family: 'PP Mori', sans-serif;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${props => props.featured ? '#FAFAF9' : '#0E0D0C'};
  
  span {
    font-size: 16px;
    opacity: 0.7;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  flex-grow: 1;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-family: 'PP Mori', sans-serif;
  color: ${props => props.featured ? '#FAFAF9' : '#64748b'};
  
  svg {
    color: ${props => props.featured ? '#FAFAF9' : '#0E0D0C'};
  }
`;

const Button = styled(motion.button)`
  font-family: 'PP Mori', sans-serif;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  
  ${props => props.featured ? `
    background: #FAFAF9;
    color: #0E0D0C;
    border: none;
  ` : `
    background: #0E0D0C;
    color: #FAFAF9;
    border: none;
  `}
`;

const plans = [
  {
    name: "Pay-As-You-Go",
    price: "Custom",
    features: [
      "Company Registration",
      "Legal Document Drafting",
      "Due Diligence Services",
      "IP Registration",
      "One-Time Legal Consultation"
    ]
  },
  {
    name: "Subscription",
    price: "299",
    featured: true,
    features: [
      "Unlimited Document Generation",
      "AI-Assisted Legal Advice",
      "Compliance Monitoring",
      "Discounted Consultations",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom Legal Solutions",
      "Dedicated Account Manager",
      "API Access",
      "Custom Integration",
      "24/7 Premium Support"
    ]
  }
];
const Pricing = () => {
    return (
      <PricingSection>
        <Container>
          <HeroContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Simple, Transparent & Affordable Legal Pricing
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose a plan that fits your legal needs and budget
            </Subtitle>
          </HeroContent>
  
          <PricingGrid>
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                featured={plan.featured}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                <PlanName featured={plan.featured}>{plan.name}</PlanName>
                <PlanPrice featured={plan.featured}>
                  {plan.price === "Custom" ? (
                    "Custom"
                  ) : (
                    <>₦{plan.price}<span>/month</span></>
                  )}
                </PlanPrice>
                <FeaturesList>
                  {plan.features.map((feature, idx) => (
                    <Feature key={idx} featured={plan.featured}>
                      <FaCheck /> {feature}
                    </Feature>
                  ))}
                </FeaturesList>
                <Button
                  featured={plan.featured}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <FaArrowRight />
                </Button>
              </PricingCard>
            ))}
          </PricingGrid>
        </Container>
      </PricingSection>
    );
  };
  
  export default Pricing;
  
