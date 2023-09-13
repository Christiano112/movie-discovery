"use client";

import { usePathId } from '@/utils/hooks';
import React from 'react';
import { useGetSingleMovie } from '@/utils/useFetch';
import Loading from '@/app/loading';
import Image from "next/image";
import PlayIcon from "@/public/play-icon.png";
import MoreMoviesImage from "@/public/more-movies.png";
import TicketImage from "@/public/tickets.png";
import WatchOptionIcon from "@/public/watch_options-icon.png";
import StarRatingIcon from "@/public/star-rating.png";
import { convertToUTC } from '@/utils/format';

const Movie = () => {
    const movieId = usePathId();
    const { data: movie, error, isLoading, isSuccess } = useGetSingleMovie(movieId);
    console.log(movie);

    if (isLoading) {
        return <Loading />;
    };

    return (
        <article className='px-2 sm:px-4 md:px-8 py-4'>
            {isSuccess && movie && (
                <div key={movie.id} className="flex flex-col gap-2" data-testid="movie-card">
                    <div className='relative'>
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path
                                }`}
                            alt={`${movie.title} Poster`}
                            width={150}
                            height={200}
                            data-testid="movie-poster"
                            className='top-0 left-0 right-0 w-full h-full'
                        />
                        <div className='bg-[#F3F4F680] p-2 rounded-full absolute top-1/2 right-1/2 left-1/2 cursor-pointer hover:scale-105 transition-all h-12 w-12'>
                            <span><Image src={PlayIcon} alt='play icon' /></span>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 text-[#111827] font-medium my-4'>
                        <h3 data-testid="movie-title" className='font-bold text-xl'>{movie.title}</h3>
                        <ul className='list-disc flex items-center gap-6'>
                            <li data-testid="movie-release-date" className=''>{convertToUTC(movie.release_date)}</li>
                            <li>PG - 13</li>
                            <li><span data-testid="movie-runtime">{movie.runtime}</span>m</li>
                            <li className='flex items-center gap-2'>
                                {movie?.genres?.map((genre, index) => (
                                    <p className='text-primary-50 py-1 px-2 border border-[#F8E7EB] rounded-3xl' key={index}>{genre.name}</p>
                                ))}
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 flex-nowrap">
                            <Image src={StarRatingIcon} alt="star rating" />
                            <p className='text-[#9CA3AF]'>{movie.vote_average.toFixed(1)}</p>
                            <span className="text-black">|</span>
                            <p className='text-bold'>{`${movie.vote_count.toString().slice(0, 3)}k`}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-12'>
                        <div>
                            <p data-testid="movie-overview">{movie.overview}</p>
                            <div className="flex flex-col gap-6 my-8">
                                <h5>Director: <span className='text-primary'>Joseph Kosinski</span></h5>
                                <h5>Writers: <span className='text-primary'>Jim Cash, Jack Epps Jr, Peter Craig</span></h5>
                                <h5>Stars: <span className='text-primary'>Tom Cruise, Jennifer Connelly, Miles Teller</span></h5>
                            </div>
                            <div className='flex gap-0 items-center'>
                                <button className='bg-primary rounded-lg border-none text-white flex items-center gap-2 py-2 px-4 font-bold'>
                                    Top rated movie #65
                                </button>
                                <p className='rounded-lg border py-2 px-4 font-bold flex-grow'>Awards: <span className='text-primary'>9 Nominations</span></p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 items-stretch min-w-[20%]'>
                            <button className='bg-primary rounded-lg border-none text-white flex items-center gap-2 py-2 px-4 font-bold'>
                                <span><Image src={TicketImage} alt='see more icon' /></span>
                                See Show times
                            </button>
                            <button className='bg-[#BE123C33] rounded-lg border-none text-black flex items-center gap-2 py-2 px-4 font-bold'>
                            <span><Image src={WatchOptionIcon} alt='watch options icon' /></span>
                                More Watch Options
                            </button>
                            <Image src={MoreMoviesImage} alt='more movies' />
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default Movie;