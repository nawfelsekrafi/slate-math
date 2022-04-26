import Tippy from '@tippyjs/react'
import { getFractionButtonStyles } from './getFractionButtonStyles'

type FractionButtonProps = {
  name: string
  fractionName:any
  image: any
  onClick: () => void
}

export const FractionButton = ({ image, fractionName, onClick }: FractionButtonProps) => {
  const styles = getFractionButtonStyles()
  const content = (
    <div className="fractionButtons">
      <button className="fractionButton" onClick={onClick} css={styles.root.css}>
        <img src={image} />
      </button>
    </div>
  )
  return fractionName ? <Tippy content={fractionName}>{content}</Tippy> : content
}
