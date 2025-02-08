/**=====================*\
|    Helper functions    |
\=======================*/

import axios from 'axios';
import { createWriteStream } from 'fs';

async function downloadImage(url: string, path: string) {
	try {
		const response = await axios({
			url,
			method: 'GET',
			responseType: 'stream'
		});
		return new Promise<string>((resolve, reject) => {
			response.data
				.pipe(createWriteStream(path))
				.on('error', reject)
				.once('close', () => resolve(path));
		});
	} catch (err) {
		return new Promise<string>((resolve, reject) => {
			console.log(`Failed to fetch: [[${url}] on path [${path}]`);
			resolve(path);
		});
	}
}

function hash() {
	return 'x'
		.repeat(12)
		.replace(
			/./g,
			() => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 52)]
		);
}

export { downloadImage, hash };
