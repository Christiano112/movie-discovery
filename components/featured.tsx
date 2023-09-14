import React from 'react';
import Image from "next/image";
import Link from "next/link";
import HeartSVG from "../public/heart.svg";
import IMDBImage from "../public/imdb.png";
import RatingImage from "../public/rating.png";
import { useGetMovies, useGetMovieGenre, useSearchMovies } from '@/utils/useFetch';
import { convertToUTC, mapGenreName } from '@/utils/format';
import Loading from '@/app/loading';
import { MovieType } from '@/utils/types';

const Featured = ({ handleGetMovies }: { handleGetMovies: (searchQuery: string) => void }) => {
    const { data, isLoading, isSuccess } = useGetMovies();
    const { data: genreData, isSuccess: genreSuccess } = useGetMovieGenre();
    const { mutateAsync: getMovies } = useSearchMovies();
    const [movies, setMovies] = React.useState<MovieType[]>(data?.results!);

    handleGetMovies = async (searchQuery: string) => {
        console.log(searchQuery);
        const newMovies = await getMovies({ query: searchQuery });
        try {
            if (newMovies.results.length > 0) {
                setMovies(newMovies.results);
            }
        } catch (error) {
            console.error("Error searching for movies", error);
        }
    };

    if (isLoading) return <Loading />;

    return (
        <section className='my-12 mx-auto w-[90%]'>
            <div className='flex items-center gap-12 justify-between mb-6'>
                <h2 className='text-bold text-black text-3xl'>Featured</h2>
                <Link href="/" className='text-bold text-primary flex items-center gap-2'>See More <span className='text-2xl'>{">"}</span></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-8">
                {isSuccess && data?.results?.slice(0, 10).map((movie) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id} className="flex flex-col gap-2" data-testid="movie-card">
                        <div className='relative'>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                                width={150}
                                height={200}
                                data-testid="movie-poster"
                                className='top-0 left-0 right-0 w-full h-full'
                            />
                            <div className='bg-[#F3F4F680] p-2 rounded-full absolute top-2 right-2 cursor-pointer hover:bg-red-600 hover:scale-105 transition-all'>
                                <Image src={HeartSVG} alt="heart icon" />
                            </div>
                        </div>
                        <p data-testid="movie-release-date" className='text-[#9CA3AF]'>{convertToUTC(movie.release_date)}</p>
                        <h3 data-testid="movie-title" className='text-[#111827] font-bold text-xl'>{movie.title}</h3>
                        <div className='flex gap-6 items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <Image src={IMDBImage} alt="imdb icon" className='h-4 w-6' />
                                <span className='whitespace-nowrap'>{`${movie.vote_average * 10}.0`} / 100</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image src={RatingImage} alt="rating icon" className='h-4 w-4' />
                                <span>{`${movie.popularity.toFixed(0)}%`}</span>
                            </div>
                        </div>
                        <p className='text-[#9CA3AF]'>{genreSuccess && movie?.genre_ids.map((genre) => mapGenreName(genre, genreData!)).join(", ")}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Featured;
