interface InteractionButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
 
export const InteractionButton = ({ children, onClick }: InteractionButtonProps) => { 
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}