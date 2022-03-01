import { IoMdCalendar } from 'react-icons/io'
import { FaAngleRight } from 'react-icons/fa'
import { BsFillBagCheckFill } from 'react-icons/bs'

import styles from './informativeCard.module.scss'

function InformativeCard() {
  return (
    <div className={ styles.informativeCard }>
      <header className={ styles.informativeCard__header }>
        <div className={ styles.informativeCard__header__iconBox }>
          <IoMdCalendar className={ styles.informativeCard__header__iconBox__icon } fill='#ADADAD' />
        </div>

        <div className={ styles.informativeCard__header__titleBox }>
          <h2>Linha do Tempo</h2>
          <FaAngleRight />
        </div>

        <div className={ styles.informativeCard__header__labelsBox }>
          <div className={ styles.informativeCard__header__labelsBox__label }>
            <BsFillBagCheckFill fill='#FE7F22' />
            <span>Lorem Ipsum</span>
          </div>

          <div className={ styles.informativeCard__header__labelsBox__label }>
            <BsFillBagCheckFill fill='#FE7F22' />
            <span>Lorem Ipsum</span>
          </div>
        </div>
      </header>

      <main className={ styles.informativeCard__content }>
        <div></div>
      </main>

      <footer className={ styles.informativeCard__description }>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum possimus ex voluptatum sunt in eius eos.</p>
      </footer>
    </div>
  )
}

export { InformativeCard }