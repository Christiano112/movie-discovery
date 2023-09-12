import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../public/calendar-icon.png";
import TVIcon from "../public/tv-icon.png";
import MoviesIcon from "../public/movie-icon.png";
import HomeIcon from "../public/home-icon.png";
import TVImage from "../public/tv.png";
import LogOutIcon from "../public/logout-icon.png";

const SideNav = () => {
    return (
        <div className="hidden md:block max-w-[13rem] p-4 shadow-2xl relative h-full z-50 transition-all duration-150 ease-out md:ease-in">
            <h2 className="text-primary font-bold text-4xl md:text-5xl mb-8 flex gap-2 items-center">
                <span>
                    <Image src={TVImage} alt="tv image" />
                </span>{" "}
                MovieBox
            </h2>
            <div className="flex flex-col gap-4 mb-8">
                <Link
                    href="/"
                    className="flex gap-2 items-center-50"
                >
                    <span>
                        <Image src={HomeIcon} alt="home icon" />
                    </span>{" "}
                    Home
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center-50"
                >
                    <span>
                        <Image src={MoviesIcon} alt="movie icon" />
                    </span>{" "}
                    Movies
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center-50"
                >
                    <span>
                        <Image src={TVIcon} alt="tv icon" />
                    </span>{" "}
                    TV Series
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center-50"
                >
                    <span>
                        <Image src={CalendarIcon} alt="calendar icon" />
                    </span>{" "}
                    Upcoming
                </Link>
            </div>
            <div className="flex flex-col gap-4 mb-8">
                <h3 className="flex gap-2 items-center text-xl font-medium">
                    Play movie quizes
                    and earn
                    free tickets
                </h3>
                <p>50k people are playing
                    now</p>
                <Link href="/" className="text-tertiary-50">
                    Start playing
                </Link>
            </div>
            <div className="flex flex-col gap-4 mb-8">
                <div className="justify-end bottom-0 absolute right-0 left-0 p-4 mb-[-1rem]">
                    <Link
                        href="/"
                        className="flex gap-2 items-center-50"
                    >
                        <span>
                            <Image src={LogOutIcon} alt="logout icon" />
                        </span>{" "}
                        Log Out
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideNav;