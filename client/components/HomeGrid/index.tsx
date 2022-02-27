import { ServicesCard } from '../ServicesCard'
import styles from './homeGrid.module.scss'

function HomeGrid() : JSX.Element {
  return (
    <div className={ styles.homeGridWrapper }>
      <div className={ styles.orderBy }>
        <div className={ styles.orderBy__label }>
          <span>ORDENAR</span>
        </div>
        <div className={ styles.orderBy__select }>
          <select>
            <option value="price">Preço</option>
            <option value="release">Lançamento</option>
          </select>
        </div>
      </div>

      <div className={ styles.cardsWrapper }>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  )
}

export { HomeGrid }