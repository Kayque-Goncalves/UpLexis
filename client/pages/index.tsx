import { Carousel } from '../components/Carousel'
import { HeaderMenu } from '../components/HeaderMenu'
import { HomeGrid } from '../components/HomeGrid'

import styles from './home.module.scss'

export default function Home() : JSX.Element {
  return (
    <div className={ styles.homeWrapper }>
      <Carousel />
      <HeaderMenu />
      <HomeGrid />
    </div>
  )
}
