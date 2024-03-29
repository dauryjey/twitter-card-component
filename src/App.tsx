import { useState } from "react";
import { TwitterCard } from "./components/TwitterCard/TwitterCard";

const mockupTweet = {
  pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANx1GanzIEVELO2xu7yybhz8UPCp7RPcYH0FI73kuAA&s",
  name: "pinedax",
  username: "@pinedaxdev",
  datetime: "Jan 29, 2022",
  tweet:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat dapibus mauris sit amet facilisis. Integer orci orci, pretium vel dapibus sit amet, commodo ut odio. In rutrum malesuada mollis. Vestibulum a diam et risus finibus tristique sed vitae dolor. Pellentesque ut leo eget sapien mollis tincidunt eget ut dolor.",
};

export default function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
  }

  const { pfp, name, username, datetime, tweet } = mockupTweet;

  return (
    <main className="flex justify-center items-center h-screen p-5 w-full">
      <TwitterCard 
        pfp={pfp} 
        name={name} 
        username={username} 
        datetime={datetime} 
        tweet={tweet} 
        isLiked={isLiked} 
        isRetweeted={isRetweeted} 
        handleLike={handleLike} 
        handleRetweet={handleRetweet}  
      />
    </main>
  );
}