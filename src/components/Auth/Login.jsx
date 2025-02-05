import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import loginImage from '../../assets/images/15554.jpg';

const LoginSection = styled.section`
  min-height: 100vh;
  background: #0E0D0C;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
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
  background-image: url(${loginImage});
  background-size: cover;
  background-position: center;
  min-height: 600px;
  
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
  justify-content: space-between;
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

const Login = () => {
  return (
    <LoginSection>
      <Container>
        <ImageSection />
        <FormSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome Back
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Log in to access your legal dashboard
          </Subtitle>
          <Form>
            <InputGroup>
              <Icon><FaEnvelope /></Icon>
              <Input type="email" placeholder="Email address" />
            </InputGroup>
            <InputGroup>
              <Icon><FaLock /></Icon>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Log In
            </Button>
          </Form>
          <Links>
            <a href="/forgot-password">Forgot password?</a>
            <a href="/register">Create account</a>
          </Links>
        </FormSection>
      </Container>
    </LoginSection>
  );
};

export default Login;
