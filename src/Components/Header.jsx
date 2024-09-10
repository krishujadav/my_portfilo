import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const menuButtonRef = useRef(null);

  const toggleMenu = (event) => {
    setAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(event.target) && !anchorEl?.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(0,0,0,1) 100%)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Toolbar className="container mx-auto flex justify-between items-center">
        <motion.div
          className="flex-grow"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            component="div"
            className="text-white flex items-center space-x-2"
            sx={{ fontSize: '2rem', fontWeight: 'bold' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Add an animated logo or icon here if desired */}
            </motion.div>
            <span>My Portfolio</span>
          </Typography>
        </motion.div>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
              ref={menuButtonRef}
              sx={{
                borderRadius: '50%',
                '&:hover': { backgroundColor: '#333', transform: 'scale(1.1)', transition: '0.3s ease' }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{
                style: {
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)'
                },
              }}
            >
              {['/', '/about', '/experience', '/skills', '/projects', '/contact'].map((path, index) => {
                const icons = [<FaHome />, <FaUser />, <FaBriefcase />, <FaCogs />, <FaProjectDiagram />, <FaEnvelope />];
                const labels = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];
                return (
                  <MenuItem 
                    key={path} 
                    onClick={handleClose} 
                    component={Link} 
                    to={path} 
                    sx={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      '&:hover': { 
                        textDecoration: 'underline', 
                        backgroundColor: 'transparent',
                        transform: 'scale(1.05)',
                        transition: '0.3s ease'
                      } 
                    }}
                  >
                    {icons[index]} <span className="ml-2">{labels[index]}</span>
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        ) : (
          <div className="flex space-x-6">
            {['/', '/about', '/experience', '/skills', '/projects', '/contact'].map((path, index) => {
              const icons = [<FaHome />, <FaUser />, <FaBriefcase />, <FaCogs />, <FaProjectDiagram />, <FaEnvelope />];
              const labels = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];
              return (
                <motion.div
                  key={path}
                  whileHover={{ scale: 1.1, rotate: 10, color: '#f0f0f0' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button color="inherit" component={Link} to={path} startIcon={icons[index]}>
                    {labels[index]}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
