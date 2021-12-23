import styles from './AllQuestions.module.scss'
import questions from '../../assets/data/questions'
import Dropdown from '../Dropdown'

const AllQuestions = () => {
  // const [open, setOpen] = useState(-1)

  return (
    <div className={styles.container}>
      {questions.map((set, j) => (
        <div className={styles.set}>
          {set.map(({ question, answer }, i) => (
            <Dropdown
              header={question}
              className={styles.question}
              key={question}
              // isOpen={open === j * set.length + i}
              // onOpen={() => setOpen(j * set.length + i)}
              classes={{ header: styles.header, dropdown: styles.dropdown }}
            >
              <div className={styles.answer}>{answer}</div>
            </Dropdown>
          ))}
        </div>
      ))}
    </div>
  )
}

export default AllQuestions
