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
        <div className="hidden md:block max-w-[13rem] p-4 shadow-2xl relative h-full z-50 transition-all duration-150 ease-out md:ease-in rounded-e-[3rem]">
            <h2 className="text-primary font-bold text-xl md:text-3xl mb-12 mt-4 flex gap-2 items-center">
                <span>
                    <Image src={TVImage} alt="tv image" />
                </span>{" "}
                MovieBox
            </h2>
            <div className="flex flex-col gap-12 mb-8 pl-2">
                <Link
                    href="/"
                    className="flex gap-2 items-center"
                >
                    <span>
                        <Image src={HomeIcon} alt="home icon" />
                    </span>{" "}
                    Home
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center bg-[#BE123C33] text-primary-50 p-4 rounded-3xl -ml-4"
                >
                    <span>
                        <Image src={MoviesIcon} alt="movie icon" />
                    </span>{" "}
                    Movies
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center"
                >
                    <span>
                        <Image src={TVIcon} alt="tv icon" />
                    </span>{" "}
                    TV Series
                </Link>
                <Link
                    href="/"
                    className="flex gap-2 items-center"
                >
                    <span>
                        <Image src={CalendarIcon} alt="calendar icon" />
                    </span>{" "}
                    Upcoming
                </Link>
            </div>
            <div className="flex flex-col gap-4 my-12 bg-[#F8E7EB66] rounded-2xl p-4">
                <h3 className="flex gap-2 items-center text-lg font-medium">
                    Play movie quizes
                    and earn
                    free tickets
                </h3>
                <p className="text-md text-[#666666]">50k people are playing
                    now</p>
                <Link href="/" className="bg-[#BE123C33] text-primary-50 rounded-3xl p-2 flex items-center justify-center">
                    Start playing
                </Link>
            </div>
            <div className="flex flex-col gap-4 mb-8">
                <div className="justify-end bottom-0 absolute right-0 left-0 p-4">
                    <Link
                        href="/"
                        className="flex gap-2 items-center"
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