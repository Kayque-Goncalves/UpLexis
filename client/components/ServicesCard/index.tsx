import { FaGlobe, FaHandPointLeft } from 'react-icons/fa'

import styles from './servicesCard.module.scss'

interface IServicesCardProps {
  handleGoToDetailsPage: () => void
}

function ServicesCard() : JSX.Element {
  function handleGoToDetailsPage() {
    window.location.href = '/details'
  }
  
  return (
    <div className={ styles.serviceCard }>
      <header className={ styles.serviceCard__header }>
        <FaGlobe className={ styles.serviceCard__header__icon } fill="#FE7000" />
        <h2 className={ styles.serviceCard__header__title }>Todos</h2>
      </header>

      <main className={ styles.serviceCard__content }>
        <div className={ styles.serviceCard__content__description }>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nihil, labore necessitatibus officiis quisquam, maxime enim 
            ea veritatis magnam dolor animi debitis deserunt repellendus.
          </span>
        </div>
      </main>

      <footer className={ styles.serviceCard__footer }>
        <div className={ styles.serviceCard__footer__price }>
          <span>R$ 29,99</span>
        </div>
        <div className={ styles.serviceCard__footer__more } onClick={ () => handleGoToDetailsPage() }>
          <span>Saiba mais</span>
        </div>
      </footer>
    </div>
  )
}

export { ServicesCard }