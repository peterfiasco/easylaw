import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaPhone, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import registerImage from '../../assets/images/15554.jpg';

const RegisterSection = styled.section`
  min-height: 100vh;
  background: #0E0D0C;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  background: #1A1A1A;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    margin: 24px;
  }
`;

const ImageSection = styled.div`
  background-image: url(${registerImage});
  background-size: cover;
  background-position: center;
  min-height: 900px;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const FormSection = styled.div`
  padding: 60px;
  color: #FAFAF9;
`;

const Title = styled(motion.h1)`
  font-family: 'PP Mori', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const Subtitle = styled(motion.p)`
  font-family: 'PP Mori', sans-serif;
  color: #8E8B85;
  margin-bottom: 48px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 48px;
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 8px;
  color: #FAFAF9;
  font-family: 'PP Mori', sans-serif;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FAFAF9;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 16px 48px;
  background: #2A2A2A;
  border: 1px solid #3A3A3A;
  border-radius: 8px;
  color: #FAFAF9;
  font-family: 'PP Mori', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #FAFAF9;
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8E8B85;
`;

const Button = styled(motion.button)`
  padding: 16px;
  background: #FAFAF9;
  color: #0E0D0C;
  border: none;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 24px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  font-family: 'PP Mori', sans-serif;
  
  a {
    color: #FAFAF9;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  color: #8E8B85;
  font-family: 'PP Mori', sans-serif;
  font-size: 0.9rem;
  
  a {
    color: #FAFAF9;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    website: '',
    businessType: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <RegisterSection>
      <Container>
        <FormSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Create Your Account
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start your journey to simplified legal solutions
          </Subtitle>
          <Form onSubmit={handleSubmit}>
            <FormGrid>
              <InputGroup>
                <Icon><FaUser /></Icon>
                <Input 
                  type="text" 
                  placeholder="First Name" 
                  required 
                />
              </InputGroup>
              <InputGroup>
                <Icon><FaUser /></Icon>
                <Input 
                  type="text" 
                  placeholder="Last Name" 
                  required 
                />
              </InputGroup>
            </FormGrid>
            
            <InputGroup>
              <Icon><FaEnvelope /></Icon>
              <Input 
                type="email" 
                placeholder="Business Email" 
                required 
              />
            </InputGroup>

            <FormGrid>
              <InputGroup>
                <Icon><FaBuilding /></Icon>
                <Input 
                  type="text" 
                  placeholder="Company Name" 
                  required 
                />
              </InputGroup>
              <InputGroup>
                <Icon><FaPhone /></Icon>
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                />
              </InputGroup>
            </FormGrid>

            <FormGrid>
              <InputGroup>
                <Icon><FaGlobe /></Icon>
                <Input 
                  type="url" 
                  placeholder="Company Website (Optional)" 
                />
              </InputGroup>
              <InputGroup>
                <Icon><FaBuilding /></Icon>
                <Select required>
                  <option value="">Select Business Type</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                  <option value="partnership">Partnership</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                </Select>
              </InputGroup>
            </FormGrid>

            <InputGroup>
              <Icon><FaMapMarkerAlt /></Icon>
              <Input 
                type="text" 
                placeholder="Business Address" 
                required 
              />
            </InputGroup>

            <FormGrid>
              <InputGroup>
                <Icon><FaLock /></Icon>
                <Input 
                  type="password" 
                  placeholder="Password" 
                  required 
                />
              </InputGroup>
              <InputGroup>
                <Icon><FaLock /></Icon>
                <Input 
                  type="password" 
                  placeholder="Confirm Password" 
                  required 
                />
              </InputGroup>
            </FormGrid>

            <InputGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  required 
                />
                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </CheckboxLabel>
            </InputGroup>

            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Create Account
            </Button>
          </Form>
          <Links>
            <span style={{ color: '#8E8B85' }}>Already have an account?</span>
            <a href="/login">Sign in</a>
          </Links>
        </FormSection>
        <ImageSection />
      </Container>
    </RegisterSection>
  );
};

export default Register;
