import { FaGlobe } from 'react-icons/fa'

import styles from './headerMenu.module.scss'

function HeaderMenu() : JSX.Element {
  return (
    <div className={ styles.menuWrapper }>
      {/* Map categories on database */}
      <div className={ styles.itemsWrapper }>
        <div className={ styles.menuItem }>
          <FaGlobe className={ styles.icon } fill="white" />
          <span>Todos</span>
        </div>
      </div>
    </div>
  )
}

export { HeaderMenu }
