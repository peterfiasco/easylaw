import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { typography } from '../../styles/typography';
import testimonialImage from '../../assets/images/15554.jpg';

const TestimonialsSection = styled.section`
  width: 1519.20px;
  height: 880.50px;
  background: #CDD8DA;
  position: relative;
  overflow: hidden;

  @media (max-width: 1520px) {
    width: 100%;
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(14, 13, 12, 0.8);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  
  &.prev { left: 40px; }
  &.next { right: 40px; }
`;

const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 144px 158.10px;
`;

const ImageContainer = styled(motion.div)`
  width: 592.50px;
  height: 592.50px;
  background: #34322D;
  border-radius: 4px;
  overflow: hidden;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  margin-left: 140px;
  max-width: 470.40px;
`;

const QuoteWrapper = styled.div`
  position: relative;
  margin-bottom: 36px;
`;

const QuoteMark = styled.div`
  position: absolute;
  left: -16px;
  top: 0;
  color: #0E0D0C;
  font-size: 36px;
  font-family: ${typography.fontFamily};
  line-height: 37.80px;
`;

const Quote = styled(motion.div)`
  color: #0E0D0C;
  font-size: 35.16px;
  font-family: ${typography.fontFamily};
  line-height: 37.80px;
  white-space: pre-line;
`;

const AuthorInfo = styled(motion.div)`
  margin-top: 36px;
`;

const AuthorName = styled.div`
  color: #0E0D0C;
  font-size: 15.75px;
  font-family: ${typography.fontFamily};
  line-height: 20.80px;
  font-weight: 400;
`;

const AuthorRole = styled.div`
  color: #1F1D1A;
  font-size: 15.75px;
  font-family: ${typography.fontFamily};
  line-height: 20.80px;
`;

const testimonials = [
    {
      quote: "We want to free the lawyer\nfrom mundane, routine tasks, so that they can focus on what matters — strategy, advice, and judgment. This has become the mantra for\nmy team.",
      name: "David Wakeling",
      role: "Global Head of Markets Innovation Group (MIG) and AI Advisory\nPractice, A&O Shearman",
      image: testimonialImage
    },
    {
      quote: "The AI-powered platform \nhas revolutionized how we \nhandlelegal documentation. It's not just about efficiency, it's about enhancing the quality of our\nlegal services.",
      name: "Sarah Chen",
      role: "Senior Partner\nGlobal Law Associates",
      image: testimonialImage
    },
    {
      quote: "Innovation meets precision\nin this legal tech solution.\nOur team has seen a 300%\nincrease in productivity since we started using this\nplatform.",
      name: "Michael Rodriguez",
      role: "Chief Legal Officer\nTech Innovations Corp",
      image: testimonialImage
    }
  ];
  const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    useEffect(() => {
      if (!isAutoPlaying) return;
      
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }, [isAutoPlaying]);
  
    const handleNext = () => {
      setIsAutoPlaying(false);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setIsAutoPlaying(false);
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <TestimonialsSection>
        <NavigationButton
          className="prev"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft />
        </NavigationButton>
  
        <TestimonialContainer>
          <AnimatePresence mode="wait">
            <ImageContainer
              key={`image-${current}`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
            >
              <TestimonialImage src={testimonials[current].image} alt={testimonials[current].name} />
            </ImageContainer>
          </AnimatePresence>
  
          <ContentContainer>
            <AnimatePresence mode="wait">
              <QuoteWrapper key={`quote-${current}`}>
                <QuoteMark>"</QuoteMark>
                <Quote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonials[current].quote}
                </Quote>
                <AuthorInfo
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <AuthorName>{testimonials[current].name}</AuthorName>
                  <AuthorRole>{testimonials[current].role}</AuthorRole>
                </AuthorInfo>
              </QuoteWrapper>
            </AnimatePresence>
          </ContentContainer>
        </TestimonialContainer>
  
        <NavigationButton
          className="next"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight />
        </NavigationButton>
      </TestimonialsSection>
    );
  };
  
  export default Testimonials;