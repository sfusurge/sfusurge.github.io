import { useState } from 'react'
import styles from './Themes.module.scss'
import Image from '../../components/Image'
import motherHeart from '../../assets/pageIcons/motherHeart.svg'
import penTip from '../../assets/pageIcons/penTip.svg'
import puzzle from '../../assets/pageIcons/puzzle.svg'
import lightbulb from '../../assets/pageIcons/lightbulb.svg'
import dragonMoon from '../../assets/dragonMoon.svg'

const Themes = () => {
  const [filter, setFilter] = useState<string>('Mental health')
  const filterTypes = ['Mental health', 'Accessibility', 'Education']

  return (
    <div className={styles.container}>
      <div className={styles.textGroup}>
        <p className={styles.title}>
          Build your StormHacks project with our{' '}
          <span className={styles.semiBold}>event themes</span>
        </p>
        <p className={styles.smallBoldText}>
          For StormHacks 2022, your project idea must address an issue related
          to one of the following themes:
        </p>
        <div className={styles.btnGroup}>
          {filterTypes.map(filterType => (
            <button
              className={
                filterType === filter ? styles.activeBtn : styles.inactiveBtn
              }
              onClick={() => {
                setFilter(filterType)
              }}
            >
              {filterType}
            </button>
          ))}
        </div>
        <div className={styles.blueBox}>
          <div className={styles.understanding}>
            <p className={styles.smallTitle}>
              {filter === 'Mental health' && (
                <>
                  {'Understanding ourselves '}{' '}
                  <Image src={motherHeart} alt={motherHeart} />
                </>
              )}
              {filter === 'Accessibility' && (
                <>
                  {'Helping people live fuller lives '}{' '}
                  <Image src={puzzle} alt={puzzle} />
                </>
              )}
              {filter === 'Education' && (
                <>
                  {'Learning something everyday '}{' '}
                  <Image src={lightbulb} alt={lightbulb} />
                </>
              )}
            </p>
            <div className={styles.smallParagraph}>
              <p>
                {filter === 'Mental health' &&
                  'During the COVID-19 pandemic, concerns about mental health have grown and new barriers have arisen for people already suffering from mental illness.'}
                {filter === 'Accessibility' &&
                  'With this theme, we want you to think about how you can make a product that helps people outside of the able-bodied spectrum with any area of their lives. Some of these areas could be: '}
                {filter === 'Education' &&
                  'Getting an education opens many doors and opportunities, and is one of the greatest privileges we share. '}
              </p>
              <p>
                {filter === 'Mental health' &&
                  'Mental health resources such as therapists are often unaffordable and many counseling services are backed up with long waitlists.   Despite this mental health crisis, people can still try to improve their circumstances in areas which include but are not limited to: '}
                {filter === 'Education' &&
                  'Some people aren’t able to get into a classroom. Others have ended up in a major they may not be passionate about anymore. Many others are just looking to learn something new. Some aspects of education you can aim to address include:'}
              </p>
              {filter === 'Mental health' && (
                <ul>
                  <li>Eating a healthy, more well-rounded diet</li>
                  <li>Getting more intense and frequent exercise</li>
                  <li>
                    Forming new relationships and building a healthy support
                    network
                  </li>
                  <li>Gaining access to more affordable resources</li>
                  <li>Managing their stress </li>
                </ul>
              )}
              {filter === 'Accessibility' && (
                <ul>
                  <li>{'Navigating transportation & buildings'}</li>
                  <li>Obtaining information, including non-visual supports</li>
                  <li>
                    Healthcare when receiving proper diagnosis and treatment
                  </li>
                  <li>Finding and securing employment opportunities</li>
                  <li>Adjusting to new languages, cultures, and places </li>
                </ul>
              )}
              {filter === 'Education' && (
                <ul>
                  <li>{'Making information and education more accessible'}</li>
                  <li>Improving media literacy education</li>
                  <li>Boosting engagement for online learning</li>
                  <li>
                    Spreading awareness about global issues and ways to tackle
                    them
                  </li>
                </ul>
              )}
              <p className={styles.question}>
                {filter === 'Mental health' &&
                  'What are some ways you can help people improve these areas of their life?'}
                {filter === 'Accessibility' &&
                  'What are some ways in which you can make these resources more accessible/readily available to people with disabilities?'}
                {filter === 'Education' &&
                  'What can you build to help people learn?'}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerText}>
          <p
            style={{ margin: 0, paddingTop: '35px' }}
            className={styles.smallTitle}
          >
            Coding isn’t a must-have <Image src={penTip} alt={penTip}></Image>
          </p>
          <div className={styles.smallParagraph}>
            <p style={{ margin: 0, paddingBottom: '112px' }}>
              One of the most challenging things about a hackathon can be
              developing your final submission, especially for hackers who are
              aiming to build their design skills, sharing their ideas and
              stories through visuals and experiences. This can often lead to
              people feeling left out or discouraged from even entering their
              first hackathon, especially if you’re entering on your own. For
              all you designers, we’re hosting prizes and workshops to help
              support your no-code solutions and prototypes.
            </p>
          </div>
        </div>
      </div>
      <Image
        className={styles.dragonMoonImg}
        src={dragonMoon}
        alt={dragonMoon}
      ></Image>
    </div>
  )
}

export default Themes
