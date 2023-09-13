export interface MovieType {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
    genres?: {
        id: number;
        name: string;
    }[];
    runtime: number;
    adult: boolean;
    video: boolean;
    popularity: number;
    original_language: string;
    original_title: string;
    vote_count: number;
}

export interface GenreType {
    genres: {
        id: number;
        name: string;
    }[];
}