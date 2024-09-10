
import { FaHandsHelping, FaCode, FaTools, FaRobot, FaBrain, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-gray-800 to-blue-700 text-white font-poppins relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Custom SVG Patterns */}
      <div className="svg-patterns">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="#4c51bf" />
          <circle cx="80" cy="80" r="25" fill="#2d3748" />
          <circle cx="50" cy="50" r="35" fill="#2b6cb0" />
        </svg>
      </div>

      {/* Blurred Background Overlay */}
      <div className="blurred-overlay"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative w-full text-center space-y-12 px-4 md:px-8 lg:px-16 z-30"
      >
        <motion.h2 
          className="text-5xl font-bold mb-6 text-teal-300"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="relative flex flex-col items-center space-y-8">
          {[
            { icon: FaReact, text: "I am Krishna Jadav, an aspiring React.js Developer with a Master’s in Information Technology. I specialize in building interactive and dynamic web applications using React.js.", color: "text-blue-400" },
            { icon: FaNodeJs, text: "I have strong skills in Node.js for server-side development, creating scalable and efficient backend solutions.", color: "text-green-400" },
            { icon: FaDatabase, text: "My experience extends to working with databases like MongoDB, ensuring robust data management and integration.", color: "text-yellow-400" },
            { icon: FaJsSquare, text: "Proficient in JavaScript ES6+, I build high-performance applications with modern JavaScript features and best practices.", color: "text-yellow-500" },
            { icon: FaCss3Alt, text: "I use Tailwind CSS and other modern CSS frameworks to create responsive and visually appealing user interfaces.", color: "text-blue-500" },
            { icon: FaHtml5, text: "Strong understanding of HTML5 for structuring content and ensuring accessibility across all devices.", color: "text-orange-500" },
            { icon: FaHandsHelping, text: "I am passionate about contributing to open-source projects and collaborating with teams to solve real-world problems.", color: "text-purple-400" },
            { icon: FaCode, text: "My love for coding drives me to continuously learn new technologies and improve my development skills.", color: "text-orange-400" },
            { icon: FaTools, text: "I am adept at using various development tools and practices, including version control with Git, to streamline workflows.", color: "text-teal-400" },
            { icon: FaRobot, text: "My interest in AI and machine learning motivates me to explore how these technologies can enhance web applications.", color: "text-gray-400" },
            { icon: FaBrain, text: "I believe in leveraging my skills to create innovative solutions that address complex challenges in technology.", color: "text-indigo-400" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="relative flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300"
              variants={fadeInUp}
            >
              <div className="relative flex items-center justify-center">
                <item.icon size={40} className={`${item.color} icon-hover`} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent blur-md z-0"></div>
              </div>
              <p className="text-lg leading-relaxed max-w-4xl relative z-10 bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3D Card Effect */}
        <motion.div
          className="card-effect"
          variants={fadeInUp}
        ></motion.div>

        {/* Interactive Elements */}
        <motion.div
          className="flex justify-center space-x-8"
          variants={fadeInUp}
        >
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaReact size={50} className="text-blue-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaNodeJs size={50} className="text-green-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaDatabase size={50} className="text-yellow-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaJsSquare size={50} className="text-yellow-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaCss3Alt size={50} className="text-blue-500" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="icon-hover">
            <FaHtml5 size={50} className="text-orange-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
