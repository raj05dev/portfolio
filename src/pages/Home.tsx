import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import TypewriterText from '@/components/common/TypewriterText';
import { heroStats, personal, sameAsLinks, socialLinks, typewriterWords } from '@/data/personal';

const PARTICLE_COUNT = 20;

const Home = () => {
  // Positions/durations are randomised once so they stay put across re-renders.
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Raj Kumar - Front End Developer & Tech Consultant"
        description={personal.description}
        keywords="front end developer, Angular, React, TypeScript, RxJS, Core Web Vitals, fintech front end, web development"
        canonical="https://www.rajkumar.dev/"
      />
      <StructuredData
        type="person"
        data={{
          name: personal.name,
          jobTitle: personal.jobTitle,
          url: personal.siteUrl,
          sameAs: sameAsLinks,
          description: personal.description,
        }}
      />
      <StructuredData
        type="website"
        data={{
          name: 'Raj Kumar Portfolio',
          url: personal.siteUrl,
          description:
            'Professional portfolio of Raj Kumar, Front End Developer with expertise in Angular, React, and TypeScript.',
          author: { name: personal.name },
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute h-2 w-2 rounded-full bg-primary-200 dark:bg-primary-800"
              animate={{ x: [0, 100, 0], y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
              style={{ left: particle.left, top: particle.top }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20 text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 text-lg text-gray-600 dark:text-gray-400"
              >
                {personal.greeting}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white"
              >
                <span className="gradient-text">{personal.firstName}</span>
                <br />
                {personal.lastName}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 flex h-16 items-center justify-center text-2xl font-semibold text-gray-700 md:text-3xl lg:justify-start dark:text-gray-300"
              >
                <TypewriterText
                  words={typewriterWords}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 lg:mx-0 dark:text-gray-400"
              >
                {personal.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                {/* <Link to="/projects" className="btn-primary group inline-flex items-center">
                  <span>View My Work</span>
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Link> */}
                <Link to="/experience" className="btn-primary group inline-flex items-center">
                  <span>View My Experince</span>
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </Link>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group inline-flex items-center"
                >
                  <span>Download Resume</span>
                  <Download
                    className="ml-2 transition-transform group-hover:translate-y-0.5"
                    size={20}
                  />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center space-x-6 lg:justify-start"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full bg-white p-3 text-gray-500 shadow-lg transition-all duration-300 dark:bg-gray-800 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      <Icon size={24} />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto h-80 w-80 lg:h-96 lg:w-96">
                <motion.div className="h-full w-full rounded-full bg-gradient-to-br from-primary-400 via-secondary-400 to-accent-400 p-1">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
                    <div className="flex h-5/6 w-5/6 items-center justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={personal.avatarWebpSrcSet}
                          sizes={personal.avatarSizes}
                        />
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={personal.avatar}
                          srcSet={personal.avatarJpegSrcSet}
                          sizes={personal.avatarSizes}
                          alt={personal.name}
                          width={900}
                          height={900}
                          decoding="async"
                          // The hero portrait is the LCP element — never lazy-load it.
                          loading="eager"
                          fetchPriority="high"
                        />
                      </picture>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 h-3 w-1 rounded-full bg-gray-400 dark:bg-gray-600"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="gradient-text mb-2 text-4xl font-bold md:text-5xl">{stat.value}</div>
                <div className="font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 text-balance text-4xl font-bold text-gray-900 md:text-5xl dark:text-white"
            >
              Turning Ideas into <span className="gradient-text">Solutions</span>
            </motion.h2>
            {/* Narrower measure than the heading: ~70 characters a line reads far
                better than the full max-w-4xl, especially centred. */}
            <div className="mx-auto mb-12 max-w-2xl space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-pretty text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400"
              >
                With over 6.5 years of experience in front-end development, I've helped
                organizations across fintech, insurance, and government sectors build scalable and
                performant web applications using React and Angular.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-pretty text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400"
              >
                From architecting enterprise solutions and integrating secure e-KYC, e-Sign, and
                payment ecosystems to accelerating delivery through AI-assisted development with
                Claude Code, I'm passionate about creating clean, maintainable code and fostering
                developer communities.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="btn-primary inline-flex">
                Learn More About Me
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
