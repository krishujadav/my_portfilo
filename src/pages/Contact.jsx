import React from 'react';
import { Container, TextField, Button, Typography, Box, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

function Contact() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: '#2c2c2c',
          borderRadius: '16px',
          padding: '3rem',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textAlign: 'center',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              position: 'relative',
              '::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                backgroundColor: '#1e88e5',
                left: '50%',
                bottom: '-10px',
                transform: 'translateX(-50%)',
              },
            }}
          >
            Contect US
          </Typography>
        </motion.div>
        <form>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: '#1e88e5' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1e88e5',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1e88e5',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#bbb',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1e88e5',
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: '#1e88e5' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1e88e5',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1e88e5',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#bbb',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1e88e5',
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: '1.5rem' }}>
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon sx={{ color: '#1e88e5' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1e88e5',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1e88e5',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#bbb',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1e88e5',
                },
              }}
            />
          </Box>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<SendIcon />}
              sx={{
                padding: '0.75rem',
                background: 'linear-gradient(45deg, #1e88e5, #42a5f5)',
                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '1.5px',
                '&:hover': {
                  background: 'linear-gradient(45deg, #42a5f5, #1e88e5)',
                  boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.5)',
                },
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;
