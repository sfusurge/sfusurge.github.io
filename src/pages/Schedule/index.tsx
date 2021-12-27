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

  const applicationsOpen = '2021-12-27T08:00:00Z'
  /* TODO: change applications closed deadline */
  const dueDate = '2022-01-31T08:00:00Z'
  const [applicationsOpenCountDown, setApplicationsOpenCountDown] = useState(
    getTime(applicationsOpen)
  )
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setApplicationsOpenCountDown(getTime(applicationsOpen))
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
        {/* TODO: Update typeform link when ready */}
        <a
          href={
            !applicationsOpenCountDown && timeLeft
              ? 'https://form.typeform.com/to/xvjiDqqp'
              : '/schedule'
          }
          target="_blank"
          rel="noreferrer"
          className={styles.apply}
        >
          <p className={styles.title}>
            Apply Now
            <EditIcon className={styles.icon} />
          </p>
          {applicationsOpenCountDown ? (
            <p className={styles.bodyText}>
              Heads up, there’s{' '}
              <span className={styles.semiBold}>
                {applicationsOpenCountDown?.days} days,{' '}
                {applicationsOpenCountDown?.hours} hours,{' '}
                {applicationsOpenCountDown?.minutes} minutes and{' '}
                {applicationsOpenCountDown?.seconds} seconds{' '}
              </span>{' '}
              <span className={styles.thin}>until applications open!</span>
            </p>
          ) : (
            <>
              {timeLeft ? (
                <p className={styles.bodyText}>
                  Don’t leave your application to the last minute. Just as a
                  heads up, there’s{' '}
                  <span className={styles.semiBold}>
                    {timeLeft?.days} days, {timeLeft?.hours} hours,{' '}
                    {timeLeft?.minutes} minutes and {timeLeft?.seconds} seconds{' '}
                  </span>{' '}
                  <span className={styles.thin}>until applications Close!</span>
                </p>
              ) : (
                <p className={styles.bodyText}> Applications are now closed </p>
              )}
            </>
          )}
        </a>
      </div>

      <Image className={styles.flyingBoat} src={flyingBoat} alt={flyingBoat} />
    </div>
  )
}

export default Schedule
