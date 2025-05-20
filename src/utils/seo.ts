import { Helmet } from 'react-helmet-async';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Breathe - Plant Styling & Home Greenery',
  description: 'Transform your space with custom plant styling solutions. Professional indoor plant design and maintenance services.',
  keywords: ['plant styling', 'indoor plants', 'plant maintenance', 'green spaces', 'biophilic design'],
  ogImage: 'https://res.cloudinary.com/udaygurram/image/upload/v1747243987/2151022047_nht41k.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

export const generateSEO = (config: Partial<SEOConfig>) => {
  const seoConfig = { ...defaultSEO, ...config };
  
  return (
    <Helmet>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:type" content={seoConfig.ogType} />
      {seoConfig.ogImage && <meta property="og:image" content={seoConfig.ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={seoConfig.twitterCard} />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      {seoConfig.ogImage && <meta name="twitter:image" content={seoConfig.ogImage} />}
    </Helmet>
  );
};