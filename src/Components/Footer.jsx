import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto text-center">
        <p className="footer-text">
          © 2024 Krishna Jadav. All rights reserved.
        </p>
        <div className="footer-icons">
          <motion.a
            href="https://github.com/krishujadav"
            className="footer-icon"
            whileHover={{
              scale: 1.3,
              rotate: 15,
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
            role="link"
            tabIndex={0}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/krishna-jadav-23aa36310/"
            className="footer-icon"
            whileHover={{
              scale: 1.3,
              rotate: -15,
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
            role="link"
            tabIndex={0}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:krishujadav2001@gmail.com"
            className="footer-icon"
            whileHover={{
              scale: 1.3,
              rotate: 15,
              y: -5,
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Mail"
            role="link"
            tabIndex={0}
          >
            <FaEnvelope size={24} />
          </motion.a>
          <motion.a
            href="https://instagram.com/by_krishu"
            className="footer-icon"
            whileHover={{
              scale: 1.3,
              rotate: -15,
              y: -5,
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Instagram"
            role="link"
            tabIndex={0}
          >
            <FaInstagram size={24} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
