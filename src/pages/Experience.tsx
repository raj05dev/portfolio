import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { experiences } from '@/data/experience';
import { personal, sameAsLinks } from '@/data/personal';
import { skillProficiencies } from '@/data/skills';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <SEO
        title="Experience | Raj Kumar"
        description="Professional experience and career journey of Raj Kumar, a Senior Front-End Developer with 6.5 years of expertise in React and Angular across fintech, insurance, and government sectors."
        keywords="senior front end developer experience, React developer, Angular developer, fintech front end, e-KYC e-Sign integration, Core Web Vitals optimization, software engineering career"
        canonical="https://www.rajkumar.dev/experience"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.rajkumar.dev/' },
          { name: 'Experience', url: 'https://www.rajkumar.dev/experience' },
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

      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-5xl font-bold text-gray-900 md:text-6xl dark:text-white"
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Senior Front-End Engineer with 6.5 years building high-performance web applications 
              in React and Angular (8 to 18+) across fintech, insurance, and government. I own 
              front-end architecture end-to-end with TypeScript, RxJS, and component-driven 
              design — cutting load times and bundle weight 40%, raising test coverage from 75% 
              to 90%, and accelerating delivery 30% with AI-assisted engineering.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col md:flex-row">
              {/* Company switcher */}
              <div className="mb-8 md:mb-0 md:w-1/3">
                <div className="space-y-4">
                  {experiences.map((experience, index) => (
                    <motion.button
                      key={experience.id}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={activeIndex === index}
                      className={`w-full rounded-lg border-2 p-4 text-left transition-all duration-300 ${
                        activeIndex === index
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-gray-200 hover:border-primary-300 dark:border-gray-700 dark:hover:border-primary-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <img src={experience.logo} alt={experience.company} className="h-12 w-12" />
                        <div>
                          <h3
                            className={`font-semibold ${
                              activeIndex === index
                                ? 'text-primary-700 dark:text-primary-300'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {experience.company}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {experience.role}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="md:w-2/3 md:pl-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="mb-4 flex items-center space-x-3">
                        <img src={active.logo} alt={active.company} className="h-12 w-12" />
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {active.role}
                          </h2>
                          <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                            {active.company}
                          </h3>
                        </div>
                      </div>
                      <div className="mb-6 flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{active.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{active.location}</span>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {active.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-4 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                        <Award className="mr-2 text-primary-600 dark:text-primary-400" size={20} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {active.achievements.map((achievement, index) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                            <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.technologies.map((technology, index) => (
                          <motion.span
                            key={technology}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                            className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Notable Projects
                      </h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {active.projects.map((project, index) => (
                          <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary-300 dark:border-gray-700 dark:hover:border-primary-600"
                          >
                            <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
                              {project.name}
                            </h5>
                            <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                              {project.description}
                            </p>
                            <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                              Impact: {project.impact}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill proficiency bars */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-white"
          >
            Evolution of <span className="gradient-text">Expertise</span>
          </motion.h2>
          {/* Wider than the single column was, so two cards still fit these long
              labels without wrapping. */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skillProficiencies.map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  // `h-full` + `mt-auto` on the bar keeps the two cards in a row
                  // aligned even when one label wraps to a second line.
                  className="flex h-full flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.skill}
                    </h3>
                    <span className="flex-shrink-0 whitespace-nowrap text-gray-600 dark:text-gray-400">
                      {item.years}
                    </span>
                  </div>
                  <div className="mt-auto h-3 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
