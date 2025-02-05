import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaVideo, FaPhone, FaCheck } from 'react-icons/fa';

const ConsultationContainer = styled.div`
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

const ConsultationGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const BookingSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ConsultationType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TypeCard = styled(motion.div)`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? '#0E0D0C' : '#e2e8f0'};
  border-radius: 12px;
  cursor: pointer;
  
  h3 {
    font-family: 'PP Mori', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #64748b;
  }
`;

const DatePicker = styled.div`
  margin-bottom: 2rem;
`;

const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const DateCard = styled(motion.div)`
  padding: 0.75rem;
  border: 1px solid ${props => props.selected ? '#0E0D0C' : '#e2e8f0'};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  
  .day {
    font-size: 0.75rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }
  
  .date {
    font-family: 'PP Mori', sans-serif;
    font-weight: ${props => props.selected ? '600' : '400'};
  }
`;

const TimeSlots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TimeSlot = styled(motion.div)`
  padding: 0.75rem;
  border: 2px solid ${props => props.selected ? '#0E0D0C' : '#e2e8f0'};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-family: 'PP Mori', sans-serif;
`;

const BookingButton = styled(motion.button)`
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

const LawyerSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const LawyerCard = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LawyerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #f8fafc;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 3rem;
    color: #0E0D0C;
  }
`;

const LawyerInfo = styled.div`
  h3 {
    font-family: 'PP Mori', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 0.5rem;
  }
`;

const LawyerStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  
  h4 {
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-family: 'PP Mori', sans-serif;
    font-size: 1.125rem;
  }
`;
const ConsultationSection = () => {
    const [consultationType, setConsultationType] = useState('video');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
  
    const generateWeekDates = () => {
      const dates = [];
      const today = new Date();
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push({
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          date: date.getDate(),
          full: date
        });
      }
      return dates;
    };
  
    const timeSlots = [
      '09:00 AM',
      '10:00 AM',
      '11:00 AM',
      '02:00 PM',
      '03:00 PM',
      '04:00 PM'
    ];
  
    const handleBooking = () => {
      if (!selectedDate || !selectedTime) return;
  
      // Implement booking logic here
      console.log({
        type: consultationType,
        date: selectedDate,
        time: selectedTime
      });
    };
  
    return (
      <ConsultationContainer>
        <Header>
          <Title>Schedule Legal Consultation</Title>
          <Subtitle>Book a session with our experienced legal professionals</Subtitle>
        </Header>
  
        <ConsultationGrid>
          <BookingSection>
            <ConsultationType>
              <TypeCard
                selected={consultationType === 'video'}
                onClick={() => setConsultationType('video')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3><FaVideo /> Video Call</h3>
                <p>Face-to-face consultation via video conference</p>
              </TypeCard>
              <TypeCard
                selected={consultationType === 'phone'}
                onClick={() => setConsultationType('phone')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3><FaPhone /> Phone Call</h3>
                <p>Voice consultation over the phone</p>
              </TypeCard>
            </ConsultationType>
  
            <DatePicker>
              <h3>Select Date</h3>
              <WeekGrid>
                {generateWeekDates().map((date, index) => (
                  <DateCard
                    key={index}
                    selected={selectedDate?.getDate() === date.date}
                    onClick={() => setSelectedDate(date.full)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="day">{date.day}</div>
                    <div className="date">{date.date}</div>
                  </DateCard>
                ))}
              </WeekGrid>
            </DatePicker>
  
            <div>
              <h3>Select Time</h3>
              <TimeSlots>
                {timeSlots.map((time, index) => (
                  <TimeSlot
                    key={index}
                    selected={selectedTime === time}
                    onClick={() => setSelectedTime(time)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {time}
                  </TimeSlot>
                ))}
              </TimeSlots>
            </div>
  
            <BookingButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
            >
              <FaCalendar /> Book Consultation
            </BookingButton>
          </BookingSection>
  
          <LawyerSection>
            <LawyerCard>
              <LawyerAvatar>
                <FaUser />
              </LawyerAvatar>
              <LawyerInfo>
                <h3>Barrister John Doe</h3>
                <p>Corporate Law Specialist</p>
                <p>15+ years experience</p>
              </LawyerInfo>
              <LawyerStats>
                <StatItem>
                  <h4>Consultations</h4>
                  <p>500+</p>
                </StatItem>
                <StatItem>
                  <h4>Rating</h4>
                  <p>4.9/5</p>
                </StatItem>
              </LawyerStats>
            </LawyerCard>
          </LawyerSection>
        </ConsultationGrid>
      </ConsultationContainer>
    );
  };
  
  export default ConsultationSection;
  