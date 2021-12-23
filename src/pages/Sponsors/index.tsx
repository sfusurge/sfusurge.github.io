import styles from './Sponsors.module.scss'
import Image from '../../components/Image'
import emailTeamIcon from '../../assets/emailTeamIcon.svg'
import otterInTheClouds from '../../assets/otterShovel.svg'
//eslint-disable-next-line
import amazon from '../../assets/sponsors/amazon.png'

const Sponsors = () => {
  // TODO
  //eslint-disable-next-line
  const sponsors = ['amazon', 'amazon', 'amazon', 'amazon']
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
          challenge students’ limits. Take a look at some of the perks to
          sponsorship.
        </p>
        <div className={styles.subFooter}>
          <div className={styles.buttonText}>
            Sponsor us
            <Image
              className={styles.icon}
              src={emailTeamIcon}
              alt={emailTeamIcon}
            />
          </div>
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
            {/*
            
            /To add when there are sponsors TODO

            {sponsors.map(sponsor => (
              <div className={styles.sponsorCol}>
                <Image
                  src={amazon}
                  alt={amazon}
                  className={styles.otterCloudsImg}
                ></Image>
              </div>
            ))}
            */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
