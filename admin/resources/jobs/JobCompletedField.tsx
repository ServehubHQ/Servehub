import { useMemo } from 'react'
import { ReferenceField, ReferenceManyField } from 'react-admin'
import { JobStatusIcon } from '../../../components/JobStatusIcon'
import { ReferenceManyFieldChildProps } from '../../ReferenceManyFieldChildProps'
import { Tooltip } from '@material-ui/core'

interface Attempt {
  id: string
  success: boolean
}

interface Job {
  id: string
  created_at: Date
}

interface Plan {
  id: string
  duration: string
  attempts: number
}

interface JobsCompletedProps {
  job: Job
  attempts: Attempt[]
  record?: Plan
}

function JobsCompleted({
  record: plan,
  attempts,
  job,
  ...props
}: JobsCompletedProps) {
  console.log({ plan, attempts, job })

  return (
    <JobStatusIcon
      job={{
        ...job,
        attempts,
        plan: plan!,
      }}
    />
  )
}

interface JobsCompletedPlanFieldProps
  extends ReferenceManyFieldChildProps<Attempt> {
  job: Job
}

export function JobsCompletedPlanField({
  total,
  data,
  job,
  ...props
}: JobsCompletedPlanFieldProps) {
  const attempts = useMemo(() => Object.values(data || {}), [data])

  return (
    <ReferenceField {...props} record={job} reference='plans' source='plan_id'>
      <JobsCompleted job={job!} attempts={attempts} />
    </ReferenceField>
  )
}

interface JobsCompletedFieldProps {
  record?: Job
}

export function JobsCompletedField({
  record,
  ...props
}: JobsCompletedFieldProps) {
  return (
    <ReferenceManyField
      {...props}
      record={record}
      reference='attempts'
      target='job_id'
    >
      <JobsCompletedPlanField job={record!} />
    </ReferenceManyField>
  )
}
