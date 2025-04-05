import { Profile } from './steam_raw';

export type SteamGame = Profile['games'][number];
type NonSteamGame = Omit<
	SteamGame,
	'appid' | 'achievements' | 'icon_url' | 'last_played' | 'nonSteam'
> & {
	nonSteam: true;
	appid: string;
	playtime_recorded?: number;
	last_played?: number;
	achievements?: undefined;
	icon_url?: undefined;
};

export type Game = SteamGame | NonSteamGame;

export const nonSteamGames: NonSteamGame[] = [
	{
		appid: 'genshin',
		name: 'Genshin Impact',
		playtime: 80301,
		playtime_recorded: 1741668382,
		nonSteam: true
	},
	{
		appid: 'wow',
		name: 'World of Warcraft',
		playtime: 241497,
		last_played: 1721298730,
		nonSteam: true
	}
];
