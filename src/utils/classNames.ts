const classNames = (...classes: Array<string | boolean | null | undefined>) =>
  classes.filter(cls => cls).join(' ')

export default classNames
