
// Mock Data Service for Resources
// Content aligned with user request

import { detailedResourcesData as resources } from '../data/intraintel';

export const fetchResources = async () => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return resources;
};

export const fetchResourceById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return resources.find(r => r.id === id);
};

export { resources };
