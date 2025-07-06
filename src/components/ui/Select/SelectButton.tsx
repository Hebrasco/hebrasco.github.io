import { conditionalStyle } from 'utils'
import styles from './DropdownButton.module.css'

interface Props {
  label: string
  onClick: () => void
  isOpen: boolean
}

function SelectButton({ label, onClick: handleClick, isOpen }: Props) {
  return (
    <button className={styles['dropdown-button']} onClick={handleClick} type="button">
      {label}
      <i className={`bi bi-chevron-down ms-1 ${conditionalStyle(isOpen, styles.open)}`}></i>
    </button>
  )
}

export { SelectButton }
