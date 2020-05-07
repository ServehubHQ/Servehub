import { useMemo } from 'react'

interface AverageRatingFieldProps {
  basePath?: string
  className?: string
  currentSort?: {
    field: string
    order: 'DESC' | 'ASC'
  }
  ids?: string[]
  loaded?: boolean
  resource?: 'ratings'
  setSort?: () => void
  total?: number
  data?: {
    [key: string]: {
      value: number
    }
  }
}

export function AverageRatingField({
  data,
  total,
  className,
}: AverageRatingFieldProps) {
  const ratings = useMemo(() => Object.values(data || {}), [data])
  const avgRating = useMemo(() => {
    if (ratings.length === 0) {
      return 0
    }
    const total = ratings.reduce((current, r2) => current + r2.value, 0)
    return total / ratings.length
  }, [ratings])
  return (
    <span className={className}>
      {total === 0 ? '' : `${avgRating}/5 from ${total}`}
    </span>
  )
}
