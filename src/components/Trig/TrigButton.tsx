import Tippy from "@tippyjs/react"

interface TrigButtonProps {
    name: string
    trigName:any
    image: any
    onClick: () => void
  }
  
  export const TrigButton = ({ image, trigName,  onClick }: TrigButtonProps) => {
    const content =  (
    <div className="trigButtons">
      <button className="trigButton" onClick={onClick}>
        <img src={image} />
      </button>
    </div>
    )
    return trigName ? <Tippy content={trigName}>{content}</Tippy> : content
  }
  