import styles from './KeyInfoTitle.module.css'

interface Props {
  title: string
}

function KeyInfoTitle({ title }: Props) {
  return <p className={styles['key-info-title']}>{title}</p>
}

export { KeyInfoTitle }
