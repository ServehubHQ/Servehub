import moment, { unitOfTime } from 'moment'
import Maybe from 'graphql/tsutils/Maybe'

type DueDateJob = Maybe<{
  created_at: Date
  plan: Maybe<{
    duration: string
  }>
}>

export function jobDueDate(job: DueDateJob) {
  if (!job?.plan) {
    if (job && !job.plan) {
      console.warn('jobDueDate called on a job without a plan')
    }
    return null
  }
  const [value, unit] = job.plan.duration.split(' ')
  if (!unit.startsWith('day')) {
    console.warn('non-days due date interval', unit)
  }
  const duration = moment.duration(
    parseInt(value),
    unit as unitOfTime.DurationConstructor,
  )
  return moment(job.created_at).add(duration)
}

type IsOverdueJob = DueDateJob

export function jobIsOverdue(job: IsOverdueJob) {
  return jobDueDate(job)?.isBefore()
}

type IsFailedJob = IsOverdueJob &
  Maybe<{
    attempts: {
      success: boolean
    }[]
    plan: Maybe<{
      attempts: number
    }>
  }>

export function jobIsFailed(job: IsFailedJob) {
  if (!job) {
    return false
  }

  return jobIsOverdue(job) && !job.attempts.some((attempt) => attempt.success)
}

type IsSuccessfulJob = Maybe<{
  attempts: {
    success: boolean
  }[]
}>

export function jobIsSuccessful(job: IsSuccessfulJob) {
  if (!job) {
    return false
  }
  return job.attempts.some((attempt) => attempt.success)
}

type IsCompleteJob = IsSuccessfulJob &
  IsOverdueJob &
  Maybe<{
    attempts: any[]
    plan: Maybe<{
      attempts: number
    }>
  }>

export function jobIsComplete(job?: IsCompleteJob) {
  return jobIsSuccessful(job) || jobIsFailed(job)
}
