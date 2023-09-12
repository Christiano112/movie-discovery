import React from 'react';
import Image from "next/image";
import Link from "next/link";
import FaceBookIcon from "../public/facebook-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import TwitterIcon from "../public/twitter-icon.svg";
import YoutubeIcon from "../public/youtube-icon.svg";


const Footer = () => {
  return (
    <footer className='py-8 px-4 md:px-8 flex flex-col justify-between items-center gap-6 md:gap-12 bottom-0 left-0 right-0'>
      <div className='flex justify-between items-center gap-6 md:gap-12'>
        <Link href="/"><Image src={FaceBookIcon} alt="facebook icon" /></Link>
        <Link href="/"><Image src={InstagramIcon} alt="instagram icon" /></Link>
        <Link href="/"><Image src={TwitterIcon} alt="twitter icon" /></Link>
        <Link href="/"><Image src={YoutubeIcon} alt="youtube icon" /></Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
        <Link href="/" className="text-gray-900 text-lg font-bold">Conditions of Use</Link>
        <Link href="/" className="text-gray-900 text-lg font-bold">Privacy & Policy</Link>
        <Link href="/" className="text-gray-900 text-lg font-bold">Press Room</Link>
      </div>
      <p className="text-gray-500 text-lg font-bold text-center">© 2021 MovieBox by Adriana Eka Prayudha</p>
    </footer>
  )
}

export default Footer;