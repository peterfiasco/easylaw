import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaBuilding, FaCheckCircle, FaTimes, FaSpinner, FaSearch } from 'react-icons/fa';

const VerificationContainer = styled.div`
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

const Subtitle = styled.p`
  color: #64748b;
`;

const VerificationCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-family: 'PP Mori', sans-serif;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #0E0D0C;
  }
`;

const VerifyButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: #0E0D0C;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'PP Mori', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ResultCard = styled(motion.div)`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${props => props.verified ? '#f0fdf4' : '#fef2f2'};
  border: 1px solid ${props => props.verified ? '#86efac' : '#fecaca'};
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  svg {
    color: ${props => props.verified ? '#16a34a' : '#dc2626'};
  }
  
  h3 {
    font-family: 'PP Mori', sans-serif;
    color: ${props => props.verified ? '#16a34a' : '#dc2626'};
  }
`;

const BusinessDetails = styled.div`
  display: grid;
  gap: 1rem;
`;

const DetailItem = styled.div`
  h4 {
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-family: 'PP Mori', sans-serif;
    color: #0E0D0C;
  }
`;

const ComplianceChecks = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const ComplianceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  svg {
    color: ${props => props.compliant ? '#16a34a' : '#dc2626'};
  }
  
  span {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const VerificationSection = () => {
  const [loading, setLoading] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerification = async () => {
    setLoading(true);
    
    // Simulate API call to VerifyMe.ng
    setTimeout(() => {
      setVerificationResult({
        verified: true,
        businessName: "Tech Solutions Limited",
        registrationDate: "2020-05-15",
        businessType: "Private Limited Company",
        address: "123 Business District, Lagos",
        directors: ["John Doe", "Jane Smith"],
        compliance: {
          vat: true,
          tin: true,
          pension: false
        }
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <VerificationContainer>
      <Header>
        <Title>Business Verification</Title>
        <Subtitle>Verify your business details with CAC database via VerifyMe.ng</Subtitle>
      </Header>

      <VerificationCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <InputGroup>
          <Label>CAC Registration Number</Label>
          <Input
            type="text"
            placeholder="Enter your RC number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </InputGroup>

        <VerifyButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleVerification}
          disabled={loading}
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Verifying...
            </>
          ) : (
            <>
              <FaSearch /> Verify Business
            </>
          )}
        </VerifyButton>

        {verificationResult && (
          <ResultCard
            verified={verificationResult.verified}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ResultHeader verified={verificationResult.verified}>
              {verificationResult.verified ? (
                <>
                  <FaCheckCircle />
                  <h3>Business Verified</h3>
                </>
              ) : (
                <>
                  <FaTimes />
                  <h3>Verification Failed</h3>
                </>
              )}
            </ResultHeader>

            <BusinessDetails>
              <DetailItem>
                <h4>Business Name</h4>
                <p>{verificationResult.businessName}</p>
              </DetailItem>
              <DetailItem>
                <h4>Registration Date</h4>
                <p>{verificationResult.registrationDate}</p>
              </DetailItem>
              <DetailItem>
                <h4>Business Type</h4>
                <p>{verificationResult.businessType}</p>
              </DetailItem>
              <DetailItem>
                <h4>Address</h4>
                <p>{verificationResult.address}</p>
              </DetailItem>
            </BusinessDetails>

            <ComplianceChecks>
              <ComplianceItem compliant={verificationResult.compliance.vat}>
                {verificationResult.compliance.vat ? <FaCheckCircle /> : <FaTimes />}
                <span>VAT Registration</span>
              </ComplianceItem>
              <ComplianceItem compliant={verificationResult.compliance.tin}>
                {verificationResult.compliance.tin ? <FaCheckCircle /> : <FaTimes />}
                <span>Tax Identification Number (TIN)</span>
              </ComplianceItem>
              <ComplianceItem compliant={verificationResult.compliance.pension}>
                {verificationResult.compliance.pension ? <FaCheckCircle /> : <FaTimes />}
                <span>Pension Compliance</span>
              </ComplianceItem>
            </ComplianceChecks>
          </ResultCard>
        )}
      </VerificationCard>
    </VerificationContainer>
  );
};

export default VerificationSection;
