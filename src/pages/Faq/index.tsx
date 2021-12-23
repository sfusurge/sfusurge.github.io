import styles from './Faq.module.scss'
import AllQuestions from '../../components/AllQuestions'
import Image from '../../components/Image'
import ottersHotPink from '../../assets/ottersHotPink.svg'

const Faq = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.backgroundImg}
        src={ottersHotPink}
        alt={ottersHotPink}
      />
      <div className={styles.innerContainer}>
        <p className={styles.title}>
          Frequently <span className={styles.bold}>Asked Questions</span>
        </p>
        <AllQuestions />
      </div>
    </div>
  )
}

export default Faq
