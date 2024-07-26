import { writeFileSync } from 'fs';
import { profile } from '../data/profile_raw';


// Achievements.svelte
const gamesWithAchievements = profile.games.filter(
    (game) => game.achievements !== undefined && game.achievements.length > 0
);

const perfectGames = gamesWithAchievements
    .filter((game) => game.achievements && game.num_achievements === game.achievements?.length)
    .sort((a, b) => (b.achievements?.length ?? 0) - (a.achievements?.length ?? 0));

// MostPlayed
let mostPlayed = profile.games.sort((a, b) => (b.playtime ?? 0) - (a.playtime ?? 0));
if (mostPlayed.length > 6) {
    mostPlayed = mostPlayed.slice(0, 6);
}

// Recent Games
const recentGames = profile.games
    .filter((game) => game.playtime_2weeks && game.playtime_2weeks > 60)
    .sort((a, b) => (b.playtime_2weeks ?? 0) - (a.playtime_2weeks ?? 0));

// Friends
const friends = profile.friends.sort((a, b) => a.friend_since - b.friend_since);

// Footer
const hoursPlayed = (
    profile.games.reduce((prev, { playtime }) => prev + playtime, 0) / 60
);


const ts = `
const profile = {
    "avatar": "${profile.avatar}",
    "level": "${profile.level}",
    "lastlogoff": "${profile.lastlogoff}",
    "steamid": "${profile.steamid}",
    "username": "${profile.username}",
    "hoursPlayed": ${hoursPlayed},
    "gamesOwned": ${profile.games.length},
};
const perfectGames = ${JSON.stringify(perfectGames)};
const mostPlayed = ${JSON.stringify(mostPlayed)};
const recentGames = ${JSON.stringify(recentGames)};
const friends = ${JSON.stringify(friends)};

export { profile, perfectGames, mostPlayed, recentGames, friends };
`

writeFileSync('src/lib/profile_agg.ts', ts);