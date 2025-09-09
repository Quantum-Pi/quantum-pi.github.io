/**=====================*\
|    Helper functions    |
\=======================*/

import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

let globalBrowser: any = null;
let globalCounter = 0;

async function downloadImage(url: string, path: string) {
    if (!globalBrowser) {
        globalBrowser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
    }
    const page = await globalBrowser.newPage();

    try {
        await new Promise(resolve => setTimeout(resolve, (globalCounter++) * 500)); // Stagger requests to avoid rate limiting
        
        const response = await page.goto(url, { waitUntil: 'networkidle0' });
        
        if (!response) {
            throw new Error('No response received');
        }
        
        if (!response.ok()) {
            console.log(url);
            throw new Error(`HTTP ${response.status()}: ${response.statusText()}`);
        }
        
        const contentType = response.headers()['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
            console.log(`Not an image: ${contentType} for ${url}`);
            const text = await response.text();
            console.log('Response content:', text.substring(0, 200));
            throw new Error(`Invalid content type: ${contentType}`);
        }
        
        const buffer = await response.buffer();
        
        if (!buffer || buffer.length === 0) {
            throw new Error('Empty buffer received');
        }
        
        writeFileSync(path, buffer);
        console.log(`Successfully downloaded: ${url} -> ${path} (${buffer.length} bytes)`);
    } finally {
        await page.close();
    }

    return path;
}

function hash() {
	return 'x'
		.repeat(12)
		.replace(
			/./g,
			() => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 52)]
		);
}

export { downloadImage, hash, globalBrowser };
