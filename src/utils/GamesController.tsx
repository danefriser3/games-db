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
    var cors_api_url = "https://cors-anywhere.herokuapp.com/";

    const client_id = "jjy9wkuypf4iup7yjr2iydthya4xuy";

    return await fetch(
      `${cors_api_url}https://api.igdb.com/v4/popularity_primitives`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
          "Client-ID": client_id,
        },
        body: `fields calculated_at,checksum,created_at,game_id,popularity_source,popularity_type.*,updated_at,value; where game_id = ${q};`,
      }
    ).then((t) => t.json());
  };

  static getGameByName = async (
    access_token: string,
    q: string
  ): Promise<GameDetail[]> => {
    var cors_api_url = "https://cors-anywhere.herokuapp.com/";

    const client_id = "jjy9wkuypf4iup7yjr2iydthya4xuy";

    return await fetch(`${cors_api_url}https://api.igdb.com/v4/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
        "Client-ID": client_id,
      },
      body: `fields age_ratings.*,
            aggregated_rating,
            aggregated_rating_count,
            alternative_names.*,
            artworks.*,
            bundles.*,
            category,
            checksum,
            collection,
            collections.*,
            cover.*,
            created_at,
            dlcs.*,
            expanded_games.*,
            expansions.*,
            external_games.*,
            first_release_date,
            follows,
            forks.*,
            franchise,
            franchises.*,
            game_engines.*,
            game_localizations.*,
            game_modes.*,
            genres.*,
            hypes,
            involved_companies.*,
            keywords.*,
            language_supports.*,
            multiplayer_modes.*,
            name,
            parent_game.*,
            platforms.*,
            player_perspectives.*,
            ports.*,
            rating,
            rating_count,
            release_dates.*,
            remakes.*,
            remasters.*,
            screenshots.*,
            similar_games.*,
            slug,
            standalone_expansions.*,
            status,
            storyline,
            summary,
            tags,
            themes.*,
            total_rating,
            total_rating_count,
            updated_at,
            url,
            version_parent,
            version_title,
            videos.*,
            websites.*;
            limit 500;
            sort first_release_date asc;
            where name ~ *"${q}"* & first_release_date < ${Math.floor(
        new Date().getTime() / 1000
      )};`,
    }).then((result) => result.json());
  };
  static getGameById = async (
    access_token: string,
    q: number
  ): Promise<GameDetail> => {
    const cors_api_url = "https://cors-anywhere.herokuapp.com/";
    const client_id = "jjy9wkuypf4iup7yjr2iydthya4xuy";

    return await fetch(`${cors_api_url}https://api.igdb.com/v4/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
        "Client-ID": client_id,
      },
      body: `fields age_ratings.*,
            aggregated_rating,
            aggregated_rating_count,
            alternative_names.*,
            artworks.*,
            bundles.*,
            category,
            checksum,
            collection,
            collections.*,
            cover.*,
            created_at,
            dlcs.*,
            expanded_games.*,
            expansions.*,
            external_games.*,
            first_release_date,
            follows,
            forks.*,
            franchise,
            franchises.*,
            game_engines.*,
            game_localizations.*,
            game_modes.*,
            genres.*,
            hypes,
            involved_companies.*,
            involved_companies.company.*,
            keywords.*,
            language_supports.*,
            multiplayer_modes.*,
            name,
            parent_game.*,
            platforms.*,
            player_perspectives.*,
            ports.*,
            rating,
            rating_count,
            release_dates.*,
            remakes.*,
            remasters.*,
            screenshots.*,
            similar_games.*,
            slug,
            standalone_expansions.*,
            status,
            storyline,
            summary,
            tags,
            themes.*,
            total_rating,
            total_rating_count,
            updated_at,
            url,
            version_parent,
            version_title,
            videos.*,
            websites.*;
            limit 1;
            sort first_release_date asc;
            where id = ${q};`,
    })
      .then((result) => result.json())
      .then((t) => t[0]);
  };
}

export interface GameDetail {
  id: number;
  age_ratings: AgeRating[];
  alternative_names: Alternativename[];
  category: number;
  cover: Cover;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  game_modes: number[];
  genres: number[];
  involved_companies: InvolvedCompany[];
  keywords: number[];
  name: string;
  platforms: Platform[];
  player_perspectives: number[];
  rating: number;
  rating_count: number;
  release_dates: ReleasedDate[];
  screenshots: Screenshot[];
  similar_games: Similargame[];
  slug: string;
  storyline: string;
  summary: string;
  tags: number[];
  themes: number[];
  updated_at: number;
  url: string;
  videos: Video[];
  websites: number[];
  checksum: string;
  game_localizations: number[];
}

interface Similargame {
  id: number;
  age_ratings?: number[];
  alternative_names?: number[];
  category: number;
  collection?: number;
  cover: Cover;
  created_at: number;
  external_games?: number[];
  first_release_date: number;
  game_modes?: number[];
  genres: number[];
  involved_companies: number[];
  keywords: number[];
  name: string;
  platforms: number[];
  player_perspectives: number[];
  release_dates: number[];
  screenshots: number[];
  similar_games: number[];
  slug: string;
  summary: string;
  tags: number[];
  themes: number[];
  updated_at: number;
  url: string;
  websites: number[];
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
  platform: number;
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
  checksum: string;
}
