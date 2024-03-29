interface InfoTextProps {
  text: string;
}

export const InfoText = ({ text }: InfoTextProps) => (
  <p className="font-semibold text-gray-400">{text}</p>
);
