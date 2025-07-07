import { SelectButton } from 'components/ui/Select/SelectButton'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Select.module.css'

interface Props<T extends Record<string, string>> {
  menuTitle: string
  onChange: (item: keyof T) => void
  items: [keyof T]
  valueMap: T
}

function Select<T extends Record<string, string>>({
  menuTitle,
  onChange,
  items,
  valueMap,
}: Props<T>) {
  const selectRef = useRef<HTMLDivElement | null>(null)
  const [selectedItem, setSelectedItem] = useState<keyof T>(items[0])
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    document.addEventListener('click', (event) => {
      const isOutsideClick = !selectRef.current?.contains(event.target as Node)
      if (isOutsideClick) {
        setIsMenuOpen(false)
      }
    })
  }, [])

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState)
  }, [])

  function handleSelectItem(item: keyof T) {
    handleToggleMenu()
    setSelectedItem(item)
    onChange(item)
  }

  return (
    <div className={styles['select-container']} ref={selectRef}>
      <SelectButton isOpen={isMenuOpen} label={valueMap[selectedItem]} onClick={handleToggleMenu} />
      {isMenuOpen && (
        <div className={styles['select-menu']}>
          <div className={styles['select-menu-arrow']} />
          <p className="text-muted">{menuTitle}</p>
          {items.map((item) => (
            <button
              className={styles['select-item']}
              key={`platform-dropdown-item-${String(item)}`}
              onClick={() => handleSelectItem(item)}
              type="button"
            >
              <i
                className="bi bi-check-circle-fill"
                style={{ visibility: selectedItem === item ? 'visible' : 'hidden' }}
              />
              {valueMap[item]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { Select }
