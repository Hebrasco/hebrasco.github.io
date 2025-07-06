import { COLUMNS_AMOUNT } from 'components/layout/Column/constants/columnsAmount'
import { useWindowSize } from 'hooks'
import { type PropsWithChildren, useMemo } from 'react'

interface Props extends PropsWithChildren {
  className?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

function Column({ children, className, xs = COLUMNS_AMOUNT, sm, md, lg, xl, xxl }: Props) {
  const { isLg, isMd, isSm, isXl, isXs, isXxl } = useWindowSize()

  const gridColumnSize = useMemo(() => {
    if (isXs) return Math.min(Math.max(1, xs), COLUMNS_AMOUNT)
    if (isSm) return Math.min(Math.max(1, sm ?? xs), COLUMNS_AMOUNT)
    if (isMd) return Math.min(Math.max(1, md ?? sm ?? xs), COLUMNS_AMOUNT)
    if (isLg) return Math.min(Math.max(1, lg ?? md ?? sm ?? xs), COLUMNS_AMOUNT)
    if (isXl) return Math.min(Math.max(1, xl ?? lg ?? md ?? sm ?? xs), COLUMNS_AMOUNT)
    if (isXxl) return Math.min(Math.max(1, xxl ?? xl ?? lg ?? md ?? sm ?? xs), COLUMNS_AMOUNT)

    return COLUMNS_AMOUNT
  }, [isLg, isMd, isSm, isXl, isXs, isXxl, xs, xl, md, xxl, sm, lg])

  return (
    <div className={`${className ?? ''}`} style={{ gridColumn: `span ${gridColumnSize}` }}>
      {children}
    </div>
  )
}

export { Column }
