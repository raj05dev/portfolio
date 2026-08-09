import { personal } from '@/data/personal';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

/**
 * React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree into
 * <head>, so no helmet dependency is needed.
 */
const SEO = ({
  title = 'Raj Kumar - Front End Developer & Tech Consultant',
  description = personal.description,
  keywords = 'front end developer, Angular, React, TypeScript, JavaScript, RxJS, Core Web Vitals, fintech front end, web development, software engineer, portfolio',
  ogImage = personal.ogImage,
  ogUrl = personal.siteUrl,
  canonical = personal.siteUrl,
}: SEOProps) => {
  const fullTitle = title.includes('Raj Kumar')
    ? title
    : `${title} | Raj Kumar Portfolio`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export default SEO;
