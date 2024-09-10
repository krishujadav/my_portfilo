import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import iPhoneImage from '../assets/iphone.png'; // Correct path for the iPhone image
import brainwaveImage from '../assets/brainwave.png'; // Import brainwave image
import brainwaveLogo from '../assets/4-small.png'; // Import brainwave logo
import IGImage from '../assets/1.jpg'; // Import brainwave image
import IGLogo from '../assets/image.png'; 
import GoogleFormImage from '../assets/GoogleForm.png'; // Import brainwave image
import GoogleFormLogo from '../assets/form.png'; 
import passwordImage from '../assets/password.png'; // Import brainwave image
import passwordLogo from '../assets/password logo.webp'; 
import currencyImage from '../assets/currrency.png'; // Import brainwave image
import currencyLogo from '../assets/logocurrency.png'; 

function Projects() {
  const projects = [
    {
      title: 'I phone',
      description: 'Create the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.',
      link: 'https://iphone-doc.vercel.app/',
      image: iPhoneImage, // Use imported image
      logo: 'https://w7.pngwing.com/pngs/27/996/png-transparent-apple-logo-apple-logo-white-heart-logo-thumbnail.png',
    },
    {
      title: 'Brainwave',
      description: 'Create modern websites with sleek parallax effects and bento box layouts. This project strengthens your React.js and Tailwind CSS skills.',
      link: 'https://krishujadav.github.io/brainwave/',
      image: brainwaveImage, // Use imported brainwave image
      logo: brainwaveLogo, // Use imported logo
    },
    {
      title: 'Midnight',
      description: 'Image selection and display, like and comment functionality, gallery view for all images, responsive design with Tailwind CSS, and dynamic UI elements with Material-UI.',
      link: 'https://www.behance.net/gallery/207503515/midnight_image_generator',
      image: IGImage, // Use imported brainwave image
      logo: IGLogo, // Use imported logo
    },
    {
      title: 'Google Form',
      description: 'Clone of google forms using React and Node JS.',
      link: 'https://www.behance.net/gallery/207515207/Google-Form',
      image: GoogleFormImage, // Use imported brainwave image
      logo: GoogleFormLogo, // Use imported logo
    },
    {
      title: 'Password Generator',
      description: 'This is a simple password generator web application built with React. It allows users to generate secure and randomized passwords based on their desired length and complexity.',
      link: 'https://krishujadav.github.io/Password-Generator/',
      image: passwordImage, // Use imported brainwave image
      logo: passwordLogo, // Use imported logo
    },
    {
      title: 'curenncy changer',
      description: 'The Currency Converter web application allows users to easily convert currencies using the API. With a simple form, users can select the currencies, enter the amount, to get real-time exchange rates and the converted amount.',
      link: 'https://krishujadav.github.io/currency_changer/',
      image: currencyImage, // Use imported brainwave image
      logo: currencyLogo, // Use imported logo
    },
    


  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex justify-center items-center">
      <div className="container mx-auto px-4 py-16">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-extrabold mb-12 text-center tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}  // Medium speed animation
          style={{
            textShadow: '0px 0px 10px rgba(0, 255, 255, 0.7)',
            fontFamily: '"Orbitron", sans-serif', // AI-inspired font
          }}
        >
           Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300" // Adjusted duration
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeInOut' }} // Faster animations
              whileHover={{ scale: 1.05, rotate: 1 }} // Subtle hover effect
              whileTap={{ scale: 0.98 }}
              style={{
                border: '2px solid rgba(0, 255, 255, 0.5)',
                boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.5)',
              }}
            >
              <motion.div
                className="flex justify-center items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }} // Adjusted duration
              >
                <img src={project.logo} alt={`${project.title} Logo`} className="w-14 h-14 object-cover rounded-full mr-2" />
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: '"Orbitron", sans-serif',
                    color: 'rgba(0, 255, 255, 0.9)',
                  }}
                >
                  {project.title}
                </h3>
              </motion.div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }} // Adjusted duration
                whileHover={{ scale: 1.1, rotate: 5 }} // Subtle hover effect
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-28 h-28 object-cover mx-auto rounded-full mb-4"
                  whileHover={{ scale: 1.1 }} // Subtle hover effect
                  transition={{ duration: 0.5 }}
                  style={{
                    border: '2px solid rgba(0, 255, 255, 0.7)',
                    boxShadow: '0px 0px 15px rgba(0, 255, 255, 0.7)',
                  }}
                />
              </motion.a>
              <p className="mt-4 text-gray-400" style={{ fontFamily: '"Roboto Mono", monospace' }}>
                {project.description}
              </p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline mt-6 inline-flex items-center"
                whileHover={{ scale: 1.05 }} // Slightly faster hover effect
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
