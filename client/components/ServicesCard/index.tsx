import Link from 'next/link'
import { FaGlobe, FaHandPointLeft } from 'react-icons/fa'
import { ServicesProps } from '../../pages'

import styles from './servicesCard.module.scss'

interface IServicesCardProps {
  handleGoToDetailsPage: () => void
}

function ServicesCard(service: ServicesProps) : JSX.Element {
  function handleGoToDetailsPage() {
    window.location.href = '/details'
  }
  
  return (
    <div className={ styles.serviceCard }>
      <header className={ styles.serviceCard__header }>
        <FaGlobe className={ styles.serviceCard__header__icon } fill="#FE7000" />
        <h2 className={ styles.serviceCard__header__title }>{ service.title }</h2>
      </header>

      <main className={ styles.serviceCard__content }>
        <div className={ styles.serviceCard__content__description }>
          <span>{ service.shortDescription }</span>
        </div>
      </main>

      <footer className={ styles.serviceCard__footer }>
        <div className={ styles.serviceCard__footer__price }>
          <span>{ service.price }</span>
        </div>
        <div className={ styles.serviceCard__footer__more } onClick={ () => handleGoToDetailsPage() }>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          {console.log('service.id', `/details/${ service.id }`)}
          <Link href={`details/${ service.id }`}>
            <span>Saiba mais</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export { ServicesCard }