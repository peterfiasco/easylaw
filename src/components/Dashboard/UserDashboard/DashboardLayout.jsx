import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaFileAlt,
  FaCreditCard,
  FaRobot,
  FaCheckCircle,
  FaUserTie,
  FaBell,
  FaCog
} from 'react-icons/fa';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
  background: #FAFAF9;
`;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const StatTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0E0D0C;
`;

const RecentActivity = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ActivityTitle = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
  color: #0E0D0C;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f8fafc;
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #0E0D0C;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FAFAF9;
  }
  
  .details {
    flex: 1;
    
    h4 {
      font-family: 'PP Mori', sans-serif;
      font-size: 1rem;
      color: #0E0D0C;
      margin-bottom: 0.25rem;
    }
    
    p {
      font-size: 0.875rem;
      color: #64748b;
    }
  }
  
  .time {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const DashboardLayout = ({ children }) => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('dashboard');
  
    const navItems = [
      { id: 'dashboard', icon: <FaHome />, label: 'Dashboard', path: '/dashboard' },
      { id: 'documents', icon: <FaFileAlt />, label: 'Documents', path: '/dashboard/documents' },
      { id: 'ai-assistant', icon: <FaRobot />, label: 'AI Assistant', path: '/dashboard/ai-assistant' },
      { id: 'verification', icon: <FaCheckCircle />, label: 'Verification', path: '/dashboard/verification' },
      { id: 'consultation', icon: <FaUserTie />, label: 'Consultation', path: '/dashboard/consultation' },
      { id: 'payments', icon: <FaCreditCard />, label: 'Payments', path: '/dashboard/payments' },
      { id: 'settings', icon: <FaCog />, label: 'Settings', path: '/dashboard/settings' }
    ];
  
    const handleNavigation = (item) => {
      setActiveNav(item.id);
      navigate(item.path);
    };

  const quickStats = [
    { title: 'Active Documents', value: '12' },
    { title: 'Pending Reviews', value: '3' },
    { title: 'Subscription Days', value: '28' },
    { title: 'Total Documents', value: '45' }
  ];

  const recentActivities = [
    {
      icon: <FaFileAlt />,
      title: 'Document Created',
      description: 'Non-Disclosure Agreement',
      time: '2 hours ago'
    },
    {
      icon: <FaRobot />,
      title: 'AI Assistant Used',
      description: 'Legal consultation about business registration',
      time: '5 hours ago'
    }
  ];

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>EasyLaw</Logo>
        <NavMenu>
          {navItems.map(item => (
            <NavItem
              key={item.id}
              active={activeNav === item.id}
              onClick={() => handleNavigation(item)}
              whileHover={{ x: 5 }}
            >
              {item.icon} {item.label}
            </NavItem>
          ))}
        </NavMenu>
      </Sidebar>

      <MainContent>
        <TopBar>
          <QuickActions>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileAlt /> New Document
            </ActionButton>
            <ActionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRobot /> AI Assistant
            </ActionButton>
          </QuickActions>

          <UserProfile>
            <NotificationBell>
              <FaBell />
              <div className="indicator" />
            </NotificationBell>
            <Avatar>JD</Avatar>
          </UserProfile>
        </TopBar>

        {children}
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardLayout;

const Sidebar = styled.aside`
  background: #0E0D0C;
  padding: 2rem;
  color: #FAFAF9;
`;

const MainContent = styled.main`
  padding: 2rem;
  overflow-y: auto;
`;

const Logo = styled.div`
  margin-bottom: 3rem;
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  color: #FAFAF9;
  text-decoration: none;
  font-family: 'PP Mori', sans-serif;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(250, 250, 249, 0.1);
  }
  
  ${props => props.active && `
    background: rgba(250, 250, 249, 0.1);
  `}
`;

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const QuickActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: #0E0D0C;
  color: #FAFAF9;
  font-family: 'PP Mori', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0E0D0C;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FAFAF9;
`;

const NotificationBell = styled.div`
  position: relative;
  cursor: pointer;
  
  .indicator {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF4444;
  }
`;
