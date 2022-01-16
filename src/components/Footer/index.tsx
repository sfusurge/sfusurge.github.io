import styles from './Footer.module.scss'
import ImageText from '../ImageText'
import socials from '../../utils/socials'
import pageIcons from '../../utils/pageIcons'
import useQuery from '../../hooks/useQuery'
import classNames from '../../utils/classNames'

import { ReactComponent as Logo } from '../../assets/logo.svg'

const Footer = () => {
  const isMobile = useQuery('(max-width: 1165px)')

  return (
    <div className={classNames(styles.container)}>
      <div className={styles.pages}>
        <div className={styles.heading}>
          {isMobile ? (
            <div className={styles.text}>
              <Logo className={styles.logo} /> STORMHACKS
            </div>
          ) : (
            <>
              <div className={styles.text}>Learn more today about</div>
              <div className={styles.bold}>StormHacks 2022</div>
            </>
          )}
          <a
            className={styles.hyperLink}
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noreferrer"
          >
            MLH Code Of Conduct
          </a>
        </div>
        <div className={styles.pageOptions}>
          {pageIcons.map(({ id, src, alt, link, color }) => (
            <div>
              <ImageText
                key={id}
                className={styles.pageIcon}
                src={src}
                alt={alt}
                link={link}
                onRight={isMobile}
              >
                <div className={styles.pageText} style={{ color: color }}>
                  {id}
                </div>
              </ImageText>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.socials}>
        {socials.map(({ id, src, link }) => (
          <div className={styles.icon}>
            <ImageText
              key={id}
              src={src}
              className={styles.img}
              alt={id}
              link={link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
