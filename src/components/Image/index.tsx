import { ImgHTMLAttributes, useState } from 'react'
import classNames from '../../utils/classNames'

import styles from './Image.module.scss'

export interface IImage extends ImgHTMLAttributes<HTMLImageElement> {}

const Fallback = (props: IImage) => {
  const style = props.style ? { ...props.style } : {}
  if (!props.className) {
    style.width = props.width ?? style.width
    style.height = props.height ?? style.height
  }
  return (
    <span
      title="loading..."
      style={style}
      {...props}
      className={classNames(props.className, styles.fallback)}
    />
  )
}

const Image = ({
  decoding = 'async',
  alt = '',
  onLoad,
  className,
  children,
  ...props
}: IImage) => {
  const [loaded, setLoaded] = useState(false)

  const loadHandler = () => {
    setLoaded(true)
  }

  return (
    <>
      <img
        decoding={decoding}
        alt={alt}
        onLoad={loadHandler}
        {...props}
        className={classNames(className, !loaded && styles.loading)}
      />
      {!loaded && <Fallback {...props} className={className} />}
    </>
  )
}

export default Image
