interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: 'person' | 'website' | 'breadcrumb';
  data?: Record<string, unknown>;
  breadcrumbItems?: BreadcrumbItem[];
}

/** Emits a schema.org JSON-LD block for the given entity type. */
const StructuredData = ({ type, data = {}, breadcrumbItems }: StructuredDataProps) => {
  const buildSchema = (): Record<string, unknown> => {
    switch (type) {
      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: data.name,
          jobTitle: data.jobTitle,
          url: data.url,
          sameAs: data.sameAs,
          image: data.image,
          description: data.description,
        };
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name,
          url: data.url,
          description: data.description,
          author: {
            '@type': 'Person',
            name: (data.author as { name?: string } | undefined)?.name,
          },
        };
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems?.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
    />
  );
};

export default StructuredData;
