import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
      <div className="w-full h-full bg-black/40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
        <div className="md:w-[50%] w-full ">
          <div className="flex flex-col space-y-6 items-start p-10">
            <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6 font-bold">
              Top Anime
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[40px] font-bold text-white ">
                Học Viện Siêu Anh Hùng
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-white">
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
              <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:w-[50%] w-full md:flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
