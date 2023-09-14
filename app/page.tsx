"use client";

import Footer from '@/components/footer';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TVImage from "../public/tv.png";
import IMDBImage from "../public/imdb.png";
import RatingImage from "../public/rating.png";
import MenuIcon from "../public/menu-icon.svg";
import SearchInput from '@/components/search';
import PlayIcon from "../public/play.svg";
import Featured from '@/components/featured';

const Home = () => {
  let handleSearch = (searchQuery: string) => {
    console.log(searchQuery);
  };

  return (
    <React.Fragment>
      <div
        style={{
          background: "url('/Poster.png') center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <header className='flex items-center justify-between gap-6 py-2 px-8'>
          <Link href="/" className="text-white font-bold text-xl md:text-2xl flex gap-2 items-center">
              <Image src={TVImage} alt="tv image" className='h-8 w-8' />
            <span className='hidden md:block'>
            MovieBox
            </span>
          </Link>
          <div className='flex-grow max-w-lg'>
            <SearchInput onSearch={handleSearch} />
          </div>
          <Link href="/" className="text-white font-bold text-lg hidden md:flex gap-2 items-center">
            Sign In
            <span className='rounded-full p-1 bg-primary'>
              <Image src={MenuIcon} alt="menu icon" className='h-4 w-4' />
            </span>
          </Link>
        </header>
        <main className='text-white w-full md:w-1/2 lg:w-2/5 py-4 sm:py-8 px-2 sm:px-4 md:px-8'>
          <h1 className='my-6 text-2xl sm:text-3xl md:text-5xl font-bold leading-normal'>John Wick 3 : Parabellum</h1>
          <div className='flex gap-12 items-center my-6'>
            <div className='flex gap-2 items-center'>
              <Image src={IMDBImage} alt="imdb icon" className='h-4 w-6' />
              <span>86.0 / 100</span>
            </div>
            <div className='flex gap-2 items-center'>
              <Image src={RatingImage} alt="rating icon" className='h-4 w-4' />
              <span>97%</span>
            </div>
          </div>
          <p className='my-6 font-medium w-full'>John Wick is on the run after killing a member of the international assassins{`'`} guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className='bg-primary rounded-lg border-none text-white flex items-center gap-2 py-2 px-4 uppercase font-bold'>
            <span><Image src={PlayIcon} alt='play icon' /></span>
            Watch Triller
          </button>
        </main>
      </div>
      <Featured handleGetMovies={handleSearch} />
      <Footer />
    </React.Fragment>
  )
}

export default Home;