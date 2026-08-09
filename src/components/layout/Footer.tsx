import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerLinks, personal, socialLinks } from '@/data/personal';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <motion.h3 whileHover={{ scale: 1.05 }} className="gradient-text mb-4 text-2xl font-bold">
                {personal.name}
              </motion.h3>
            </Link>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">{personal.footerBio}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-200 dark:bg-gray-800 dark:text-gray-400 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 transition-colors duration-200 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Get in Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>{personal.location}</p>
              <p>Available for Front End Development &amp; Consulting</p>
              <Link
                to="/contact"
                className="mt-4 inline-block font-medium text-primary-600 transition-colors duration-200 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Send a message →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="text-gray-600 dark:text-gray-400">
              © {year} {personal.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
