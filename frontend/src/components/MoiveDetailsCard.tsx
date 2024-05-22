import { MoivePops } from "@/types/utils";

const MovieDetailsCard: React.FC<MoivePops> = ({
  Title,
  Year,
  Poster,
  Plot,
  Released,
  Language,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center mx-auto max-w-screen-lg">
      <div className="mb-8">
        <img
          src={Poster}
          alt={`${Title} Poster`}
          className="w-full h-auto rounded-lg max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
      <div className="text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">{Title}</h2>
        </div>
        <div className="mb-4">
          <p className="text-gray-400">
            <span className="font-semibold">Year: </span>
            {Year}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-400">
            <span className="font-semibold">Language: </span>
            {Language}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-300">{Plot}</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <span className="bg-yellow-500 text-white py-1 px-2 rounded-full mr-2">
            {Released}
          </span>
          <span className="text-gray-400">Released</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;