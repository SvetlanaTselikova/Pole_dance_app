import React from 'react'

import styles from './Header.module.scss'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={ styles.inf }>
          <div className={ styles.container }>
            <div className={ styles.location }>
            Санкт-Петербург,
            10-я Красноармейская ул, 15</div>
            <div className={ styles.phone }>+7 (921) 364-93-18</div>
          </div>

          <div className={ styles.socialNetworks }>
            <a href='https://vk.com/feed'> <div className={ styles.inst }></div> </a>
            <a href='https://vk.com/feed'><div className={ styles.vk }></div> </a>
          </div>
        </div>
        <div className={ styles.menuBlock }>
            <div className={ styles.logo }>
              <div className= { styles.logoWoman }></div>
              <div className= { styles.logoImage }></div>
            </div>
            <div class={ styles.menu }>
                <div class={ styles.menu__item }>О нас</div>
                <div class={ styles.menu__item }>Направления</div>
                <div class={ styles.menu__item }>Расписание</div>
                <div class={ styles.menu__item }>Цены</div>
                <div class={ styles.menu__item }>Тренеры</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header
