import { useMemo } from 'react'
import { ReferenceManyField } from 'react-admin'
import { ReferenceManyFieldChildProps } from '../../ReferenceManyFieldChildProps'

function AverageRating({
  data,
  total,
  className,
}: ReferenceManyFieldChildProps<{ value: number }>) {
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

export function AverageRatingField(props: any) {
  return (
    <ReferenceManyField reference='ratings' target='user_id' {...props}>
      <AverageRating />
    </ReferenceManyField>
  )
}
AverageRatingField.defaultProps = {
  addLabel: true,
  label: 'Avg. Rating',
}
