import { ReactNode, useEffect, useState, useRef } from 'react'
import classNames from '../../utils/classNames'

import styles from './Dropdown.module.scss'

import { ReactComponent as Gt } from '../../assets/greater-than.svg'

const MAX_INT = Number.MAX_SAFE_INTEGER

interface IDropdownProps {
  children: ReactNode
  header: ReactNode
  isOpen?: boolean
  startOpened?: boolean
  fixedCollapsed?: boolean
  className?: string
  classes?: {
    dropdown?: string
    header?: string
  }
  arrowOnLeft?: boolean
  maxHeight?: number
  onOpen?: (...args: unknown[]) => void
}

const Dropdown = ({
  header,
  children,
  isOpen: openOverride,
  startOpened,
  fixedCollapsed,
  className,
  classes,
  arrowOnLeft,
  onOpen,
  maxHeight
}: IDropdownProps) => {
  const [isOpen, setOpen] = useState(!!startOpened)

  const [height, setHeight] = useState(MAX_INT)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('update')
    setOpen(!!openOverride)
  }, [openOverride])

  useEffect(() => {
    if (!dropdownRef.current) return

    if (maxHeight) {
      setHeight(maxHeight)
      return
    }

    const fakeChild = dropdownRef.current.cloneNode(true) as HTMLDivElement
    fakeChild.style.maxHeight = ''
    fakeChild.style.width = `${dropdownRef.current.clientWidth}px`
    fakeChild.className = styles.fakeChild
    document.body.appendChild(fakeChild)
    setHeight(fakeChild.clientHeight)
    document.body.removeChild(fakeChild)
    // eslint-disable-next-line
  }, [
    children,
    dropdownRef.current?.clientHeight,
    dropdownRef.current?.clientWidth
  ])

  useEffect(() => {
    if (isOpen) onOpen?.()
    // eslint-disable-next-line
  }, [isOpen])

  const toggleCollapse = () => !fixedCollapsed && setOpen(!isOpen)

  return (
    <div className={classNames(className, !isOpen && styles.collapsed)}>
      {header && (
        <button
          className={classNames(
            styles.headerBtn,
            fixedCollapsed && styles.fixedCollapsed
          )}
          onClick={toggleCollapse}
        >
          <div
            className={classNames(
              styles.header,
              classes?.header,
              arrowOnLeft && styles.leftArrow
            )}
          >
            {header}
            {!fixedCollapsed && (
              <Gt
                className={classNames(
                  styles.collapseImg,
                  classes?.dropdown ?? styles.collapse
                )}
              />
            )}
          </div>
        </button>
      )}
      <div
        className={styles.dropdown}
        style={{
          maxHeight: `${isOpen ? height : 0}px`
        }}
        ref={dropdownRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
