import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleViewer from '../components/resources/ArticleViewer';
import GuideViewer from '../components/resources/GuideViewer';
import VideoViewer from '../components/resources/VideoViewer';
import { fetchResourceById } from '../services/resources';
import LoadingScreen from '../components/ui/LoadingScreen';
import SEO from '../components/SEO';

export default function ResourceDetailPage() {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadResource = async () => {
            try {
                // Ensure ID is parsed as int
                const resourceId = parseInt(id, 10);
                if (isNaN(resourceId)) {
                    navigate('/resources');
                    return;
                }

                const data = await fetchResourceById(resourceId);

                if (data) {
                    // Optional: Check if type matches resource.type if you want to be strict
                    // const typeMap = { 'blog': 'Article', 'guide': 'Guide', 'video': 'Video' };
                    // if (data.type !== typeMap[type]) { ... }

                    setResource(data);
                } else {
                    console.error("Resource not found");
                    navigate('/resources');
                }
            } catch (error) {
                console.error("Failed to load resource", error);
                navigate('/resources');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadResource();
        }
    }, [id, type, navigate]);

    if (loading) return <LoadingScreen />;

    if (!resource) return null;

    // Generate SEO Props
    const schemaType = type === 'video' ? 'VideoObject' : type === 'guide' ? 'TechArticle' : 'Article';

    return (
        <>
            <SEO
                title={`${resource.title} - IntraIntel.AI`}
                description={resource.description}
                ogImage={resource.image}
                schemaType={schemaType}
                canonicalUrl={`https://intraintel.ai/resources/${type}/${id}`}
            />
            {/* Render the correct viewer based on the 'type' param */}
            {type === 'blog' && <ArticleViewer resource={resource} />}
            {type === 'guide' && <GuideViewer resource={resource} />}
            {type === 'video' && <VideoViewer resource={resource} />}
            {type === 'newsletter' && <ArticleViewer resource={resource} />}
        </>
    );
}
