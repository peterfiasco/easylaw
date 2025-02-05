import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaBell, FaCreditCard, FaShieldAlt, FaSave } from 'react-icons/fa';

const SettingsContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  color: #0E0D0C;
  margin-bottom: 0.5rem;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SettingsNav = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavItem = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.active ? '#0E0D0C' : '#64748b'};
  background: ${props => props.active ? '#f8fafc' : 'transparent'};
  
  svg {
    font-size: 1.25rem;
  }
`;

const SettingsContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #0E0D0C;
  }
`;

const Toggle = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  
  input {
    display: none;
  }
  
  .toggle-switch {
    width: 48px;
    height: 24px;
    background: ${props => props.checked ? '#0E0D0C' : '#e2e8f0'};
    border-radius: 12px;
    position: relative;
    transition: background 0.2s;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: ${props => props.checked ? '26px' : '2px'};
      transition: left 0.2s;
    }
  }
`;

const SaveButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #0E0D0C;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const SettingsSection = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [settings, setSettings] = useState({
      profile: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+234 123 456 7890',
        company: 'Tech Solutions Ltd'
      },
      notifications: {
        emailUpdates: true,
        documentAlerts: true,
        consultationReminders: true,
        marketingEmails: false
      },
      security: {
        twoFactor: true,
        sessionTimeout: '30',
        loginAlerts: true
      }
    });
  
    const navItems = [
      { id: 'profile', icon: <FaUser />, label: 'Profile' },
      { id: 'security', icon: <FaLock />, label: 'Security' },
      { id: 'notifications', icon: <FaBell />, label: 'Notifications' },
      { id: 'billing', icon: <FaCreditCard />, label: 'Billing' },
      { id: 'privacy', icon: <FaShieldAlt />, label: 'Privacy' }
    ];
  
    const handleInputChange = (section, field, value) => {
      setSettings(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    };
  
    const handleSaveSettings = () => {
      // Implement settings save logic
      console.log('Saving settings:', settings);
    };
  
    const renderContent = () => {
      switch (activeSection) {
        case 'profile':
          return (
            <FormSection>
              <SectionTitle>Profile Information</SectionTitle>
              <FormGrid>
                <FormField>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    value={settings.profile.firstName}
                    onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
                  />
                </FormField>
                <FormField>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    value={settings.profile.lastName}
                    onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
                  />
                </FormField>
                <FormField>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={settings.profile.email}
                    onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
                  />
                </FormField>
                <FormField>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    value={settings.profile.phone}
                    onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
                  />
                </FormField>
              </FormGrid>
            </FormSection>
          );
  
        case 'notifications':
          return (
            <FormSection>
              <SectionTitle>Notification Preferences</SectionTitle>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <Toggle key={key} checked={value}>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => handleInputChange('notifications', key, e.target.checked)}
                    />
                    <div className="toggle-switch" />
                    <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                  </Toggle>
                ))}
              </div>
            </FormSection>
          );
  
        case 'security':
          return (
            <FormSection>
              <SectionTitle>Security Settings</SectionTitle>
              <FormGrid>
                <Toggle checked={settings.security.twoFactor}>
                  <input
                    type="checkbox"
                    checked={settings.security.twoFactor}
                    onChange={(e) => handleInputChange('security', 'twoFactor', e.target.checked)}
                  />
                  <div className="toggle-switch" />
                  <span>Two-Factor Authentication</span>
                </Toggle>
                <FormField>
                  <Label>Session Timeout (minutes)</Label>
                  <Input
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleInputChange('security', 'sessionTimeout', e.target.value)}
                  />
                </FormField>
              </FormGrid>
            </FormSection>
          );
  
        default:
          return null;
      }
    };
  
    return (
      <SettingsContainer>
        <Header>
          <Title>Settings</Title>
        </Header>
  
        <SettingsGrid>
          <SettingsNav>
            {navItems.map(item => (
              <NavItem
                key={item.id}
                active={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ x: 5 }}
              >
                {item.icon}
                {item.label}
              </NavItem>
            ))}
          </SettingsNav>
  
          <SettingsContent>
            {renderContent()}
            <SaveButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveSettings}
            >
              <FaSave /> Save Changes
            </SaveButton>
          </SettingsContent>
        </SettingsGrid>
      </SettingsContainer>
    );
  };
  
  export default SettingsSection;
  