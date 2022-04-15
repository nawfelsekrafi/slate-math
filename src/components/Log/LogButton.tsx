interface LogButtonProps {
  name: string
  image: any
  onClick: () => void
}

export const LogButton = ({ image, onClick }: LogButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src={image} />
      </button>
    </div>
  )
}
