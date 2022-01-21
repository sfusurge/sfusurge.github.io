import { useState } from 'react'
import styles from './Tracks.module.scss'
import Image from '../../components/Image'
import motherHeart from '../../assets/pageIcons/motherHeart.svg'
import penTip from '../../assets/pageIcons/penTip.svg'
import puzzle from '../../assets/pageIcons/puzzle.svg'
import lightbulb from '../../assets/pageIcons/lightbulb.svg'
import dragonMoon from '../../assets/dragonMoon.svg'

const Tracks = () => {
  const [filter, setFilter] = useState<string>('Mental health')
  const filterTypes = ['Mental health', 'Accessibility', 'Education']

  return (
    <div className={styles.container}>
      <div className={styles.textGroup}>
        <p className={styles.title}>
          Guide your upcoming project with{' '}
          <span className={styles.semiBold}>event tracks</span>
        </p>
        <p className={styles.smallBoldText}>
          It can get a little confusing about what to make during StormHacks,
          whether you’re an experienced hacker or if it’s your first time. If
          you’re stuck in that creative block, take a look at these themes to
          help flesh out your next idea or solution.
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
                  'With people having to quarantine due to COVID-19, mental health issues amongst the population have skyrocketed or became worse due to the stress from isolation and lack of job security.'}
                {filter === 'Accessibility' &&
                  'When we build anything, the baseline for functioning projects are for able-bodied people in our society.  With this track, we want you to think about how you can make a product that helps people outside of the able-bodied spectrum with any area of their lives. Some of these areas could be: '}
                {filter === 'Education' &&
                  'Getting an education is one of the greatest privillages that all of us share. The fact that we are able to hack together and get hands-on experience with the things we’ve learned in the classroom is something that we should all be grateful for'}
              </p>
              <p>
                {filter === 'Mental health' &&
                  'However, mental health resources such as therapists are often unaffordable and many counseling services are backed up with long waitlists.  Despite these mental health crises, people can still improve their circumstances in areas which include but are not limited to: '}
                {filter === 'Education' &&
                  'Some peope aren’t able to get into a classroom. Others have ended up in a major they may not be passionate about anymore. Many others are just looking to learn something new.  How can you help people looking for a way to learn something new? How can you make education more accessible for those who need it?  '}
              </p>
              {filter === 'Mental health' && (
                <ul>
                  <li>Eating a more well rounded diet</li>
                  <li>Getting more intense and frequent exercise</li>
                  <li>Forming new relationships or improving current ones</li>
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
              <p className={styles.question}>
                {filter === 'Mental health' &&
                  'What are some ways you can help people improve these areas in their life?'}
                {filter === 'Accessibility' &&
                  'What are some ways in which you can make these resources more accessible/readily available to people with disabilies?'}
                {filter === 'Education' &&
                  'How can you make something that helps people learn outside of the classroom?'}
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

export default Tracks
