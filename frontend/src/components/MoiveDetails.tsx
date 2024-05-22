import { MoivePops } from "@/types/utils";
import MovieSearch from "./MovieSearch";
import { useState } from "react";
import MovieDetailsCard from "./MoiveDetailsCard";

const MoiveDetails = () => {
  const [moive, setMoive] = useState<MoivePops[]>([]);
  const handleMoiveSubmit = (moive: MoivePops) => {
    setMoive(() => [moive]);
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Search
            </span>
            <div className="w-[500px]" id="navbar-default">
              <MovieSearch onSubmit={handleMoiveSubmit} />
            </div>
          </div>
        </nav>
      </header>
      <section className="flex md:grid-cols-2 mt-5 items-center justify-center lg:grid-cols-3 gap-6">
        {moive.map((movie, index) => (
          <MovieDetailsCard
            key={index}
            Title={movie.Title}
            Year={movie.Year}
            Plot={movie.Plot}
            Poster={movie.Poster}
            Language={movie.Language}
            Released={movie.Released}
          />
        ))}
      </section>
    </>
  );
};

export default MoiveDetails;
