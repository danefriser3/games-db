export interface AuthToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const dev = true;
const url = dev ? "http://localhost:3000" : "https://games-db-be.vercel.app";
export class GamesController {
  private client_id = "jjy9wkuypf4iup7yjr2iydthya4xuy";
  private client_secret = "sozwidhd3itvdc5tr35fplkvl22sdx";

  authenticate = async (): Promise<AuthToken> => {
    return await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=client_credentials`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  };

  static getTop10Popular = async (
    access_token: string,
    platform: number
  ): Promise<any> => {
    return await fetch(`${url}/api/pp`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token, platform }),
    }).then((result) => result.json());
  };

  static getTop10Rated = async (
    access_token: string,
    platform: number
  ): Promise<GameDetail[]> => {
    return await fetch(`${url}/api/rated`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token, platform }),
    }).then((result) => result.json());
  };

  static getGameByName = async (
    access_token: string,
    q: string
  ): Promise<GameDetail[]> => {
    return await fetch(`${url}/api/bo`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token, q }),
    })
      .then((result) => result.json())
      .catch(() => {});
  };
  static getGameById = async (
    access_token: string,
    q: number
  ): Promise<GameDetail> => {
    return await fetch(`${url}/api/abc`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token, q }),
    })
      .then((result) => result.json())
      .then((t) => t[0])
      .catch((e) => console.log(e));
  };
  static platforms = [
    {
      id: 471,
      generation: 9,
      name: "Meta Quest 3",
    },
    {
      id: 390,
      generation: 9,
      name: "PlayStation VR2",
    },
    {
      id: 381,
      generation: 9,
      name: "Playdate",
    },
    {
      id: 169,
      generation: 9,
      name: "Xbox Series X|S",
    },
    {
      id: 167,
      generation: 9,
      name: "PlayStation 5",
    },
    {
      id: 477,
      generation: 8,
      name: "Panasonic Jungle",
    },
    {
      id: 438,
      generation: 8,
      name: "Arduboy",
    },
    {
      id: 414,
      generation: 8,
      name: "LeapTV",
    },
    {
      id: 309,
      generation: 8,
      name: "Evercade",
    },
    {
      id: 165,
      generation: 8,
      name: "PlayStation VR",
    },
    {
      id: 137,
      generation: 8,
      name: "New Nintendo 3DS",
    },
    {
      id: 130,
      generation: 8,
      name: "Nintendo Switch",
    },
    {
      id: 72,
      generation: 8,
      name: "Ouya",
    },
    {
      id: 49,
      generation: 8,
      name: "Xbox One",
    },
    {
      id: 48,
      generation: 8,
      name: "PlayStation 4",
    },
    {
      id: 46,
      generation: 8,
      name: "PlayStation Vita",
    },
    {
      id: 41,
      generation: 8,
      name: "Wii U",
    },
    {
      id: 37,
      generation: 8,
      name: "Nintendo 3DS",
    },
    {
      id: 486,
      generation: 7,
      name: "Digiblast",
    },
    {
      id: 474,
      generation: 7,
      name: "Gizmondo",
    },
    {
      id: 413,
      generation: 7,
      name: "Leapster Explorer/LeadPad Explorer",
    },
    {
      id: 407,
      generation: 7,
      name: "HyperScan",
    },
    {
      id: 240,
      generation: 7,
      name: "Zeebo",
    },
    {
      id: 159,
      generation: 7,
      name: "Nintendo DSi",
    },
    {
      id: 38,
      generation: 7,
      name: "PlayStation Portable",
    },
    {
      id: 20,
      generation: 7,
      name: "Nintendo DS",
    },
    {
      id: 12,
      generation: 7,
      name: "Xbox 360",
    },
    {
      id: 9,
      generation: 7,
      name: "PlayStation 3",
    },
    {
      id: 5,
      generation: 7,
      name: "Wii",
    },
    {
      id: 478,
      generation: 6,
      name: "Panasonic M2",
    },
    {
      id: 440,
      generation: 6,
      name: "Visual Memory Unit / Visual Memory System",
    },
    {
      id: 439,
      generation: 6,
      name: "V.Smile",
    },
    {
      id: 412,
      generation: 6,
      name: "Leapster",
    },
    {
      id: 42,
      generation: 6,
      name: "N-Gage",
    },
    {
      id: 24,
      generation: 6,
      name: "Game Boy Advance",
    },
    {
      id: 23,
      generation: 6,
      name: "Dreamcast",
    },
    {
      id: 21,
      generation: 6,
      name: "Nintendo GameCube",
    },
    {
      id: 11,
      generation: 6,
      name: "Xbox",
    },
    {
      id: 8,
      generation: 6,
      name: "PlayStation 2",
    },
    {
      id: 476,
      generation: 5,
      name: "Apple Pippin",
    },
    {
      id: 475,
      generation: 5,
      name: "R-Zone",
    },
    {
      id: 441,
      generation: 5,
      name: "PocketStation",
    },
    {
      id: 416,
      generation: 5,
      name: "64DD",
    },
    {
      id: 410,
      generation: 5,
      name: "Atari Jaguar CD",
    },
    {
      id: 379,
      generation: 5,
      name: "Game.com",
    },
    {
      id: 308,
      generation: 5,
      name: "Playdia",
    },
    {
      id: 274,
      generation: 5,
      name: "PC-FX",
    },
    {
      id: 123,
      generation: 5,
      name: "WonderSwan Color",
    },
    {
      id: 120,
      generation: 5,
      name: "Neo Geo Pocket Color",
    },
    {
      id: 119,
      generation: 5,
      name: "Neo Geo Pocket",
    },
    {
      id: 114,
      generation: 5,
      name: "Amiga CD32",
    },
    {
      id: 87,
      generation: 5,
      name: "Virtual Boy",
    },
    {
      id: 62,
      generation: 5,
      name: "Atari Jaguar",
    },
    {
      id: 57,
      generation: 5,
      name: "WonderSwan",
    },
    {
      id: 50,
      generation: 5,
      name: "3DO Interactive Multiplayer",
    },
    {
      id: 32,
      generation: 5,
      name: "Sega Saturn",
    },
    {
      id: 22,
      generation: 5,
      name: "Game Boy Color",
    },
    {
      id: 7,
      generation: 5,
      name: "PlayStation",
    },
    {
      id: 4,
      generation: 5,
      name: "Nintendo 64",
    },
    {
      id: 487,
      generation: 4,
      name: "LaserActive",
    },
    {
      id: 482,
      generation: 4,
      name: "Sega CD 32X",
    },
    {
      id: 480,
      generation: 4,
      name: "Super A'Can",
    },
    {
      id: 415,
      generation: 4,
      name: "Watara/QuickShot Supervision",
    },
    {
      id: 408,
      generation: 4,
      name: "Mega Duck/Cougar Boy",
    },
    {
      id: 378,
      generation: 4,
      name: "Gamate",
    },
    {
      id: 339,
      generation: 4,
      name: "Sega Pico",
    },
    {
      id: 306,
      generation: 4,
      name: "Satellaview",
    },
    {
      id: 136,
      generation: 4,
      name: "Neo Geo CD",
    },
    {
      id: 131,
      generation: 4,
      name: "Super NES CD-ROM System",
    },
    {
      id: 128,
      generation: 4,
      name: "PC Engine SuperGrafx",
    },
    {
      id: 86,
      generation: 4,
      name: "TurboGrafx-16/PC Engine",
    },
    {
      id: 80,
      generation: 4,
      name: "Neo Geo AES",
    },
    {
      id: 78,
      generation: 4,
      name: "Sega CD",
    },
    {
      id: 61,
      generation: 4,
      name: "Atari Lynx",
    },
    {
      id: 58,
      generation: 4,
      name: "Super Famicom",
    },
    {
      id: 35,
      generation: 4,
      name: "Sega Game Gear",
    },
    {
      id: 33,
      generation: 4,
      name: "Game Boy",
    },
    {
      id: 30,
      generation: 4,
      name: "Sega 32X",
    },
    {
      id: 29,
      generation: 4,
      name: "Sega Mega Drive/Genesis",
    },
    {
      id: 19,
      generation: 4,
      name: "Super Nintendo Entertainment System",
    },
    {
      id: 376,
      generation: 3,
      name: "Epoch Super Cassette Vision",
    },
    {
      id: 99,
      generation: 3,
      name: "Family Computer",
    },
    {
      id: 84,
      generation: 3,
      name: "SG-1000",
    },
    {
      id: 64,
      generation: 3,
      name: "Sega Master System/Mark III",
    },
    {
      id: 60,
      generation: 3,
      name: "Atari 7800",
    },
    {
      id: 51,
      generation: 3,
      name: "Family Computer Disk System",
    },
    {
      id: 18,
      generation: 3,
      name: "Nintendo Entertainment System",
    },
    {
      id: 375,
      generation: 2,
      name: "Epoch Cassette Vision",
    },
    {
      id: 307,
      generation: 2,
      name: "Game & Watch",
    },
    {
      id: 139,
      generation: 2,
      name: "1292 Advanced Programmable Video System",
    },
    {
      id: 138,
      generation: 2,
      name: "VC 4000",
    },
    {
      id: 127,
      generation: 2,
      name: "Fairchild Channel F",
    },
    {
      id: 91,
      generation: 2,
      name: "Bally Astrocade",
    },
    {
      id: 89,
      generation: 2,
      name: "Microvision",
    },
    {
      id: 70,
      generation: 2,
      name: "Vectrex",
    },
    {
      id: 68,
      generation: 2,
      name: "ColecoVision",
    },
    {
      id: 67,
      generation: 2,
      name: "Intellivision",
    },
    {
      id: 66,
      generation: 2,
      name: "Atari 5200",
    },
    {
      id: 59,
      generation: 2,
      name: "Atari 2600",
    },
    {
      id: 142,
      generation: 1,
      name: "PC-50X Family",
    },
    {
      id: 88,
      generation: 1,
      name: "Odyssey",
    },
    {
      id: 504,
      name: "Uzebox",
    },
    {
      id: 481,
      name: "Tomy Tutor / Pyuta / Grandstand Tutor",
    },
    {
      id: 479,
      name: "Terebikko / See 'n Say Video Phone",
    },
    {
      id: 473,
      name: "Arcadia 2001",
    },
    {
      id: 472,
      name: "visionOS",
    },
    {
      id: 417,
      name: "Palm OS",
    },
    {
      id: 411,
      name: "Handheld Electronic LCD",
    },
    {
      id: 409,
      name: "Legacy Computer",
    },
    {
      id: 406,
      name: "Sinclair QL",
    },
    {
      id: 405,
      name: "Windows Mobile",
    },
    {
      id: 389,
      name: "AirConsole",
    },
    {
      id: 388,
      name: "Gear VR",
    },
    {
      id: 387,
      name: "Oculus Go",
    },
    {
      id: 386,
      name: "Meta Quest 2",
    },
    {
      id: 385,
      name: "Oculus Rift",
    },
    {
      id: 384,
      name: "Oculus Quest",
    },
    {
      id: 382,
      name: "Intellivision Amico",
    },
    {
      id: 380,
      name: "Casio Loopy",
    },
    {
      id: 377,
      name: "Plug & Play",
    },
    {
      id: 374,
      name: "Sharp MZ-2200",
    },
    {
      id: 373,
      name: "Sinclair ZX81",
    },
    {
      id: 372,
      name: "OOParts",
    },
    {
      id: 239,
      name: "Blu-ray Player",
    },
    {
      id: 238,
      name: "DVD Player",
    },
    {
      id: 237,
      name: "Sol-20",
    },
    {
      id: 236,
      name: "Exidy Sorcerer",
    },
    {
      id: 203,
      name: "DUPLICATE Stadia",
    },
    {
      id: 170,
      name: "Google Stadia",
    },
    {
      id: 166,
      name: "Pokémon mini",
    },
    {
      id: 164,
      name: "Daydream",
    },
    {
      id: 163,
      name: "SteamVR",
    },
    {
      id: 162,
      name: "Oculus VR",
    },
    {
      id: 161,
      name: "Windows Mixed Reality",
    },
    {
      id: 158,
      name: "Commodore CDTV",
    },
    {
      id: 157,
      name: "NEC PC-6000 Series",
    },
    {
      id: 156,
      name: "Thomson MO5",
    },
    {
      id: 155,
      name: "Tatung Einstein",
    },
    {
      id: 154,
      name: "Amstrad PCW",
    },
    {
      id: 153,
      name: "Dragon 32/64",
    },
    {
      id: 152,
      name: "FM-7",
    },
    {
      id: 151,
      name: "TRS-80 Color Computer",
    },
    {
      id: 150,
      name: "Turbografx-16/PC Engine CD",
    },
    {
      id: 149,
      name: "PC-9800 Series",
    },
    {
      id: 148,
      name: "AY-3-8607",
    },
    {
      id: 147,
      name: "AY-3-8606",
    },
    {
      id: 146,
      name: "AY-3-8605",
    },
    {
      id: 145,
      name: "AY-3-8603",
    },
    {
      id: 144,
      name: "AY-3-8710",
    },
    {
      id: 143,
      name: "AY-3-8760",
    },
    {
      id: 141,
      name: "AY-3-8610",
    },
    {
      id: 140,
      name: "AY-3-8500",
    },
    {
      id: 135,
      name: "Hyper Neo Geo 64",
    },
    {
      id: 134,
      name: "Acorn Electron",
    },
    {
      id: 133,
      name: "Odyssey 2 / Videopac G7000",
    },
    {
      id: 132,
      name: "Amazon Fire TV",
    },
    {
      id: 129,
      name: "Texas Instruments TI-99",
    },
    {
      id: 126,
      name: "TRS-80",
    },
    {
      id: 125,
      name: "PC-8800 Series",
    },
    {
      id: 124,
      name: "SwanCrystal",
    },
    {
      id: 122,
      name: "Nuon",
    },
    {
      id: 121,
      name: "Sharp X68000",
    },
    {
      id: 118,
      name: "FM Towns",
    },
    {
      id: 117,
      name: "Philips CD-i",
    },
    {
      id: 116,
      name: "Acorn Archimedes",
    },
    {
      id: 115,
      name: "Apple IIGS",
    },
    {
      id: 113,
      name: "OnLive Game System",
    },
    {
      id: 112,
      name: "Microcomputer",
    },
    {
      id: 111,
      name: "Imlac PDS-1",
    },
    {
      id: 110,
      name: "PLATO",
    },
    {
      id: 109,
      name: "CDC Cyber 70",
    },
    {
      id: 108,
      name: "PDP-11",
    },
    {
      id: 107,
      name: "Call-A-Computer time-shared mainframe computer system",
    },
    {
      id: 106,
      name: "SDS Sigma 7",
    },
    {
      id: 105,
      name: "HP 3000",
    },
    {
      id: 104,
      name: "HP 2100",
    },
    {
      id: 103,
      name: "PDP-7",
    },
    {
      id: 102,
      name: "EDSAC",
    },
    {
      id: 101,
      name: "Ferranti Nimrod Computer",
    },
    {
      id: 100,
      name: "Analogue electronics",
    },
    {
      id: 98,
      name: "DEC GT40",
    },
    {
      id: 97,
      name: "PDP-8",
    },
    {
      id: 96,
      name: "PDP-10",
    },
    {
      id: 95,
      name: "PDP-1",
    },
    {
      id: 94,
      name: "Commodore Plus/4",
    },
    {
      id: 93,
      name: "Commodore 16",
    },
    {
      id: 90,
      name: "Commodore PET",
    },
    {
      id: 85,
      name: "Donner Model 30",
    },
    {
      id: 82,
      name: "Web browser",
    },
    {
      id: 79,
      name: "Neo Geo MVS",
    },
    {
      id: 77,
      name: "Sharp X1",
    },
    {
      id: 75,
      name: "Apple II",
    },
    {
      id: 74,
      name: "Windows Phone",
    },
    {
      id: 73,
      name: "BlackBerry OS",
    },
    {
      id: 71,
      name: "Commodore VIC-20",
    },
    {
      id: 69,
      name: "BBC Microcomputer System",
    },
    {
      id: 65,
      name: "Atari 8-bit",
    },
    {
      id: 63,
      name: "Atari ST/STE",
    },
    {
      id: 55,
      name: "Legacy Mobile Device",
    },
    {
      id: 53,
      name: "MSX2",
    },
    {
      id: 52,
      name: "Arcade",
    },
    {
      id: 47,
      name: "Virtual Console",
    },
    {
      id: 44,
      name: "Tapwave Zodiac",
    },
    {
      id: 39,
      name: "iOS",
    },
    {
      id: 34,
      name: "Android",
    },
    {
      id: 27,
      name: "MSX",
    },
    {
      id: 26,
      name: "ZX Spectrum",
    },
    {
      id: 25,
      name: "Amstrad CPC",
    },
    {
      id: 16,
      name: "Amiga",
    },
    {
      id: 15,
      name: "Commodore C64/128/MAX",
    },
    {
      id: 14,
      name: "Mac",
    },
    {
      id: 13,
      name: "DOS",
    },
    {
      id: 6,
      name: "PC (Microsoft Windows)",
    },
    {
      id: 3,
      name: "Linux",
    },
  ];
}

export interface GameDetail {
  id: number;
  age_ratings: AgeRating[];
  aggregated_rating: number;
  aggregated_rating_count: number;
  alternative_names: Alternativename[];
  bundles: GameDetail[];
  category: number;
  collections: Collections[];
  cover: Cover;
  created_at: number;
  expansions: GameDetail[];
  external_games: number[];
  first_release_date: number;
  franchises: Franchises[];
  game_engines: GameEngine[];
  game_modes: GameMode[];
  genres: GameGenre[];
  involved_companies: InvolvedCompany[];
  keywords: Keyword[];
  language_supports: LanguageSupports[];
  name: string;
  platforms: Platform[];
  player_perspectives: PlayerPerspective[];
  rating: number;
  rating_count: number;
  release_dates: ReleasedDate[];
  screenshots: Screenshot[];
  similar_games: Similargame[];
  slug: string;
  storyline: string;
  summary: string;
  tags: number[];
  themes: GameTheme[];
  updated_at: number;
  url: string;
  videos: Video[];
  websites: Website[];
  checksum: string;
  game_localizations: Localizzazione[];
}

interface Similargame {
  id: number;
  age_ratings?: number[];
  aggregated_rating: number;
  aggregated_rating_count: number;
  alternative_names?: number[];
  category: number;
  collection?: number;
  cover: Cover;
  created_at: number;
  external_games?: number[];
  first_release_date: number;
  game_modes?: number[];
  genres: GameGenre[];
  involved_companies: number[];
  keywords: number[];
  name: string;
  platforms: number[];
  player_perspectives: number[];
  rating: number;
  rating_count: number;
  release_dates: number[];
  screenshots: number[];
  similar_games: number[];
  slug: string;
  summary: string;
  tags: number[];
  themes: number[];
  updated_at: number;
  url: string;
  websites: Website[];
  checksum: string;
  ports?: number[];
  game_localizations?: number[];
  collections?: number[];
  storyline?: string;
  videos?: number[];
  bundles?: number[];
  expanded_games?: number[];
}

interface Screenshot {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
}

interface Alternativename {
  id: number;
  comment: string;
  game: number;
  name: string;
  checksum: string;
}
interface Cover {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
}

interface ReleasedDate {
  id: number;
  category: number;
  created_at: number;
  date: number;
  game: number;
  human: string;
  m: number;
  platform: ReleasePlatform;
  region: number;
  updated_at: number;
  y: number;
  checksum: string;
}
interface Platform {
  id: number;
  abbreviation: string;
  alternative_name: string;
  category: number;
  created_at: number;
  name: string;
  platform_logo: number;
  slug: string;
  updated_at: number;
  url: string;
  versions: number[];
  websites: number[];
  checksum: string;
}
interface Video {
  id: number;
  game: number;
  name: string;
  video_id: string;
  checksum: string;
}
interface InvolvedCompany {
  id: number;
  change_date_category: number;
  country: number;
  created_at: number;
  description: string;
  developed: number[];
  logo: number;
  name: string;
  published: number[];
  slug: string;
  start_date: number;
  start_date_category: number;
  updated_at: number;
  url: string;
  websites: number[];
  checksum: string;
}
interface InvolvedCompany {
  id: number;
  company: Company;
  created_at: number;
  developer: boolean;
  game: number;
  porting: boolean;
  publisher: boolean;
  supporting: boolean;
  updated_at: number;
  checksum: string;
}

interface Company {
  id: number;
  change_date_category: number;
  country: number;
  created_at: number;
  description: string;
  developed: number[];
  logo: number;
  name: string;
  published: number[];
  slug: string;
  start_date: number;
  start_date_category: number;
  updated_at: number;
  url: string;
  websites: number[];
  checksum: string;
}
interface AgeRating {
  id: number;
  category: number;
  rating: number;
  rating_cover_url: string;
  synopsis: string;
  checksum: string;
  content_descriptions: ContentDescriptor[];
}
interface GameGenre {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface GameMode {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface GameTheme {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface PlayerPerspective {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface Franchises {
  id: number;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface Collections {
  id: number;
  created_at: number;
  games: number[];
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
  type: number;
}
interface Keyword {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
interface Localizzazione {
  id: number;
  name: string;
  game: number;
  region: Region;
  created_at: number;
  updated_at: number;
  checksum: string;
}
interface GameEngine {
  id: number;
  companies: Company[];
  created_at: number;
  logo: number;
  name: string;
  slug: string;
  updated_at: number;
  url: string;
  checksum: string;
}
export interface PopularitySource {
  id: number;
  game_id: number;
  popularity_type: Popularitytype;
  popularity_source: number;
  value: number;
  calculated_at: number;
  created_at: number;
  updated_at: number;
}

interface Popularitytype {
  id: number;
  popularity_source: number;
  name: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}
interface ReleasePlatform {
  id: number;
  abbreviation: string;
  alternative_name: string;
  category: number;
  created_at: number;
  generation: number;
  name: string;
  platform_logo: number;
  platform_family: number;
  slug: string;
  updated_at: number;
  url: string;
  versions: number[];
  websites: number[];
  checksum: string;
}
interface Website {
  id: number;
  category: number;
  game: number;
  trusted: boolean;
  url: string;
  checksum: string;
}
export enum PlatformEnum {
  Official = 1,
  Wikia = 2,
  Wikipedia = 3,
  Facebook = 4,
  Twitter = 5,
  Twitch = 6,
  Instagram = 8,
  YouTube = 9,
  iPhone = 10,
  iPad = 11,
  Android = 12,
  Steam = 13,
  Reddit = 14,
  Itch = 15,
  EpicGames = 16,
  GOG = 17,
  Discord = 18,
}
export enum RatingBoards {
  ESRB = 1,
  PEGI = 2,
  CERO = 3,
  USK = 4,
  GRAC = 5,
  CLASS_IND = 6,
  ACB = 7,
}
export enum RatingEnum {
  Three = 1,
  Seven = 2,
  Twelve = 3,
  Sixteen = 4,
  Eighteen = 5,
  RP = 6,
  EC = 7,
  E = 8,
  E10 = 9,
  T = 10,
  M = 11,
  AO = 12,
  CERO_A = 13,
  CERO_B = 14,
  CERO_C = 15,
  CERO_D = 16,
  CERO_Z = 17,
  USK_0 = 18,
  USK_6 = 19,
  USK_12 = 20,
  USK_16 = 21,
  USK_18 = 22,
  GRAC_ALL = 23,
  GRAC_Twelve = 24,
  GRAC_Fifteen = 25,
  GRAC_Eighteen = 26,
  GRAC_TESTING = 27,
  CLASS_IND_L = 28,
  CLASS_IND_Ten = 29,
  CLASS_IND_Twelve = 30,
  CLASS_IND_Fourteen = 31,
  CLASS_IND_Sixteen = 32,
  CLASS_IND_Eighteen = 33,
  ACB_G = 34,
  ACB_PG = 35,
  ACB_M = 36,
  ACB_MA15 = 37,
  ACB_R18 = 38,
  ACB_RC = 39,
}
export enum ContentDescriptors {
  ESRB_alcohol_reference = 1,
  ESRB_animated_blood = 2,
  ESRB_blood = 3,
  ESRB_blood_and_gore = 4,
  ESRB_cartoon_violence = 5,
  ESRB_comic_mischief = 6,
  ESRB_crude_humor = 7,
  ESRB_drug_reference = 8,
  ESRB_fantasy_violence = 9,
  ESRB_intense_violence = 10,
  ESRB_language = 11,
  ESRB_lyrics = 12,
  ESRB_mature_humor = 13,
  ESRB_nudity = 14,
  ESRB_partial_nudity = 15,
  ESRB_real_gambling = 16,
  ESRB_sexual_content = 17,
  ESRB_sexual_themes = 18,
  ESRB_sexual_violence = 19,
  ESRB_simulated_gambling = 20,
  ESRB_strong_language = 21,
  ESRB_strong_lyrics = 22,
  ESRB_strong_sexual_content = 23,
  ESRB_suggestive_themes = 24,
  ESRB_tobacco_reference = 25,
  ESRB_use_of_alcohol = 26,
  ESRB_use_of_drugs = 27,
  ESRB_use_of_tobacco = 28,
  ESRB_violence = 29,
  ESRB_violent_references = 30,
  ESRB_animated_violence = 31,
  ESRB_mild_language = 32,
  ESRB_mild_violence = 33,
  ESRB_use_of_drugs_and_alcohol = 34,
  ESRB_drug_and_alcohol_reference = 35,
  ESRB_mild_suggestive_themes = 36,
  ESRB_mild_cartoon_violence = 37,
  ESRB_mild_blood = 38,
  ESRB_realistic_blood_and_gore = 39,
  ESRB_realistic_violence = 40,
  ESRB_alcohol_and_tobacco_reference = 41,
  ESRB_mature_sexual_themes = 42,
  ESRB_mild_animated_violence = 43,
  ESRB_mild_sexual_themes = 44,
  ESRB_use_of_alcohol_and_tobacco = 45,
  ESRB_animated_blood_and_gore = 46,
  ESRB_mild_fantasy_violence = 47,
  ESRB_mild_lyrics = 48,
  ESRB_realistic_blood = 49,
  PEGI_violence = 50,
  PEGI_sex = 51,
  PEGI_drugs = 52,
  PEGI_fear = 53,
  PEGI_discrimination = 54,
  PEGI_bad_language = 55,
  PEGI_gambling = 56,
  PEGI_online_gameplay = 57,
  PEGI_in_game_purchases = 58,
  CERO_love = 59,
  CERO_sexual_content = 60,
  CERO_violence = 61,
  CERO_horror = 62,
  CERO_drinking_smoking = 63,
  CERO_gambling = 64,
  CERO_crime = 65,
  CERO_controlled_substances = 66,
  CERO_languages_and_others = 67,
  GRAC_sexuality = 68,
  GRAC_violence = 69,
  GRAC_fear_horror_threatening = 70,
  GRAC_language = 71,
  GRAC_alcohol_tobacco_drug = 72,
  GRAC_crime_anti_social = 73,
  GRAC_gambling = 74,
  CLASS_IND_violencia = 75,
  CLASS_IND_violencia_extrema = 76,
  CLASS_IND_conteudo_sexual = 77,
  CLASS_IND_nudez = 78,
  CLASS_IND_sexo = 79,
  CLASS_IND_sexo_explicito = 80,
  CLASS_IND_drogas = 81,
  CLASS_IND_drogas_licitas = 82,
  CLASS_IND_drogas_ilicitas = 83,
  CLASS_IND_linguagem_impropria = 84,
  CLASS_IND_atos_criminosos = 85,
}
export interface ContentDescriptor {
  id: number;
  category: number;
  description: string;
  checksum: string;
}
interface LanguageSupports {
  id: number;
  game: number;
  language: Language;
  language_support_type: Languagesupporttype;
  created_at: number;
  updated_at: number;
  checksum: string;
}

interface Languagesupporttype {
  id: number;
  name: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}

interface Language {
  id: number;
  name: string;
  native_name: string;
  locale: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}
export enum Regions {
  Europe = 1,
  North_America = 2,
  Australia = 3,
  New_Zealand = 4,
  Japan = 5,
  China = 6,
  Asia = 7,
  Worldwide = 8,
  Korea = 9,
  Brazil = 10,
}
interface Region {
  id: number;
  name: string;
  category: string;
  identifier: string;
  created_at: number;
  updated_at: number;
  checksum: string;
}
