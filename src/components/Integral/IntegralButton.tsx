import Tippy from '@tippyjs/react'
import { getIntegralButtonStyles } from './getIntegralButtonStyles'

type IntegralButtonProps = {
  name?: string
  integralName?: any
  image?: any
  onClick: () => void
}

export const IntegralButton = ({
  image,
  integralName,
  onClick,
}: IntegralButtonProps) => {
  const styles = getIntegralButtonStyles()
  const content = (
    <div className="integralButtons">
      <button
        className="integralButton"
        onClick={onClick}
        css={styles.root.css}
      >
        <img src={image} />
      </button>
    </div>
  )
  return integralName ? (
    <Tippy content={integralName}>{content}</Tippy>
  ) : (
    content
  )
}
