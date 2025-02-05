import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const CustomersSection = styled.section`
  width: 1519.20px;
  height: 240px;
  background: #0E0D0C;
  padding: 64px 36px;
  
  @media (max-width: 1520px) {
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1447.20px;
  margin: 0 auto;
`;

const Title = styled.p`
  color: #FAFAF9;
  font-size: 16px;
  font-family: Segoe UI;
  text-align: center;
  opacity: 0.85;
  margin-bottom: 48px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 64px;
  align-items: center;
`;

const Logo = styled(motion.img)`
  height: 32px;
  opacity: 0.7;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

const customers = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg"
  },
  {
    name: "Google",
    logo: "/logos/google.svg"
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.svg"
  },
  {
    name: "Meta",
    logo: "/logos/meta.svg"
  },
  {
    name: "Apple",
    logo: "/logos/apple.svg"
  },
  {
    name: "Netflix",
    logo: "/logos/netflix.svg"
  }
];

const Customers = () => {
  return (
    <CustomersSection>
      <Container>
        <Title>Trusted by leading companies worldwide</Title>
        <LogoGrid>
          {customers.map((customer, index) => (
            <Logo
              key={index}
              src={customer.logo}
              alt={customer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </LogoGrid>
      </Container>
    </CustomersSection>
  );
};

export default Customers;
