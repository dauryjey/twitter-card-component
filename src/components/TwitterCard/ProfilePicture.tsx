interface ProfilePictureProps {
  pfp: string;
  name: string;
}

export const ProfilePicture = ({ pfp, name }: ProfilePictureProps) => {
  return (
    <figure className="w-1/12">
      <img
        className="rounded-full w-14"
        src={pfp}
        alt={`${name} Profile Picture`}
      />
    </figure>
  );
}