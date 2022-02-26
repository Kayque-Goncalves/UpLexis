import { Carousel } from '../components/Carousel'
import styles from './home.module.scss'

export default function Home() : JSX.Element {
  return (
    <div className={ styles.homeWrapper }>
      <Carousel />
    </div>
  )
}
