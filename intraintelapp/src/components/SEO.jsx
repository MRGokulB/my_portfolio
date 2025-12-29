import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'IntraIntel.AI - Your Data. Your AI. Your Way.',
    description = 'Secure, private, fast enterprise AI search. Transform enterprise data into actionable insights with AI that operates inside your security boundaries.',
    keywords = 'AI, enterprise AI, data intelligence, secure AI, private AI, cloud storage, AWS, Azure, GCP, LLM, generative AI, enterprise search',
    author = 'IntraIntel.AI',
    ogImage = '/og-image.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl,
    noindex = false,
    nofollow = false,
    featureList = [],
    schemaType = null,
}) => {
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
    const siteUrl = 'https://intraintel.ai';
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Robots */}
            {(noindex || nofollow) && (
                <meta name="robots" content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
            )}

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="IntraIntel.AI" />

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullOgImage} />

            {/* Additional Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Theme Color */}
            <meta name="theme-color" content="#0D6EFD" />
            <meta name="msapplication-TileColor" content="#0D6EFD" />

            {/* GEO / JSON-LD Structured Data - Organization (Global) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "IntraIntel.AI",
                    "url": siteUrl,
                    "logo": fullOgImage,
                    "description": description,
                    "founder": {
                        "@type": "Person",
                        "name": "Dev Roy"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "contactType": "customer service",
                        "url": `${siteUrl}/contact`
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/intraintel-ai"
                    ]
                })}
            </script>

            {/* Dynamic Schema for Specific Pages (Articles, Videos, Guides) */}
            {schemaType === 'Article' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": title,
                        "description": description,
                        "image": fullOgImage,
                        "author": {
                            "@type": "Organization",
                            "name": author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "IntraIntel.AI",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteUrl}/logo1.svg`
                            }
                        },
                        "datePublished": new Date().toISOString() // Ideally pass publishedDate prop
                    })}
                </script>
            )}

            {schemaType === 'TechArticle' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        "headline": title,
                        "description": description,
                        "image": fullOgImage,
                        "proficiencyLevel": "Expert",
                        "author": {
                            "@type": "Organization",
                            "name": author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "IntraIntel.AI"
                        }
                    })}
                </script>
            )}

            {schemaType === 'VideoObject' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": title,
                        "description": description,
                        "thumbnailUrl": fullOgImage,
                        "uploadDate": new Date().toISOString(),
                        "publisher": {
                            "@type": "Organization",
                            "name": "IntraIntel.AI",
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteUrl}/logo1.svg`
                            }
                        }
                    })}
                </script>
            )}
            {schemaType === 'SoftwareApplication' && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "IntraIntel.AI",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Cloud",
                        "description": description,
                        "image": fullOgImage,
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "IntraIntel.AI",
                            "url": siteUrl
                        },
                        "featureList": featureList.length > 0 ? featureList : [
                            "Enterprise AI Agents",
                            "RAG Architecture",
                            "Multi-Agent Orchestration",
                            "Leadership Dashboard",
                            "Data Privacy & Security"
                        ]
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
