import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const SmoothScroll = styled(motion.div)`
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <SmoothScroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </SmoothScroll>
    </LayoutWrapper>
  );
};

export default Layout;
