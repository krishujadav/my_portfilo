// src/pages/Skills.jsx

import React from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { blue, teal, purple } from '@mui/material/colors';
import { Build as BuildIcon, Storage as StorageIcon, EmojiObjects as EmojiObjectsIcon, Work as WorkIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './Skills.css'; // Ensure you have this import if you are using a separate CSS file

function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skills = [
    {
      category: 'Frontend Development',
      icon: <BuildIcon sx={{ color: teal[300], fontSize: 40 }} />,
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI', 'Framer Motion'],
    },
    {
      category: 'Backend Development',
      icon: <StorageIcon sx={{ color: purple[300], fontSize: 40 }} />,
      items: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    },
    {
      category: 'Tools & Platforms',
      icon: <EmojiObjectsIcon sx={{ color: teal[300], fontSize: 40 }} />,
      items: ['Git', 'GitHub', 'Vite', 'Webpack', 'VS Code'],
    },
    {
      category: 'Soft Skills',
      icon: <WorkIcon sx={{ color: blue[500], fontSize: 40 }} />,
      items: ['Teamwork', 'Problem-Solving', 'Communication', 'Time Management'],
    },
  ];

  return (
    <Container
      maxWidth={false}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        background: 'linear-gradient(to right, #000000, #003366)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
        position: 'relative',
        overflow: 'hidden',
        margin: 0,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Typography
        variant={isMobile ? 'h4' : 'h2'}
        component="h2"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 'bold',
          color: blue[300],
          paddingBottom: theme.spacing(1),
          marginBottom: theme.spacing(4),
          position: 'relative',
          zIndex: 1,
        }}
      >
        Skills
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'loop' }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)',
            opacity: 0.1,
          }}
        />
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.3, type: 'spring', stiffness: 100 }}
            >
              <Paper
                elevation={12}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{
                  background: 'linear-gradient(to right, #1a1a1a, #333333)',
                  padding: theme.spacing(3),
                  borderRadius: theme.shape.borderRadius,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, #333333, #1a1a1a)',
                    boxShadow: `0 0 20px ${blue[500]}`,
                    transform: 'scale(1.05) rotate(2deg)',
                    zIndex: 1,
                    border: `1px solid ${blue[500]}`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
                    borderRadius: '50%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 0,
                    opacity: 0.3,
                    pointerEvents: 'none',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(0, 0, 255, 0.1), transparent)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, 50%)',
                    zIndex: 0,
                    opacity: 0.3,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2), color: blue[300], display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}
                >
                  {skill.icon} <span style={{ marginLeft: theme.spacing(1) }}>{skill.category}</span>
                </Typography>
                <List>
                  {skill.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ padding: 0 }}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ListItemText
                          primary={item}
                          sx={{
                            color: 'white',
                            '&:hover': {
                              color: blue[300],
                              background: 'rgba(255, 255, 255, 0.2)',
                              borderRadius: theme.shape.borderRadius,
                              transition: 'background-color 0.3s ease',
                              transform: 'translateX(10px)',
                            },
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </motion.div>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
