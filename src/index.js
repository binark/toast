import React, { useRef, useEffect } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

/**
 *
 * @param {{text: string, img: string|React.Element, show: bool, timeout: number}} params
 * @returns {React.Component}
 */
export const BKToast = ({
  text = '',
  img = undefined,
  show = false,
  timeout = 5000
}) => {
  const toastRef = useRef('')

  useEffect(() => {
    if (show) {
      toastRef.current.classList.add(styles.show)
      setTimeout(() => {
        toastRef.current.classList.remove(styles.show)
      }, timeout)
    } else {
      toastRef.current.classList.remove(styles.show)
    }
  }, [show])

  return (
    <div className={styles.toast} ref={toastRef}>
      <div className={styles.img}>{img}</div>
      <div className={styles.desc}>{text}</div>
    </div>
  )
}

BKToast.propTypes = {
  text: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  show: PropTypes.bool,
  timeout: PropTypes.number
}
