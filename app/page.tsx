"use client";

import Footer from '@/components/footer';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TVImage from "../public/tv.png";
import MenuIcon from "../public/menu-icon.svg";
import SearchInput from '@/components/search';
import PosterImage from "../public/Poster.png";
// import { useState } from 'react';

const Home = () => {
  // const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearch = (searchQuery: string) => {
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
        <header className='flex items-center justify-between gap-6'>
          <Link href="/" className="text-white font-bold text-xl md:text-2xl flex gap-2 items-center">
            <span>
              <Image src={TVImage} alt="tv image" />
            </span>{" "}
            MovieBox
          </Link>
          <SearchInput onSearch={handleSearch} />
          <Link href="/" className="text-white font-bold text-xl md:text-2xl flex gap-2 items-center">
            Sign In
            <span>
              <Image src={MenuIcon} alt="menu icon" />
            </span>
          </Link>
        </header>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home;