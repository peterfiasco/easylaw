import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCreditCard, FaHistory, FaFileInvoice, FaChevronRight, FaDownload } from 'react-icons/fa';

const PaymentContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.5rem;
  color: #0E0D0C;
`;

const SubscriptionCard = styled(motion.div)`
  background: linear-gradient(135deg, #0E0D0C 0%, #2A2A2A 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  margin-bottom: 2rem;
`;

const PlanInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const PlanDetails = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.8;
    font-size: 0.875rem;
  }
`;

const PlanPrice = styled.div`
  text-align: right;
  
  .amount {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .period {
    opacity: 0.8;
    font-size: 0.875rem;
  }
`;

const UsageStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const UsageStat = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  
  .label {
    font-size: 0.875rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }
  
  .value {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const PaymentMethods = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  font-family: 'PP Mori', sans-serif;
  font-size: 1.25rem;
  color: #0E0D0C;
  margin-bottom: 1rem;
`;

const CardsList = styled.div`
  display: grid;
  gap: 1rem;
`;

const PaymentCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  
  .card-icon {
    width: 48px;
    height: 48px;
    background: #f8fafc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
  
  .card-details {
    flex: 1;
    
    h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    
    p {
      font-size: 0.875rem;
      color: #64748b;
    }
  }
`;

const TransactionHistory = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TransactionList = styled.div`
  display: grid;
  gap: 1rem;
`;

const Transaction = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  
  .transaction-icon {
    width: 48px;
    height: 48px;
    background: #f8fafc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
  
  .transaction-details {
    flex: 1;
    
    h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    
    p {
      font-size: 0.875rem;
      color: #64748b;
    }
  }
  
  .transaction-amount {
    font-weight: 500;
  }
`;
const PaymentSection = () => {
    const [currentPlan, setCurrentPlan] = useState({
      name: 'Professional Plan',
      price: '99.99',
      period: 'month',
      documentsLeft: 45,
      daysLeft: 28,
      aiCredits: 1000
    });
  
    const [paymentMethods, setPaymentMethods] = useState([
      {
        id: 1,
        type: 'Visa',
        last4: '4242',
        expiry: '12/24',
        isDefault: true
      },
      {
        id: 2,
        type: 'Mastercard',
        last4: '8888',
        expiry: '09/25',
        isDefault: false
      }
    ]);
  
    const [transactions, setTransactions] = useState([
      {
        id: 1,
        type: 'Subscription Payment',
        date: '2024-01-15',
        amount: 99.99,
        status: 'completed'
      },
      {
        id: 2,
        type: 'Document Purchase',
        date: '2024-01-10',
        amount: 29.99,
        status: 'completed'
      }
    ]);
  
    const handleAddPaymentMethod = () => {
      // Implement payment method addition logic
    };
  
    const handleDownloadInvoice = (transactionId) => {
      // Implement invoice download logic
    };
  
    return (
      <PaymentContainer>
        <Header>
          <Title>Billing & Subscription</Title>
        </Header>
  
        <SubscriptionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PlanInfo>
            <PlanDetails>
              <h3>{currentPlan.name}</h3>
              <p>Your subscription will renew on {new Date(Date.now() + currentPlan.daysLeft * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
            </PlanDetails>
            <PlanPrice>
              <div className="amount">${currentPlan.price}</div>
              <div className="period">per {currentPlan.period}</div>
            </PlanPrice>
          </PlanInfo>
  
          <UsageStats>
            <UsageStat>
              <div className="label">Documents Left</div>
              <div className="value">{currentPlan.documentsLeft}</div>
            </UsageStat>
            <UsageStat>
              <div className="label">Days Remaining</div>
              <div className="value">{currentPlan.daysLeft}</div>
            </UsageStat>
            <UsageStat>
              <div className="label">AI Credits</div>
              <div className="value">{currentPlan.aiCredits}</div>
            </UsageStat>
          </UsageStats>
        </SubscriptionCard>
  
        <PaymentMethods>
          <SectionTitle>Payment Methods</SectionTitle>
          <CardsList>
            {paymentMethods.map(method => (
              <PaymentCard key={method.id}>
                <div className="card-icon">
                  <FaCreditCard />
                </div>
                <div className="card-details">
                  <h4>{method.type} ending in {method.last4}</h4>
                  <p>Expires {method.expiry} {method.isDefault && '(Default)'}</p>
                </div>
                <FaChevronRight color="#64748b" />
              </PaymentCard>
            ))}
          </CardsList>
        </PaymentMethods>
  
        <TransactionHistory>
          <SectionTitle>Transaction History</SectionTitle>
          <TransactionList>
            {transactions.map(transaction => (
              <Transaction key={transaction.id}>
                <div className="transaction-icon">
                  <FaFileInvoice />
                </div>
                <div className="transaction-details">
                  <h4>{transaction.type}</h4>
                  <p>{new Date(transaction.date).toLocaleDateString()}</p>
                </div>
                <div className="transaction-amount">
                  ${transaction.amount.toFixed(2)}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDownloadInvoice(transaction.id)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    marginLeft: '1rem'
                  }}
                >
                  <FaDownload color="#64748b" />
                </motion.button>
              </Transaction>
            ))}
          </TransactionList>
        </TransactionHistory>
      </PaymentContainer>
    );
  };
  
  export default PaymentSection;
  