import Tippy from '@tippyjs/react'
import { getLimitButtonStyles } from './getLimitButtonStyles'

type LimitButtonProps = {
  name: string
  limitName: any
  image: any
  onClick: () => void
}

export const LimitButton = ({
  image,
  limitName,
  onClick,
}: LimitButtonProps) => {
  const styles = getLimitButtonStyles()
  const content = (
    <div className="limitButtons">
      <button className="accentButton" onClick={onClick} css={styles.root.css}>
        <img src={image} />
      </button>
    </div>
  )
  return limitName ? <Tippy content={limitName}>{content}</Tippy> : content
}
