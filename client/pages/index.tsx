import { GetStaticProps } from 'next'

import { api } from '../services/api'

import { Carousel } from '../components/Carousel'
import { CarouselItem } from '../components/CarouselItem'
import { HeaderMenu } from '../components/HeaderMenu'
import { HomeGrid } from '../components/HomeGrid'

import styles from './home.module.scss'

export interface BannersProps {
  id: number
  title: string
  serviceType: string
  shortDescription: string 
  longDescription: string
  thumbnail: string
  price: string
}

export interface ServicesProps {
  id: number
  title: string
  serviceType: string
  shortDescription: string 
  longDescription: string
  icon: string
  price: string
}

export interface CategoriesProps {
  id: number
  title: string
  icon: string
}

interface HomeProps {
  allBanners: BannersProps[]
  allCategories: CategoriesProps[]
  allServices: ServicesProps[]
}

export default function Home({ allBanners, allCategories, allServices }: HomeProps) : JSX.Element {
  return (
    <div className={ styles.homeWrapper }>
      <Carousel>
        {allBanners.map((banner: BannersProps, index: number) => {
          return <CarouselItem key={ index } { ...banner } />
        })}
      </Carousel>

      <HeaderMenu allCategories={ allCategories } />
      <HomeGrid allServices={ allServices } />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: bannersResponse } = await api.get('banners')
  const { data: servicesResponse } = await api.get('services')
  const { data: categoriesResponse } = await api.get('categories')

  const banners = bannersResponse.map((banner: BannersProps) => {
    return {
      id: Number(banner.id),
      title: banner.title,
      serviceType: banner.serviceType,
      shortDescription: banner.shortDescription,
      longDescription: banner.longDescription,
      thumbnail: banner.thumbnail,
      price: banner.price 
    }
  })

  const services = servicesResponse.map((service: ServicesProps) => {
    return {
      id: Number(service.id),
      title: service.title,
      serviceType: service.serviceType,
      shortDescription: service.shortDescription,
      longDescription: service.longDescription,
      icon: service.icon,
      price: service.price 
    }
  })

  const categories = categoriesResponse.map((category: CategoriesProps) => {
    return {
      id: Number(category.id),
      title: category.title,
      icon: category.icon
    }
  })

  const allBanners = banners
  const allServices = services
  const allCategories = categories

  return {
    props: {
      allBanners,
      allCategories,
      allServices
    }
  }
}