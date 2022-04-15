interface LimitButtonProps {
  name: string
  image: any
  onClick: () => void
}

export const LimitButton = ({ image, onClick }: LimitButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src={image} />
      </button>
    </div>
  )
}
