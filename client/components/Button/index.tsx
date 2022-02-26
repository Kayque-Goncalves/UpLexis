import styles from './button.module.scss'

interface ButtonProps {
  text: string
}

function Button(props: ButtonProps) : JSX.Element {
  return (
    <button className={ styles.button }>
      <span>{ props.text }</span>
    </button>
  )
}

export { Button }