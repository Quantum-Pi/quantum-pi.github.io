import { profile } from '../data/profile_raw';
import axios from 'axios';
import { createWriteStream, existsSync, writeFileSync } from 'fs';

const pfp = 'https://avatars.steamstatic.com/${profile.avatar}'
const game = 'https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg';
const friend = 'https://avatars.steamstatic.com/${friend.avatar}';

async function downloadImage(url: string, path: string) {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    return new Promise<string>((resolve, reject) => {
        response.data.pipe(createWriteStream(path))
            .on('error', reject)
            .once('close', () => resolve(path));
    });
}

function hash() {
    return "x".repeat(12)
        .replace(/./g, c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 52)]);
}


const appIds: { appId: number, path: string, hash: string }[] = [];

const gamePromises = await Promise.all(profile.games.map(game => {
    if (game.playtime > 0) {
        const url = `https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`;
        const path = `src/assets/games/${game.appid}.jpg`;
        appIds.push({ appId: game.appid, path, hash: hash() })
        if (!existsSync(path)) {
            return downloadImage(url, path)
        }
    }
}));


const savedAvatars: Record<string, number> = {};
const profilePics: { profile: string, path: string, hash: string }[] = [];

const profilePicPromises = await Promise.all(profile.friends.map(friend => {
    const url = `https://avatars.steamstatic.com/${friend.avatar}`;
    const path = `src/assets/profile_pictures/${friend.avatar}`;
    if (!savedAvatars[friend.avatar]) {
        profilePics.push({ profile: friend.avatar, path, hash: hash() })
    }
    savedAvatars[friend.avatar] = 1;
    if (!existsSync(path)) {
        return downloadImage(url, path)
    }
}));

console.log(`Fetched ${gamePromises.filter(path => path != undefined).length} new games`)
console.log(`Fetched ${profilePicPromises.filter(path => path != undefined).length} new profile pictures`)

const appIdImports = `${appIds.map(game => `import ${game.hash} from '../assets/games/${game.appId}.jpg?enhanced&format=webp'`).join('\n')}

const gameDict: Record<string, Picture> = {
${appIds.map(game => `\t[${game.appId}]: ${game.hash}`).join(',\n')}
};

const getGame = (appId: number) => {
	if (gameDict[appId]) {
		return gameDict[appId]
	}
	return \`https://cdn.cloudflare.steamstatic.com/steam/apps/\${appId}/header.jpg\`
}
export { getGame }`

const profilePicImports = `${profilePics.map(profile => `import ${profile.hash} from '../assets/profile_pictures/${profile.profile}?enhanced&format=webp&w=64;128;200'`).join('\n')}

const pfpDict: Record<string, Picture> = {
${profilePics.map(profile => `\t"${profile.profile}": ${profile.hash}`).join(',\n')}
};

const getProfilePicture = (profilePic: string) => {
    if (pfpDict[profilePic]) {
		return pfpDict[profilePic]
	}
    return \`https://avatars.steamstatic.com/\${profilePic}\`
}
export { getProfilePicture }`


console.log(appIdImports)
const cache = `/**
* NOTE: This file is auto-generated by scripts/prefetch.ts
* DO NOT modify manually
*/
import type { Picture } from 'vite-imagetools';
${appIdImports}
${profilePicImports}
`;

writeFileSync('src/lib/cache.ts', cache);