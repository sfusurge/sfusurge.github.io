import { CSSProperties } from 'react'
import { IImage } from '../Image'
import Image from '../Image'
import styles from './ImageLink.module.scss'
import classNames from '../../utils/classNames'
import { Link } from 'react-router-dom'

interface IImageLink extends IImage {
  link?: string
  style?: CSSProperties
  onRight?: boolean
}

const ImageLink = ({ link, onRight, children, ...props }: IImageLink) => {
  const core = (
    <>
      <Image {...props} />
      {children && <div className={styles.text}>{children}</div>}
    </>
  )
  if (link) {
    if (link[0] === '/') {
      return (
        <Link
          className={classNames(styles.container, onRight && styles.right)}
          to={link}
        >
          {core}
        </Link>
      )
    } else {
      return (
        <a
          className={classNames(styles.container, onRight && styles.right)}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {core}
        </a>
      )
    }
  } else {
    return (
      <div className={classNames(styles.container, onRight && styles.right)}>
        {core}
      </div>
    )
  }
}

export default ImageLink
