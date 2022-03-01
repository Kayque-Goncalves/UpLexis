import styles from './carousel.module.scss'

import React, { useEffect } from 'react'

interface CarouselProps {
  children: React.ReactElement | React.ReactElement[]
}

function Carousel({ children }: CarouselProps) : JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const updateCurrentIndex = (newIndex: number) : void => {
    console.log(newIndex)

    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateCurrentIndex(currentIndex + 1)
    }, 4000)

    return () => interval && clearInterval(interval)
  })

  return (
    <div className={ styles.carousel }>
      <div className={ styles.carousel__slider } style={{ transform: `translateX(-${ currentIndex * 100 }%)` }}>
        {React.Children.map(children, (child: React.ReactElement, index: number) => {
          return React.cloneElement(child, { key: index, width: '100%' })
        })}
      </div>
    </div>
  )
}

export { Carousel }
