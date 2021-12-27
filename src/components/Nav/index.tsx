import { useContext, useState, useEffect } from 'react'
import ImageLink from '../ImageText'
import pageIcons from '../../utils/pageIcons'
import socials from '../../utils/socials'

import styles from './Nav.module.scss'
import useQuery from '../../hooks/useQuery'
import classNames from '../../utils/classNames'
import { ScrollContext } from '../../context/Scroll'

import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Burger } from '../../assets/burger.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import mlhbanner from '../../assets/pageIcons/mlh-banner.svg'

interface IPagesProps {
  onRight?: boolean
  isSmallDesktop?: boolean
  className?: string
  onClick?: () => void
}

const Pages = ({
  onRight,
  className,
  isSmallDesktop,
  onClick
}: IPagesProps) => (
  <div className={classNames(styles.pages, className)} onClick={onClick}>
    <div className={styles.text}>
      <Logo className={styles.logo} /> STORMHACKS
    </div>
    {pageIcons.map(({ id, color, ...props }) => (
      <div className={styles.page} key={id} style={{ color }}>
        <ImageLink {...props} className={styles.icon} onRight={onRight}>
          {id}
        </ImageLink>
      </div>
    ))}
  </div>
)

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)

  const { dispatch } = useContext(ScrollContext)

  useEffect(() => {
    dispatch({ type: isOpen ? 'LOCK' : 'UNLOCK' })
    // eslint-disable-next-line
  }, [isOpen])

  const onNavigate = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className={classNames(styles.mobile, isOpen && styles.open)}>
      <div className={styles.background} onClick={() => setOpen(false)}></div>
      <div className={styles.menu}>
        <Pages onClick={onNavigate} onRight />
        <div className={styles.socials}>
          {socials.map(({ id, srcDark, link }) => (
            <div className={styles.icon}>
              <ImageLink
                key={id}
                src={srcDark}
                className={styles.img}
                alt={id}
                link={link}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => setOpen(!isOpen)} className={styles.button}>
        {isOpen ? (
          <Close className={styles.menuBtn} />
        ) : (
          <Burger className={styles.menuBtn} />
        )}
      </button>
    </div>
  )
}

const DesktopNav = () => {
  const isSmallDesktop = useQuery('(max-width: 800px)')

  return (
    <>
      <div className={styles.desktop}>
        <Pages isSmallDesktop={isSmallDesktop} />
      </div>
    </>
  )
}

const Nav = () => {
  const isMobile = useQuery('(max-width: 500px)')

  return (
    <div className={styles.nav}>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      <ImageLink
        link="https://mlh.io/"
        className={isMobile ? styles.mlhBannerMobile : styles.mlhBanner}
        src={mlhbanner}
      />
    </div>
  )
}

export default Nav
