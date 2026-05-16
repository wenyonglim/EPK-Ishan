import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      className=' overflow-auto footer items-center p-4 bg-neutral text-neutral-content'
    >
      <div className='items-center grid-flow-col'>
        <p>Copyright © {currentYear} - All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
