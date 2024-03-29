interface TweetProps {
  tweet: string;
}

export const Tweet = ({ tweet }: TweetProps) => {
  return (
    <p className="text-lg">{tweet}</p>
  );
}