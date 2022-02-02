import styles from './Sponsors.module.scss'
import Image from '../../components/Image'
//import ImageLink from '../../components/ImageText'
import emailTeamIcon from '../../assets/emailTeamIcon.svg'
import otterInTheClouds from '../../assets/otterShovel.svg'
//eslint-disable-next-line
import sponsors from '../../assets/data/sponsors'

const sponsorResolver = require.context(
  '../../assets/sponsors',
  false,
  /.*\.png|Jpeg/
)

const Sponsors = () => {
  // TODO
  //eslint-disable-next-line

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p className={styles.title}>
          Join our <span className={styles.headingBold}>sponsors</span>
        </p>
        <p className={styles.paragraph}>
          We’re looking for passionate companies and organizations looking to
          foster talent across the global tech community—people hoping to take
          on young and innovative minds, presenting meaningful opportunities and
          challenge students’ limits.
        </p>
        <div className={styles.subFooter}>
          <a className={styles.buttonText} href="mailto:info@stormhacks.com">
            Sponsor us
            <Image
              className={styles.icon}
              src={emailTeamIcon}
              alt={emailTeamIcon}
            />
          </a>
          <p className={styles.normalText}>
            Interested in sponsoring us? Contact us at
            <span className={styles.semiBold}> info@stormhacks.com </span>
          </p>
        </div>
        <div className={styles.sponsorSection}>
          <Image
            src={otterInTheClouds}
            alt={otterInTheClouds}
            className={styles.otterCloudsImg}
          ></Image>
          <div className={styles.sponsorsList}>
            {sponsors.map(sponsor => (
              <div className={styles.sponsorCol}>
                <a href={sponsor.link} className={styles.sponsorImg}>
                  <Image
                    src={sponsorResolver(sponsor.src).default}
                    alt={sponsor.name}
                    className={styles.sponsorImg}
                  ></Image>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
