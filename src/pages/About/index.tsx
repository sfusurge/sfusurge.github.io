import styles from './About.module.scss'
import Image from '../../components/Image'
import timer from '../../assets/pageIcons/timer.svg'
import trophy from '../../assets/pageIcons/trophy.svg'
import person from '../../assets/pageIcons/person.svg'
import internet from '../../assets/pageIcons/earth.svg'
import { ReactComponent as EditIcon } from '../../assets/pageIcons/edit-orange.svg'
import dreamDesignDevelop from '../../assets/dreamDesignDevelop.svg'
import otterEyesClosed from '../../assets/otterEyesClosed.svg'
import execs from '../../assets/data/execs'
import ImageLink from '../../components/ImageText'
import { calculateTimeLeft } from '../../utils/timeLeft'

const getTime = (dueDate: string) => {
  const timeLeft = calculateTimeLeft(dueDate)
  if (timeLeft) {
    return timeLeft
  }
  return null
}
const execResolver = require.context(
  '../../assets/execs',
  false,
  /.*\.png|Jpeg/
)

const About = () => {
  const dueDate = '2022-02-18T00:00:00Z'
  const timeLeft = getTime(dueDate)

  return (
    <div className={styles.container}>
      <div className={styles.stormHacks}>
        <div className={styles.text}>
          <p className={styles.title}>
            Enter <span className={styles.bold}>StormHacks</span>
          </p>
          <div className={styles.bigDetails}>
            <ImageLink src={timer} className={styles.icon} onRight>
              36 Hours
            </ImageLink>
            <ImageLink src={trophy} className={styles.icon} onRight>
              $8000+ in prizes
            </ImageLink>
            <ImageLink src={person} className={styles.icon} onRight>
              500+ hackers
            </ImageLink>
            <ImageLink src={internet} className={styles.icon} onRight>
              Open worldwide
            </ImageLink>
          </div>
          <p className={styles.paragraph}>
            From February 18-20, 2022, StormHacks welcomes you to collaborate,
            create, and connect with a community of 500+ students across the
            globe. Over the course of 36 hours, you will have the opportunity to
            design and develop a project that tackles real-world problems with
            innovation and insight. If this is your first time attending a
            hackathon, don't worry—we'll have plenty of workshops and mentors to
            support you along the way.
          </p>
          <p className={styles.paragraph}>
            StormHacks 2021 brought together 300+ hackers from 146 universities,
            with 45% of participants being first-time hackers. StormHacks is
            SFU's largest hackathon and an MLH Member Event for the 2022 Season.
          </p>
          {timeLeft ? (
            <a
              className={styles.applyBtn}
              href="https://form.typeform.com/to/xvjiDqqp"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
              <EditIcon className={styles.editIcon} />
            </a>
          ) : (
            <div className={styles.applyBtn}>Applications closed</div>
          )}
        </div>
        <Image className={styles.img} src={dreamDesignDevelop} />
      </div>
      <div className={styles.surge}>
        <div className={styles.text}>
          <p className={styles.title}>
            Who is <span className={styles.bold}>SFU Surge?</span>
          </p>
          <p className={styles.paragraph}>
            SFU Surge is an all-inclusive, student-led organization founded in
            2019. Our mission is to promote curiosity and excitement for a
            future in technology, while guiding students on their paths to
            career success.
          </p>
          <p className={styles.paragraph}>
            We are an innovative community empowering students with projects,
            events, and networking opportunities. StormHacks combines these
            three aspects over the course of a memorable weekend filled with
            mini-contests, workshops, sponsor booths, and more.
          </p>
        </div>
        <Image className={styles.img} src={otterEyesClosed} />
      </div>

      <div className={styles.execGroup}>
        {execs.map(({ src, name, link }) => (
          <ImageLink
            src={execResolver(src).default}
            className={styles.headshot}
            alt={name}
            link={link}
            title={name}
          />
        ))}
      </div>
    </div>
  )
}

export default About
