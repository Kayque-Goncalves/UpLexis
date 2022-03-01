import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'
import { HeaderMenu } from '../components/HeaderMenu'
import { HomeGrid } from '../components/HomeGrid'

import styles from './home.module.scss'

export default function Home() : JSX.Element {
  return (
    <div className={ styles.homeWrapper }>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      <HeaderMenu />
      <HomeGrid />
    </div>
  )
}
