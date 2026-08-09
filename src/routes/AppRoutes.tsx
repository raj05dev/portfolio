import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Every page is code-split so the initial bundle stays small.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Experience = lazy(() => import('@/pages/Experience'));
// const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const AppRoutes = () => {
  const location = useLocation();

  // Keying on pathname lets AnimatePresence run the page exit animation.
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
