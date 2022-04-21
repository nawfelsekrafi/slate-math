import Tippy from '@tippyjs/react'
import { getLogButtonStyles } from './getLogButtonStyles'

type LogButtonProps = {
  name: string
  logName: any
  image: any
  onClick: () => void
}

export const LogButton = ({ image, logName, onClick }: LogButtonProps) => {
  const styles = getLogButtonStyles()
  const content = (
    <div className="logButtons">
      <button className="logButton" onClick={onClick} css={styles.root.css}>
        <img src={image} />
      </button>
    </div>
  )
  return logName ? <Tippy content={logName}>{content}</Tippy> : content
}
