import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: #FAFAF9;
  padding: 80px 0 40px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CompanyInfo = styled.div`
  margin-right: 48px;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #0E0D0C;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #0E0D0C;
  }
`;

const Column = styled.div``;

const ColumnTitle = styled.h4`
  color: #0E0D0C;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled(motion.li)`
  margin-bottom: 12px;

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;
    display: inline-block;

    &:hover {
      color: #0E0D0C;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 40px 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

const Copyright = styled.p`
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled(motion.a)`
  color: #666;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #0E0D0C;
  }
`;

const Footer = () => {
  const linkAnimation = {
    hover: { x: 8, transition: { duration: 0.2 } }
  };

  return (
    <FooterSection>
      <Container>
        <TopSection>
          <CompanyInfo>
            <Logo>EasyLaw</Logo>
            <Description>
              Transforming legal services with AI-powered solutions for modern businesses.
            </Description>
            <ContactInfo>
              <ContactItem href="mailto:support@easylawsolutions.com">
                <FaEnvelope /> support@easylawsolutions.com
              </ContactItem>
              <ContactItem href="tel:+234XXXXXXXXXX">
                <FaPhone /> +234 XXX XXX XXXX
              </ContactItem>
              <ContactItem href="#">
                <FaMapMarkerAlt /> Lagos, Nigeria
              </ContactItem>
            </ContactInfo>
          </CompanyInfo>

          <Column>
            <ColumnTitle>Services</ColumnTitle>
            <LinkList>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/business-registration">Business Registration</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/legal-documents">Legal Documents</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/due-diligence">Due Diligence</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/intellectual-property">IP Protection</a>
              </LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/about">About Us</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/pricing">Pricing</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/ai-assistant">AI Assistant</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/contact">Contact</a>
              </LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Resources</ColumnTitle>
            <LinkList>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/faq">FAQs</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/privacy">Privacy Policy</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/terms">Terms of Use</a>
              </LinkItem>
              <LinkItem whileHover="hover" variants={linkAnimation}>
                <a href="/blog">Blog</a>
              </LinkItem>
            </LinkList>
          </Column>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} EasyLaw. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink 
              href="https://twitter.com/easylaw" 
              target="_blank"
              whileHover={{ y: -3 }}
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/company/easylaw" 
              target="_blank"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://instagram.com/easylaw" 
              target="_blank"
              whileHover={{ y: -3 }}
            >
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </BottomSection>
      </Container>
    </FooterSection>
  );
};

export default Footer;
