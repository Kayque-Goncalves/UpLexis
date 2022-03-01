import { FiChevronLeft } from 'react-icons/fi'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import styles from './details.module.scss'

import { InformativeCard } from '../../components/InformativeCard'
import { CarouselItem } from '../../components/CarouselItem'
import { Button } from '../../components/Button'
import { Carousel } from '../../components/Carousel'

export default function Details() : JSX.Element {
  return (
    <div className={ styles.details }>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>

      <section>
        <div className={ styles.details__title }>
          <FiChevronLeft className={ styles.details__title__backButton } stroke="#FE7000" />
          <h2>Hitórico Empresarial</h2>
        </div>

        <div className={ styles.details__cardsCarousel }>
          <div className={ styles.details__cardsCarousel__button }>
            <BsArrowLeftShort fill='#ADADAD' />
          </div>

          <div className={ styles.details__cardsCarousel__cards }>
            <InformativeCard />
            <InformativeCard />
          </div>

          <div className={ styles.details__cardsCarousel__button }>
            <BsArrowRightShort fill='#ADADAD' />
          </div>
        </div>

        <div className={ styles.details__longDescription }>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, blanditiis provident? 
          Neque, omnis beatae? Iusto, sunt laboriosam necessitatibus, perspiciatis hic eum, minima 
          labore itaque id dicta tenetur. Similique, itaque dolore.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolores mollitia possimus, 
          voluptatum temporibus sint, nobis sapiente eum commodi ea aliquid? Porro dolorem debitis 
          ex velit consectetur similique earum incidunt?
        </div>

        <div className={ styles.details__price }>
          <div className={ styles.details__price__priceBox }>
              <span>R$</span>
              <span>29,99</span>
          </div>

          <Button text="Habilitar" />
        </div>
      </section>
    </div>
  )
}