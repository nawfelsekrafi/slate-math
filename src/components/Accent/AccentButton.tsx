import Tippy from '@tippyjs/react'
import { getAccentButtonStyles } from './getAccentButtonStyles'

type AccentButtonProps = {
  name: string
  accentName:any
  image: any
  onClick: () => void
}

export const AccentButton = ({ image, accentName, onClick }: AccentButtonProps) => {
  const styles = getAccentButtonStyles()
  const content = (
    <div className="accentButtons">
      <button className="accentButton" onClick={onClick} css={styles.root.css}>
        <img src={image} />
      </button>
    </div>
  )
  return accentName ? <Tippy content={accentName}>{content}</Tippy> : content
}
