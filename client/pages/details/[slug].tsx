import { FiChevronLeft } from 'react-icons/fi'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import styles from './details.module.scss'

import { InformativeCard } from '../../components/InformativeCard'
import { CarouselItem } from '../../components/CarouselItem'
import { Button } from '../../components/Button'
import { Carousel } from '../../components/Carousel'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../services/api'
import { ServicesProps } from '..'

interface ServiceDetailsProps {
  service: ServicesProps
}

export default function Details(service: ServiceDetailsProps) : JSX.Element {
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
          <h2>{ service.service.title }</h2>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('services')

  const paths = data.map((service: ServicesProps) => {
    console.log('service', service)

    return {
      params: {
        slug: service.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params
  const { data } = await api.get(`services/${ slug }`)

  const service = {
    id: Number(data.id),
    title: data.title,
    serviceType: data.serviceType,
    shortDescription: data.shortDescription,
    longDescription: data.longDescription,
    icon: data.icon,
    price: data.price 
  }

  return {
    props: {
      service,
    }
  }
}