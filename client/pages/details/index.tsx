import { Carousel } from "../../components/Carousel";

import styles from "./details.module.scss";

export default function Details() : JSX.Element {
  return (
    <div className={ styles.detailsWrapper }>
      <Carousel />
    </div>
  )
}