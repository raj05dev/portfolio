import { useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, Send, X } from 'lucide-react';
import SEO from '@/components/common/SEO';
import StructuredData from '@/components/common/StructuredData';
import { collaborationOptions, contactDetails, contactSocials, faqs } from '@/data/contact';
import type { ContactFormValues, Faq } from '@/types';
import { toast, Toaster } from 'sonner';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '@/lib/environment';

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-primary-600';

interface FaqItemProps {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * One FAQ row: the question plus a single teaser line of the answer, expanding
 * to the full answer on click.
 *
 * Both heights are measured and animated as plain pixel values, and `'auto'` is
 * deliberately never used: Framer Motion tweens *into* `height: 'auto'` but then
 * leaves the inline style stuck at `auto`, so any row that reached `auto` once
 * could never collapse again. `lineHeight` gives the collapsed teaser and
 * `scrollHeight` the expanded answer, re-measured on resize since the answer
 * reflows to a different number of lines. Measuring in a layout effect keeps the
 * first painted frame correct.
 */
const FaqItem = ({ faq, index, isOpen, onToggle }: FaqItemProps) => {
  const answerRef = useRef<HTMLParagraphElement>(null);
  // Seeded with one line of `text-base`/`leading-relaxed` (1rem x 1.625) so the
  // very first frame is already collapsed; the layout effect then measures.
  const [heights, setHeights] = useState({ teaser: 26, full: 26 });

  useLayoutEffect(() => {
    const answer = answerRef.current;
    if (!answer) return;

    const measure = () =>
      setHeights({
        teaser: parseFloat(getComputedStyle(answer).lineHeight) || 26,
        full: answer.scrollHeight,
      });

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(answer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-50px' }}
      className="border-b border-gray-200 pb-6 transition-colors duration-300 hover:border-primary-300 dark:border-gray-700 dark:hover:border-primary-600"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="group mb-3 flex w-full items-start justify-between gap-4 text-left"
      >
        <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
          {faq.question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="mt-1 flex-shrink-0 text-primary-600 dark:text-primary-400"
        >
          <ChevronDown size={22} />
          <span className="sr-only">{isOpen ? 'Collapse answer' : 'Expand answer'}</span>
        </motion.span>
      </button>
      {/* A plain CSS height transition rather than a `motion.div`: Framer Motion
          would not reliably apply successive numeric height targets here. */}
      <div
        id={`faq-answer-${index}`}
        style={{ height: isOpen ? heights.full : heights.teaser }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <p ref={answerRef} className="leading-relaxed text-gray-600 dark:text-gray-400">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Accordion: one answer open at a time; null means all collapsed to a teaser.
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        message: data.message,
        title: data.subject,
        time: new Date().toLocaleString(),
      }, EMAILJS_PUBLIC_KEY);

      toast.success('Message Sent Successfully!');
      setIsSubmitted(true);
      reset();
    } catch (err: any){
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Toaster position='top-center' richColors/>
      <SEO
        title="Contact | Raj Kumar"
        description="Get in touch with Raj Kumar, Front End Developer with expertise in Angular, React, and TypeScript. Available for consulting, collaboration, and project discussions."
        keywords="contact front end developer, hire React developer, hire Angular developer, front end consultant, tech collaboration, web development services"
        canonical="https://www.rajkumar.dev/contact"
      />
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', url: 'https://www.rajkumar.dev/' },
          { name: 'Contact', url: 'https://www.rajkumar.dev/contact' },
        ]}
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
              Let's <span className="gradient-text">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-relaxed text-gray-600 dark:text-gray-400"
            >
              Whether you're looking for a front end developer, want to collaborate on a project, or
              just want to chat about web development and technology, I'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                Send a Message
              </h2>

              {/* {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center space-x-3 rounded-lg border border-success-200 bg-success-100 p-4 dark:border-success-800 dark:bg-success-900/20"
                >
                  <CheckCircle className="text-success-600 dark:text-success-400" size={24} />
                  <div>
                    <p className="font-medium text-success-800 dark:text-success-200">
                      Message sent successfully!
                    </p>
                    <p className="text-sm text-success-600 dark:text-success-400">
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )} */}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-start space-x-3 rounded-lg border border-error-200 bg-error-100 p-4 dark:border-error-800 dark:bg-error-900/20"
                >
                  <X className="text-error-600 dark:text-error-400" size={24} />
                  <div>
                    <p className="font-medium text-error-800 dark:text-error-200">
                      Failed to send message
                    </p>
                    <p className="text-sm text-error-600 dark:text-error-400">{submitError}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={inputClass}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                      })}
                      className={inputClass}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={inputClass}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project, speaking opportunity, or just say hello!"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
                  whileHover={isSubmitting ? {} : { scale: 1.01 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Details + socials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <motion.div
                        key={detail.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4"
                      >
                        <div className="rounded-lg bg-primary-100 p-3 dark:bg-primary-900">
                          <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                            {detail.label}
                          </h3>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">{detail.value}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                  Connect on Social
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactSocials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:border-primary-300 dark:border-gray-700 dark:hover:border-primary-600 ${social.color}`}
                        whileHover={{ y: -2 }}
                      >
                        <div className="mb-2 flex items-center space-x-3">
                          <Icon size={24} />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {social.name}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {social.description}
                        </p>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ways to collaborate */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-white"
          >
            What I Do <span className="gradient-text">Best</span> 
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collaborationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card group text-center hover:border-primary-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-600 dark:hover:shadow-primary-500/10"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 text-4xl">{option.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-white"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
