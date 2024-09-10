import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import Typography from '@mui/material/Typography';
import { styled, keyframes } from '@mui/material/styles';

// Keyframes for additional animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Background = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(10, 10, 50, 1), rgba(0, 0, 30, 1))',
  color: '#E0E0E0',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle at 20% 30%, rgba(0, 100, 200, 0.5), rgba(0, 0, 50, 0.8))',
    zIndex: -2,
    filter: 'blur(50px)',
    animation: 'gradientShift 15s infinite alternate ease-in-out',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '300%',
    height: '300%',
    background: 'radial-gradient(circle, rgba(0, 200, 255, 0.3), rgba(0, 0, 0, 0) 80%)',
    zIndex: -1,
    transform: 'translate(-50%, -50%)',
    filter: 'blur(100px)',
    opacity: 0.6,
    animation: 'rippleEffect 10s infinite ease-in-out',
  },
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '20% 30%' },
    '50%': { backgroundPosition: '80% 70%' },
    '100%': { backgroundPosition: '20% 30%' },
  },
  '@keyframes rippleEffect': {
    '0%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 0.5 },
    '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 0.7 },
    '100%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: 0.5 },
  },
  '.particle': {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: 'rgba(0, 150, 255, 0.7)',
    borderRadius: '50%',
    animation: 'particleMove 20s infinite linear',
    filter: 'blur(2px)',
  },
  '@keyframes particleMove': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(200vw, 200vh)' },
  },
});

const BackgroundWithParticles = () => (
  <Background>
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </Background>
);



const IconContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
  marginBottom: '24px',
});

const Title = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#00BFFF',
  marginBottom: '40px',
  textShadow: '0 0 15px rgba(0, 191, 255, 0.8)',
});

const Description = styled(Typography)({
  marginTop: '20px',
  color: '#B0C4DE',
  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
  padding: '0 10px', // Added padding for spacing
});

const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Align cards horizontally
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '40px', // Increased gap between cards
  marginBottom: '40px',
  maxWidth: '1200px', // Ensure cards don't stretch too wide
  margin: '0 auto', // Center the container
});

const CardContent = styled('div')({
  width: '300px', // Fixed width
  height: '450px', // Increased height for better spacing
  padding: '20px', // Increased padding inside the card
  borderRadius: '16px',
  background: 'linear-gradient(145deg, rgba(10, 10, 20, 0.9), rgba(0, 0, 30, 0.8))',
  color: '#FFFFFF',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)',
  position: 'relative',
  overflow: 'hidden',
  transition: '0.4s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '40px', // Added margin bottom for spacing
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '300%',
    height: '300%',
    background: 'radial-gradient(circle, rgba(0, 0, 255, 0.6) 0%, rgba(0, 0, 0, 0) 70%)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.4s ease-in-out',
  },
  '&:hover::before': {
    opacity: 1,
  },
  '&:hover': {
    transform: 'scale(1.05) rotate(2deg)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
  },
});

const AnimatedIcon = styled(motion.div)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem',
  color: '#00BFFF', // Default icon color
  border: '2px solid #00BFFF', // Border around the icon
  borderRadius: '50%', // Rounded border
  padding: '10px', // Space between the icon and border
  backgroundColor: 'rgba(0, 0, 0, 0.2)', // Slight background for contrast
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow for depth
});

const Tooltip = styled('div')({
  position: 'absolute',
  bottom: '110%', // Position above the icon
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '8px',
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 1,
});

const TooltipContainer = styled('div')({
  position: 'relative',
  '&:hover $Tooltip': {
    visibility: 'visible',
    opacity: 1,
  },
});

// Enhanced ParticleBackground with multiple layers
const ParticleBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: -3,
  // Layer 1: Small blue particles
  '& .particle-small': {
    position: 'absolute',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 191, 255, 0.7)',
    animation: 'particleMoveSmall 20s linear infinite',
  },
  // Layer 2: Medium-sized particles
  '& .particle-medium': {
    position: 'absolute',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 123, 255, 0.6)',
    animation: 'particleMoveMedium 25s linear infinite',
  },
  // Layer 3: Large particles
  '& .particle-large': {
    position: 'absolute',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 71, 171, 0.5)',
    animation: 'particleMoveLarge 30s linear infinite',
  },
  '@keyframes particleMoveSmall': {
    '0%': { transform: 'translate(0, 0)', opacity: 1 },
    '100%': { transform: 'translate(100vw, 100vh)', opacity: 0 },
  },
  '@keyframes particleMoveMedium': {
    '0%': { transform: 'translate(0, 0)', opacity: 0.8 },
    '100%': { transform: 'translate(-100vw, 100vh)', opacity: 0 },
  },
  '@keyframes particleMoveLarge': {
    '0%': { transform: 'translate(0, 0)', opacity: 0.6 },
    '100%': { transform: 'translate(100vw, -100vh)', opacity: 0 },
  },
});

// Starfield component
const Starfield = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'hidden',
  zIndex: -4,
  '& .star': {
    position: 'absolute',
    width: '2px',
    height: '2px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    opacity: 0.8,
    animation: 'twinkle 3s infinite ease-in-out',
  },
  '@keyframes twinkle': {
    '0%, 100%': { opacity: 0.8 },
    '50%': { opacity: 0.2 },
  },
});

// Animated geometric shapes
const AnimatedShape = styled('div')({
  position: 'absolute',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(0, 123, 255, 0.3)',
  borderRadius: '50%',
  top: '20%',
  left: '10%',
  animation: `${float} 6s ease-in-out infinite`,
  zIndex: -5,
  opacity: 0.5,
  '&:nth-of-type(2)': {
    width: '70px',
    height: '70px',
    backgroundColor: 'rgba(255, 0, 123, 0.3)',
    top: '60%',
    left: '80%',
    animation: `${float} 8s ease-in-out infinite`,
  },
  '&:nth-of-type(3)': {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(123, 255, 0, 0.3)',
    top: '30%',
    left: '50%',
    animation: `${float} 5s ease-in-out infinite`,
  },
});

function Experience() {
  const experiences = [
    {
      role: 'React.js Developer Intern',
      company: 'Xcelcode Innovations',
      duration: 'January 2024 - March 2024',
      description:
        'Worked on developing scalable web applications using React.js. Focused on creating responsive UI components and integrating APIs.',
      icons: [
        { component: <FaReact />, color: '#61DBFB', description: 'React.js' },
        { component: <SiJavascript />, color: '#F7DF1E', description: 'JavaScript' },
        { component: <FaCss3Alt />, color: '#264DE4', description: 'CSS3' },
        { component: <FaHtml5 />, color: '#E34F26', description: 'HTML5' },
        { component: <SiRedux />, color: '#764ABC', description: 'Redux' },
        { component: <FaGithub />, color: '#181717', description: 'GitHub' },
      ],
    },
    {
      role: 'MERN Stack Developer Intern',
      company: 'Proglan FutureTech',
      duration: 'April 2024 - June 2024',
      description:
        'Developed full-stack web applications using the MERN stack. Involved in building server-side logic with Node.js and Express, and integrating with MongoDB.',
      icons: [
        { component: <FaNodeJs />, color: '#68A063', description: 'Node.js' },
        { component: <SiMongodb />, color: '#47A248', description: 'MongoDB' },
        { component: <FaServer />, color: '#8A8A8A', description: 'Express.js' },
        { component: <FaDocker />, color: '#2496ED', description: 'Docker' },
        { component: <SiTypescript />, color: '#3178C6', description: 'TypeScript' },
      ],
    },
  ];

  // Function to generate random positions for particles and stars
  const generateParticles = (count, size, className) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${size === 'small' ? '20s' : size === 'medium' ? '25s' : '30s'}`,
      };
      particles.push(<div key={i} className={className} style={style}></div>);
    }
    return particles;
  };

  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      };
      stars.push(<div key={i} className="star" style={style}></div>);
    }
    return stars;
  };

  return (
    <Background>
      {/* Additional Background Elements */}
      <Starfield>{generateStars(100)}</Starfield>
      <ParticleBackground>
        {generateParticles(50, 'small', 'particle-small')}
        {generateParticles(30, 'medium', 'particle-medium')}
        {generateParticles(20, 'large', 'particle-large')}
      </ParticleBackground>
      {/* Animated Shapes */}
      <AnimatedShape />
      <AnimatedShape />
      <AnimatedShape />

      <Title>Experience</Title>
      <CardContainer>
        {experiences.map((exp, index) => (
          <CardContent key={index}>
            <Typography variant="h5" component="h3" gutterBottom>
              {exp.role}
            </Typography>
            <Typography variant="subtitle1" component="h4" gutterBottom>
              {exp.company}
            </Typography>
            <Typography variant="subtitle2" color="#FFFFFF"> {/* Set duration text to white */}
              {exp.duration}
            </Typography>
            <Description>{exp.description}</Description>
            <IconContainer>
              {exp.icons.map((icon, idx) => (
                <TooltipContainer key={idx}>
                  <AnimatedIcon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    {icon.component}
                    <Tooltip>{icon.description}</Tooltip>
                  </AnimatedIcon>
                </TooltipContainer>
              ))}
            </IconContainer>
          </CardContent>
        ))}
      </CardContainer>
    </Background>
  );
}

export default Experience;
