import { ProfilePicture } from "./ProfilePicture";
import { Tweet } from "./Tweet";
import { InfoText } from "./InfoText";
import { FaRegHeart } from "react-icons/fa";
import { InteractionButton } from "./InteractionButton";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

interface TwitterCardProps {
  pfp: string;
  name: string;
  username: string;
  datetime: string;
  tweet: string;
  isLiked: boolean;
  isRetweeted: boolean;
  handleLike: () => void;
  handleRetweet: () => void;
}

export const TwitterCard = ({
  pfp,
  name,
  username,
  datetime,
  tweet,
  isLiked,
  isRetweeted,
  handleLike,
  handleRetweet,
}: TwitterCardProps) => {
  return (
    <article className="bg-black text-white rounded-md py-6 px-5 flex max-w-[600px]">
      <ProfilePicture pfp={pfp} name={name} />
      <section className="flex flex-col justify-between w-full pl-4">
        <header className="flex flex-col md:flex-row gap-1">
          <InfoText text={name} />
          <InfoText text={username} />
          <InfoText text={`• ${datetime}`} />
        </header>
        <main className="mt-2">
          <Tweet tweet={tweet} />
        </main>
        <footer className="flex justify-between mt-4 w-2/4 text-xl">
          <InteractionButton>
            <MdOutlineModeComment />
          </InteractionButton>
          <InteractionButton onClick={handleLike}>
            <FaRegHeart
              className={`${isLiked ? "text-red-700" : "text-gray-500"}`}
            />
          </InteractionButton>
          <InteractionButton onClick={handleRetweet}>
            <AiOutlineRetweet
              className={`${isRetweeted ? "text-blue-600" : "text-gray-500"}`}
            />
          </InteractionButton>
        </footer>
      </section>
    </article>
  );
};
