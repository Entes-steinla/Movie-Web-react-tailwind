import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="relative bg-banner bg-cover bg-no-repeat bg-center mt-[75px] w-full h-[1000px] md:h-[600px]">
      <div className="bg-black/40 w-full h-full" />
      <div className="top-10 md:top-1/2 left-1/2 absolute flex md:flex-row flex-col justify-between items-center w-full -translate-x-1/2 md:-translate-y-1/2">
        <div className="w-full md:w-[50%]">
          <div className="flex flex-col items-start space-y-6 p-10">
            <p className="bg-gradient-to-r from-red-600 to-red-300 px-6 py-2 font-bold">
              Top Anime
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="font-bold text-[2em] text-nowrap text-white">
                Học Viện Siêu Anh Hùng
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="md:block hidden text-white">
                The seventh season of the My Hero Academia anime television
                series was produced by Bones and directed by Kenji Nagasaki
                (chief director) and Naomi Nakayama,[1] following the story of
                Kōhei Horikoshi's original manga series of the same name from
                the beginning of the 34th volume through the end of the 39th
                volume (chapters 329–398). Unlike the previous five seasons
                which consisted of 25 episodes each, the season ran for 21
                episodes.[2] The seventh season aired on ytv and NTV from May 4
                to October 12, 2024, with 4 "Memories" recap specials having
                aired in the preceding month of April.
              </p>
            </div>

            <div className="flex items-center space-x-5">
              <button className="bg-black px-3 py-2 border border-black font-bold text-white">
                Chi tiết
              </button>
              <button className="bg-red-600 px-3 py-2 font-bold text-white">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[50%]">
          <div className="group relative w-[300px] h-[400px]">
            <button className="top-0 left-0 absolute flex justify-center items-center opacity-0 group-hover:opacity-100 backdrop-blur-sm w-full h-full transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
