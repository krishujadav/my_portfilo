import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaReact, FaDatabase, FaLaptopCode, FaEnvelope, FaProjectDiagram, FaRobot, FaBrain, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import './Home.css'; // Import the CSS file

// Create a custom theme with AI-inspired fonts and colors
const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron, Roboto, Arial, sans-serif',
    h2: {
      fontFamily: 'Orbitron, Roboto, Arial, sans-serif',
      fontWeight: 700,
      color: '#00E5FF',
    },
    h3: {
      fontFamily: 'Orbitron, Roboto, Arial, sans-serif',
      fontWeight: 600,
      color: '#76FF03',
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      color: '#FFFFFF',
    },
  },
  palette: {
    primary: {
      main: '#9c27b0',
    },
  },
});

// Styled components for MUI integration
const Section = styled(motion.section)(({ theme }) => ({
  position: 'relative',
  zIndex: 20,
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  boxShadow: '0px 4px 20px rgba(0, 229, 255, 0.3)',
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  color: '#76FF03',
  '& svg': {
    fontSize: '2.5rem',
    margin: theme.spacing(0, 1),
  },
}));

const TechIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  '& svg': {
    fontSize: '2rem',
    color: '#76FF03',
  },
}));

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Blurred Background Overlay */}
        <Box className="absolute inset-0 bg-gradient-to-r from-purple-900 via-black to-blue-900 opacity-50 blur-3xl z-0"></Box>

        <Container maxWidth="md">
          {/* Introduction Section with Slower Animation */}
          <Section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }} // Slower duration
          >
            <IconWrapper>
              <FaReact />
              <FaLaptopCode />
              <FaDatabase />
            </IconWrapper>
            <Typography variant="h2" component="h2" gutterBottom>
              Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" paragraph>
              I am Krishna Jadav, a passionate React Developer specializing in creating dynamic and innovative web applications. 
              With extensive experience in the MERN stack and a keen interest in AI-driven solutions, I focus on building scalable and user-friendly digital experiences.
            </Typography>
          </Section>

          {/* Skills & Technologies with Slower Animation */}
          <Section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }} // Slower duration and delay
          >
            <Typography variant="h3" component="h3" gutterBottom>
              Skills & Technologies
            </Typography>
            <TechIcons>
              <FaReact />
              <FaNodeJs />
              <FaDatabase />
              <FaCss3Alt />
              <FaLaptopCode />
              <FaRobot />
            </TechIcons>
            <Typography variant="body1" paragraph>
              I am proficient in the following technologies:
              <ul>
                <li><strong>React:</strong> Building interactive UIs with hooks and components.</li>
                <li><strong>Node.js & Express:</strong> Developing scalable server-side applications.</li>
                <li><strong>MongoDB:</strong> Designing and managing NoSQL databases.</li>
                <li><strong>Material-UI & Tailwind CSS:</strong> Crafting modern and responsive designs.</li>
                <li><strong>Framer Motion:</strong> Adding smooth animations and transitions.</li>
              </ul>
            </Typography>
          </Section>

          {/* Projects & Experience Preview with Slower Animation */}
          <Section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }} // Slower duration and delay
          >
            <IconWrapper>
              <FaProjectDiagram />
              <FaDatabase />
              <FaBrain />
            </IconWrapper>
            <Typography variant="h3" component="h3" gutterBottom>
              Featured Projects & Experience
            </Typography>
            <Typography variant="body1" paragraph>
              Explore some of my key projects that showcase my skills and experience:
              <ul>
                <li><strong>AI Photo Generator:</strong> A React-based application that generates AI-inspired images using a custom backend.</li>
                <li><strong>Portfolio Website:</strong> A responsive and dynamic portfolio showcasing my work and skills.</li>
                <li><strong>Data Management Tool:</strong> A tool for managing and visualizing large datasets, built with the MERN stack.</li>
              </ul>
            </Typography>
            <Typography variant="body1">
              Visit the <Button component="a" href="/projects" color="primary">Projects</Button> page to see more details about my work,
              and check out the <Button component="a" href="/experience" color="primary">Experience</Button> page for a deeper look into my professional journey.
            </Typography>
          </Section>

          {/* Contact CTA with Slower Animation */}
          <Section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 2.4, ease: 'easeOut' }} // Slower duration and delay
          >
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <Typography variant="h3" component="h3" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              I am always open to new opportunities and collaborations. Feel free to reach out to discuss potential projects, ask questions, or just connect!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/contact"
              className="button-primary" // Apply the custom button style
            >
              Contact Me
            </Button>
          </Section>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
