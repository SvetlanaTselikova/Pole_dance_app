import React from 'react'
import ReactModal from 'react-modal'

import styles from './Description.module.scss'

class Description extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpened: false,
    }
  }

  handleChangeModalState = () => {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    })
  }

  render() {
    return (
      <div className={styles.base}>
        <ReactModal
          isOpen={this.state.isModalOpened}
          onRequestClose={this.handleChangeModalState}
          style={{
            content: {
              width: '500px',
              height: '250px',
              left: '50%',
              'margin-left': '-250px',
              font: '20px Arial',
              padding: '40px 30px 0 30px',
              'box-sizing': 'border-box',
              display: 'flex',
              'align-items': 'center',
            }
          }}
        > <div>
            Для записи на БЕСПЛАТНОЕ пробное занятие звоните по телефону: <b>+7 (921) 364-93-18</b>
            <button className={styles.modalButton} onClick={this.handleChangeModalState}>ОК</button>
          </div>
        </ReactModal>
        <div className={styles.inf}>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check} />
            Опытные тренеры
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check} />
            Удобное расположение(10 минут от м.Балтийская)
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check} />
            Приятные цены и акции
          </div>
          <div className={styles.infItem}>
            <img src='./images/check.png' className={styles.check} />
            Комфортный зал и прекрасная атмосфера
          </div>
          <div className={styles.button} onClick={this.handleChangeModalState}>
            Записаться на пробное занятие
          </div>
        </div>
        <div className={styles.photo}></div>


      </div>
    )
  }
}

export default Description