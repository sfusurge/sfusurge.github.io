import { useState, useEffect } from 'react'
import { calculateTimeLeft, formatDoubleDigitTime } from '../../utils/timeLeft'
import styles from './Schedule.module.scss'
import Image from '../../components/Image'
import { ReactComponent as EditIcon } from '../../assets/pageIcons/editIcon.svg'
import facebook from '../../assets/socials/facebook-black.svg'
import instagram from '../../assets/socials/instagram-black.svg'
import discord from '../../assets/socials/discord.svg'
import linkedin from '../../assets/socials/linkedin-black.svg'
import flyingBoat from '../../assets/flyingBoat.svg'
import ImageLink from '../../components/ImageText'

interface ITime {
  days?: string
  hours?: string
  minutes?: string
  seconds?: string
}

const getTime = (dueDate: string) => {
  const timeLeft = calculateTimeLeft(dueDate)
  const timeString: ITime = {}
  if (timeLeft) {
    timeString.days = formatDoubleDigitTime(timeLeft.days)
    timeString.hours = formatDoubleDigitTime(timeLeft.hours)
    timeString.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeString.seconds = formatDoubleDigitTime(timeLeft.seconds)
    return timeString
  }
  return null
}

const Schedule = () => {
  const socials = [
    {
      name: 'Instagram',
      image: instagram,
      link: 'https://www.instagram.com/sfusurge/'
    },
    {
      name: 'Facebook',
      image: facebook,
      link: 'https://www.facebook.com/sfusurge'
    },
    {
      name: 'Discord',
      image: discord,
      link: 'https://discord.com/invite/xu7CqKc'
    },
    {
      name: 'Linkedin',
      image: linkedin,
      link: 'https://www.linkedin.com/company/sfu-surge/'
    }
  ]

  const dueDate = '2022-01-29T00:00:00Z'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>
          We’ll be releasing <span className={styles.bold}>our schedule </span>
          later on
        </p>
        <p className={styles.subTitle}>
          Stay tuned for more information by following us on our social media
          platforms.
        </p>
        <div className={styles.socials}>
          {socials.map(({ image, link, name }) => (
            <div className={styles.social} key={name}>
              <ImageLink
                className={styles.hyperLink}
                link={link}
                src={image}
                onRight
              >
                {name}
              </ImageLink>
            </div>
          ))}
        </div>
        <a href="/schedule" className={styles.apply}>
          <p className={styles.title}>
            Apply now
            <EditIcon className={styles.icon} />
          </p>
          {timeLeft ? (
            <p className={styles.bodyText}>
              Heads up, there’s{' '}
              <span className={styles.semiBold}>
                {timeLeft?.days} days, {timeLeft?.hours} hours,{' '}
                {timeLeft?.minutes} minutes and {timeLeft?.seconds} seconds{' '}
              </span>{' '}
              <span className={styles.thin}>until applications close!</span>
            </p>
          ) : (
            <p className={styles.bodyText}> Applications are now closed </p>
          )}
        </a>
      </div>

      <Image className={styles.flyingBoat} src={flyingBoat} alt={flyingBoat} />
    </div>
  )
}

export default Schedule