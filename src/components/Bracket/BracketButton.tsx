import Tippy from '@tippyjs/react'
import { getBracketButtonStyles } from './getBracketButtonStyles'

type BracketButtonProps = {
  name: string
  bracketName:any
  image: any
  onClick: () => void
}

export const BracketButton = ({ image, bracketName, onClick }: BracketButtonProps) => {
  const styles = getBracketButtonStyles()
  const content = (
    <div className="bracketButtons">
      <button className="bracketButton" onClick={onClick} css={styles.root.css}>
        <img src={image} />
      </button>
    </div>
  )
  return bracketName ? <Tippy content={bracketName}>{content}</Tippy> : content
}
