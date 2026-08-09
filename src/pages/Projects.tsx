import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { GithubIcon } from '@/components/icons/BrandIcons';
import {
  defaultProjectFeatures,
  defaultProjectImpact,
  defaultProjectStatus,
  filterAliases,
  projectFilters,
  projectSources,
} from '@/data/projects';
import type { Project } from '@/types';

/** Normalise the raw project records once — the shape the grid consumes. */
const allProjects: Project[] = projectSources.map((source, index) => ({
  id: index + 1,
  title: source.name,
  description: source.description,
  image: source.image,
  category: source.tags.map((tag) => tag.name.toLowerCase()),
  technologies: source.tags.map((tag) => tag.name),
  tagColors: source.tags.map((tag) => tag.color),
  github: source.source_code_link.includes('github.com') ? source.source_code_link : null,
  demo: source.source_code_link.includes('github.com') ? null : source.source_code_link,
  features: defaultProjectFeatures,
  impact: defaultProjectImpact,
  status: defaultProjectStatus,
}));

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    const needle = filterAliases[activeFilter] ?? activeFilter;
    return allProjects.filter((project) =>
      project.category.some((category) => category.includes(needle)),
    );
  }, [activeFilter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <SEO
        title="Projects | Raj Kumar"
        description="Explore my portfolio of front end development projects showcasing expertise in Angular, React, and cloud technologies. View case studies of scalable web applications and microservices architecture."
        keywords="portfolio projects, front end development, Angular applications, React projects, web development portfolio, software engineering projects"
        canonical="https://www.rajkumar.dev/projects"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.rajkumar.dev/' },
          { name: 'Projects', url: 'https://www.rajkumar.dev/projects' },
        ]}
      />

      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800/90">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 text-5xl font-bold text-gray-900 md:text-6xl dark:text-white"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-600 dark:text-gray-400"
            >
              A collection of projects showcasing my expertise in Angular, React.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {projectFilters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md dark:bg-primary-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-900/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/80">
        <div className="container-custom">
          <AnimatePresence>
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-500 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-900/30">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute left-4 top-4">
                        <span
                          className={`rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-medium shadow-lg dark:border-gray-700 dark:bg-gray-800 ${project.tagColors[0]}`}
                        >
                          {project.technologies[0]}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-transparent bg-white p-2 text-gray-700 shadow-md transition-colors hover:text-primary-600 hover:shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:text-primary-400"
                            aria-label="View source code"
                          >
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-transparent bg-white p-2 text-gray-700 shadow-md transition-colors hover:text-primary-600 hover:shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:text-primary-400"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="bg-white p-6 dark:border-t dark:border-gray-800 dark:bg-gray-900">
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((technology, techIndex) => (
                          <span
                            key={technology}
                            className={`rounded-md border border-gray-100 bg-white px-2 py-1 text-xs font-medium dark:border-gray-700 dark:bg-gray-800 ${
                              project.tagColors[techIndex] || 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {technology}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-md border border-gray-100 bg-white px-2 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex justify-end border-t border-gray-100 pt-4 dark:border-gray-800/50">
                        <a
                          href={project.demo || project.github || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors duration-300 group-hover:translate-x-1 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="mx-auto max-w-2xl rounded-xl border border-gray-100 bg-white px-4 py-12 text-center dark:border-gray-700/30 dark:bg-gray-800/50">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects use this technology yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
            >
              Interested in working together?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              I'm always open to discussing product design work or partnership opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start a conversation
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
