import { ServicesProps } from '../../pages'
import { ServicesCard } from '../ServicesCard'
import styles from './homeGrid.module.scss'

interface HomeGridProps {
  allServices: ServicesProps[]
}

function HomeGrid({ allServices }: HomeGridProps) : JSX.Element {
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
        {allServices.map((service: ServicesProps, index: number) => {
          return (
            <ServicesCard key={ index } { ...service } />
          )
        })}
      </div>
    </div>
  )
}

export { HomeGrid }