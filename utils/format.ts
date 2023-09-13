import { GenreType } from "./types";

export const removeEmpty = (obj: never) => {
    if (obj == null) return {};
    Object.keys(obj).forEach((key) => obj[key] == null || (!obj[key] && delete obj[key]));
    return obj;
};

export const convertToUTC = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);

    const utcDate = new Date(Date.UTC(year, month - 1, day));

    return utcDate.toUTCString().slice(0, 16);
}

export const mapGenreName = (genreId: number, genresData: GenreType) => {
    const genre = genresData.genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown Genre';
}
