import React from 'react'

import styles from './Description.module.scss'

class Description extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.inf}>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check}/>
            Опытные тренеры
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check}/>
            Удобное расположение(10 минут от м.Балтийская)
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check}/>
            Приятные цены и акции
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check}/>
            Комфортный зал и прекрасная атмосфера
          </div>
          <div className={styles.button}>
            Записаться на пробное занятие
          </div>
        </div>
        <div className={styles.photo}></div>


      </div>
    )
  }
}

export default Description