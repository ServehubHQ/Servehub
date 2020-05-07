import { Button } from '@material-ui/core'
import { useMemo } from 'react'
import { ReferenceManyField } from 'react-admin'
import { Link as RouterLink } from 'react-router-dom'
import { ReferenceManyFieldChildProps } from '../../ReferenceManyFieldChildProps'

interface Job {
  lawyer_user_id: string
  server_user_id: string
}

interface JobsSummaryProps extends ReferenceManyFieldChildProps<Job> {
  userIdField: keyof Job
}

function JobsSummary({ total, userIdField, data, ...props }: JobsSummaryProps) {
  console.log({ total, ...props })
  const userId = useMemo(() => {
    const firstJob = Object.values(data || {})[0]
    if (firstJob) {
      return firstJob[userIdField]
    }
  }, [userIdField, data])
  if (total === 0) {
    return <span />
  }
  return (
    <Button
      component={RouterLink}
      to={`/jobs?filter=${encodeURIComponent(
        JSON.stringify({
          [userIdField]: userId,
        }),
      )}`}
      variant='contained'
    >
      {`View ${total} jobs`}
    </Button>
  )
}

interface JobsSummaryFieldProps {
  target: keyof Job
}

export function JobsSummaryField({ target, ...props }: JobsSummaryFieldProps) {
  return (
    <ReferenceManyField {...props} reference='jobs' target={target}>
      <JobsSummary userIdField={target} />
    </ReferenceManyField>
  )
}
