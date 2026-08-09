import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { personal, sameAsLinks } from '@/data/personal';
import { achievements, journeyParagraphs, technologies } from '@/data/skills';

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-20"
  >
    <SEO
      title="About | Raj Kumar"
      description="Learn more about Raj Kumar — a Front End Developer based in Bengaluru with 6.5+ years of experience in Angular, React, and TypeScript."
      keywords="about raj kumar, front end developer bengaluru, Angular developer, React developer, TypeScript, fintech front end"
      canonical="https://www.rajkumar.dev/about"
    />
    <StructuredData
      type="breadcrumb"
      breadcrumbItems={[
        { name: 'Home', url: 'https://www.rajkumar.dev/' },
        { name: 'About', url: 'https://www.rajkumar.dev/about' },
      ]}
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

    {/* Intro */}
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-balance text-5xl font-bold text-gray-900 md:text-6xl dark:text-white"
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          {/* Narrower measure than the heading: ~70 characters a line reads far
              better than the full max-w-4xl, especially centred. */}
          <div className="mx-auto max-w-2xl space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-pretty text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400"
            >
              I'm a passionate Front End Developer with expertise in Angular, React, TypeScript, and
              AI-assisted development using Claude Code.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-pretty text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400"
            >
              Based in Bengaluru, I focus on building scalable and performant web applications while
              sharing knowledge and creating resources for the developer community.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex items-center justify-center space-x-6 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{personal.yearsOfExperience}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
              My Journey in <span className="gradient-text">Tech</span>
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              {journeyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
              <img src="/developer.svg" alt="Developer illustration" className="object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Technical skills */}
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300"
          >
            Technologies and tools I work with to build modern web applications.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {technology.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Achievements */}
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
          >
            Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300"
          >
            Milestones and recognition throughout my professional journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{achievement.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{achievement.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </motion.div>
);

export default About;
