import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "./axios";
import { GenreType, MovieType } from "./types";
import { removeEmpty } from "./format";

interface UseGetMoviesResponseType {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
}

interface ParamType {
    page?: number;
    include_adult?: boolean;
    language?: string;
    query?: string;
}

export const useGetMovies = (params?: ParamType) => {
    removeEmpty(params as never);
    const { data, error, isLoading, isSuccess } = useQuery(["movies", params], async () => {
        const res = await axios.get("/movie/top_rated", { params });
        return res.data as unknown as UseGetMoviesResponseType;
    },
        { keepPreviousData: true },
    );

    return { data, error, isLoading, isSuccess };
};

export const useGetMovieGenre = () => {
    const { data, error, isLoading, isSuccess } = useQuery(["genres"], async () => {
        const res = await axios.get("/genre/movie/list");
        return res.data as unknown as GenreType;
    },
        { keepPreviousData: true },
    );

    return { data, error, isLoading, isSuccess };
};

export const useSearchMovies = () => {
    const QueryClient = useQueryClient();
    return useMutation({
        mutationFn: async (params: ParamType) => {
            const res = await axios.get("/search/movie", { params });
            return res.data as unknown as UseGetMoviesResponseType;
        },
        onSuccess: async () => {
            await QueryClient.invalidateQueries({ queryKey: ["movies"] });
        },
    });
}

export const useGetSingleMovie = (id: string) => {
    const { data, error, isLoading, isSuccess } = useQuery(["single_movie", id], async () => {
        const res = await axios.get(`/movie/${id}`);
        return res.data as unknown as MovieType;
    },
        { enabled: !!id },
    );

    return { data, error, isLoading, isSuccess };
};