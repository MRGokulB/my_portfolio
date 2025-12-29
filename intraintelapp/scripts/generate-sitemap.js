
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://intraintel.ai';
const DATA_FILE_PATH = path.join(__dirname, '../src/data/intraintel.js');
const OUTPUT_FILE_PATH = path.join(__dirname, '../public/sitemap.xml');

// Static routes
const routes = [
    '/',
    '/about',
    '/features',
    '/solutions',
    '/resources',
    '/contact'
];

async function generateSitemap() {
    try {
        console.log('Generating sitemap...');

        // 1. Read the data file
        const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');

        // 2. Extract detailedResourcesData block
        // We look for "export const detailedResourcesData = [" ... and grab everything until the next export or end of array
        // A simple regex to find "id: value" inside that block is safer than trying to parse the whole object structure

        // Find the start of the array
        const startMarker = 'export const detailedResourcesData = [';
        const startIndex = fileContent.indexOf(startMarker);

        if (startIndex === -1) {
            console.warn('Could not find detailedResourcesData in data file. Skipping dynamic routes.');
        } else {
            // substring from the start marker
            const dataSubstring = fileContent.substring(startIndex);
            // find the end of the array (loosely assuming it ends before the next export or EOF)
            // Actually, we can just scan for "id:" patterns. The IDs we want are numbers or strings.
            // Let's iterate through the file content starting from the marker

            const idRegex = /id:\s*['"]?(\w+)['"]?/g;
            let match;

            // We only want to search within the detailedResourcesData array context. 
            // To be safe, let's just regex the whole file but only AFTER the marker, 
            // and stop when we hit "export const" again or some other delimiter if possible.
            // But given the file structure, "detailedResourcesData" is followed by object blocks.

            // Let's refine: Extract the text between "export const detailedResourcesData = [" and the next "export const" or end of file.
            const nextExportIndex = fileContent.indexOf('export const', startIndex + 1);
            const relevantBlock = nextExportIndex !== -1
                ? fileContent.substring(startIndex, nextExportIndex)
                : fileContent.substring(startIndex);

            // Regex to match objects with id and type
            // Matches: { ... id: 20, ... type: 'guide', ... } or { ... type: 'guide', ... id: 20, ... }
            // Since the object properties can be in any order, we'll simple regex for id and then look for type in the same block, or vice versa?
            // A safer, albeit still hacky way for this specific file structure:
            // Match the whole object literal: \{[^{}]*id:\s*\d+[^{}]*\}

            const objectRegex = /\{[^{}]*id:\s*(\d+)[^{}]*type:\s*['"](\w+)['"][^{}]*\}/g; // Assumes id comes before or near type
            // Actually, we can use a simpler approach:
            // The file format seems consistent. Let's just use strict regex on the specific format we see in `intraintel.js`.
            // Structure: 
            // {
            //    id: 20,
            //    type: 'guide',
            //    ...

            // Let's try to match pairs.
            const resourcesRegex = /id:\s*(\d+)[\s\S]*?type:\s*['"](\w+)['"]/g;

            while ((match = resourcesRegex.exec(relevantBlock)) !== null) {
                const id = match[1];
                const type = match[2];
                if (!isNaN(id) && type) {
                    routes.push(`/resources/${type}/${id}`);
                }
            }
        }

        // 3. Build XML
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

        // 4. Write file
        fs.writeFileSync(OUTPUT_FILE_PATH, xml);
        console.log(`Sitemap generated successfully at ${OUTPUT_FILE_PATH}`);
        console.log(`Total URLs: ${routes.length}`);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
