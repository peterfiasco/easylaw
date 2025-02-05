import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Nav = styled.nav`
  width: 1519.20px;
  height: 76px;
  background: #0E0D0C;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 1520px) {
    width: 100%;
  }
`;

const NavContainer = styled.div`
  width: 1519.20px;
  height: 40px;
  position: relative;
  top: 18px;
 
  @media (max-width: 1520px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  width: 80px;  // Reduced from 110.09px
  height: 28px;  // Reduced from 37.60px
  left: 36px;
  position: absolute;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  max-height: 28px;  // Added max-height constraint
`;


const NavMenu = styled.div`
  width: 478.79px;
  height: 32px;
  left: 520.20px;
  top: 4px;
  position: absolute;
  display: flex;
  gap: 24px;
 
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  color: #FAFAF9;
  font-size: 14px;
  font-family: 'PP Mori', sans-serif;
  font-weight: 400;
  line-height: 18.20px;
  padding: 6.10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  a {
    color: #FAFAF9;
    text-decoration: none;
    opacity: 0.85;
    transition: opacity 0.2s;
   
    &:hover {
      opacity: 1;
    }
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: #1A1A1A;
  border-radius: 8px;
  padding: 8px;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 16px;
  color: #FAFAF9;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s;
  border-radius: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const AuthButtons = styled.div`
  position: absolute;
  right: 36px;
  top: 4px;
  display: flex;
  gap: 20px;
`;

const LoginButton = styled(Link)`
  color: #FAFAF9;
  background: transparent;
  border: none;
  font-size: 14px;
  font-family: 'PP Mori', sans-serif;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 32px;
`;

const ContactButton = styled(Link)`
  width: 94.22px;
  height: 32px;
  background: #FAFAF9;
  opacity: 0.85;
  border-radius: 4px;
  border: none;
  color: #0E0D0C;
  font-size: 14px;
  font-family: 'PP Mori', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const services = [
    { title: 'Business Registration', path: '/business-registration' },
    { title: 'Legal Documents', path: '/legal-documents' },
    { title: 'Due Diligence', path: '/due-diligence' },
    { title: 'IP Protection', path: '/intellectual-property' }
  ];

  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={logo} alt="EasyLaw Logo" />
          </Link>
        </LogoContainer>
        
        <NavMenu>
          <NavItem 
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Services <FaChevronDown size={12} />
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <Dropdown
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service, index) => (
                    <DropdownItem key={index} to={service.path}>
                      {service.title}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </AnimatePresence>
          </NavItem>
          <NavItem><Link to="/pricing">Pricing</Link></NavItem>
          <NavItem><Link to="/ai-assistant">AI Assistant</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
        </NavMenu>

        <AuthButtons>
  <LoginButton to="/login">Login</LoginButton>
  <ContactButton to="/contact">Contact Us</ContactButton>
</AuthButtons>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
