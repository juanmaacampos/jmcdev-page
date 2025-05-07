export const generateMetaTags = (title, description) => {
  return {
    title: `${title} | JMCdev`,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      }
    ]
  };
};

export const generateSchemaMarkup = (type, data) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return JSON.stringify(baseSchema);
};
