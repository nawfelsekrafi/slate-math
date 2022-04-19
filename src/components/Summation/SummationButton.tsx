import Tippy from '@tippyjs/react'
import { getSummationButtonStyles } from './getSummationButtonStyles'

type SummationButtonProps = {
  name: string
  summationName: any
  image: any
  onClick: () => void
}

export const SummationButton = ({
  image,
  summationName,
  onClick,
}: SummationButtonProps) => {
  const styles = getSummationButtonStyles()
  const content = (
    <div className="summationButtons">
      <button
        className="summationButton"
        onClick={onClick}
        css={styles.root.css}
      >
        <img src={image} />
      </button>
    </div>
  )
  return summationName ? (
    <Tippy content={summationName}>{content}</Tippy>
  ) : (
    content
  )
}
