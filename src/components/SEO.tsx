import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export function SEO({ 
  title = `${profile.identity.name} | ${profile.identity.primaryTitle}`,
  description = profile.identity.metaDescription,
  canonical 
}: SEOProps) {
  const siteTitle = title.includes(profile.identity.name) ? title : `${title} | ${profile.identity.name}`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": profile.identity.name,
          "jobTitle": profile.identity.primaryTitle,
          "url": "https://nathaniel-eyo.com",
          "sameAs": [
            profile.socials.linkedin,
            profile.socials.github,
            profile.socials.twitter
          ]
        })}
      </script>
    </Helmet>
  );
}
