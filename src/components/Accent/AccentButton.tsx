interface AccentButtonProps {
  name: string
  image: any
  onClick: () => void
}

export const AccentButton = ({ image, onClick }: AccentButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src={image} />
      </button>
    </div>
  )
}
