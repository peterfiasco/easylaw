import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { typography } from '../../styles/typography';

const FAQSection = styled.section`
  background: #0E0D0C;
  padding: 120px 0;
  color: #FAFAF9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-family: ${typography.fontFamily};
  font-size: 48px;
  margin-bottom: 24px;
`;

const Description = styled(motion.p)`
  font-size: 20px;
  color: #999;
  max-width: 600px;
  margin: 0 auto;
`;

const FAQGrid = styled.div`
  display: grid;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
`;

const Question = styled.div`
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const IconWrapper = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Answer = styled(motion.div)`
  padding: 0 32px 24px;
  color: #999;
  line-height: 1.6;
`;

const FullFAQButton = styled(motion.button)`
  margin-top: 48px;
  padding: 16px 32px;
  background: linear-gradient(90deg, #0E0D0C, #2A2A2A);
  border: 1px solid #333;
  border-radius: 8px;
  color: #FAFAF9;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const faqs = [
  {
    question: "How does EasyLaw's AI work?",
    answer: "Our AI system uses advanced natural language processing to analyze and generate legal documents, learning from millions of legal precedents while ensuring compliance with current regulations."
  },
  {
    question: "Are the legal templates customizable?",
    answer: "Yes, all templates are fully customizable to meet your specific needs while maintaining legal validity. Our AI assists in suggesting appropriate modifications based on your jurisdiction."
  },
  {
    question: "How secure is my data?",
    answer: "We employ bank-level encryption and security measures. Your data is stored in SOC 2 compliant servers with regular security audits and updates."
  },
  {
    question: "Does EasyLaw offer direct legal representation?",
    answer: "No, EasyLaw is a legal technology platform. While we provide document automation and legal information, we recommend consulting with a qualified attorney for specific legal advice."
  },
  {
    question: "What type of businesses can register with EasyLaw?",
    answer: "Any legitimate business entity can register, from startups to established corporations. Our platform scales to accommodate different business sizes and legal needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <FAQSection>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get quick answers to common questions about our AI-powered legal platform
          </Description>
        </Header>

        <FAQGrid>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <Question>
                {faq.question}
                <IconWrapper
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </IconWrapper>
              </Question>
              <AnimatePresence>
                {activeIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQGrid>

        <FullFAQButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All FAQs
        </FullFAQButton>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
