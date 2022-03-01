import { GetStaticProps } from 'next'
import { FaGlobe } from 'react-icons/fa'
import { api } from '../../services/api'

import styles from './headerMenu.module.scss'

import { CategoriesProps } from '../../pages'

interface HeaderMenuProps {
  allCategories: CategoriesProps[]
}

function HeaderMenu({ allCategories }: HeaderMenuProps) : JSX.Element {
  // var filteredServices = Array.from(new Set(allServices.map(service => service.title)))

  return (
    <div className={ styles.menuWrapper }>
      {allCategories.map((category: CategoriesProps, index: number) => {
        return (
          <div key={ index } className={ styles.itemsWrapper }>
            <div className={ styles.menuItem }>
              <FaGlobe className={ styles.icon } fill="white" />
              <span>{ category.title }</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { HeaderMenu }