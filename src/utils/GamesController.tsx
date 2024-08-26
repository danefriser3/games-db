export interface AuthToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

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

  static getPopularityAPI = async (access_token: string, q: number) => {
    return await fetch(
      `https://games-db-pa7pciv93-danefriser3s-projects.vercel.app/api/pp`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token, q }),
      }
    )
      .then((result) => result.json())
      .catch(() => {});
  };

  static getGameByName = async (
    access_token: string,
    q: string
  ): Promise<GameDetail[]> => {
    return await fetch(
      `https://games-db-pa7pciv93-danefriser3s-projects.vercel.app/api/bo`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token, q }),
      }
    )
      .then((result) => result.json())
      .catch(() => {});
  };
  static getGameById = async (
    access_token: string,
    q: number
  ): Promise<GameDetail> => {
    return await fetch(
      `https://games-db-pa7pciv93-danefriser3s-projects.vercel.app/api/abc`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token, q }),
      }
    )
      .then((result) => result.json())
      .then((t) => t[0])
      .catch(() => {});
  };
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
