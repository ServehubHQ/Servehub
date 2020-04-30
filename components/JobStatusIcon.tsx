import { makeStyles } from '@material-ui/core'
import {
  AccessTimeOutlined,
  CheckCircleOutlined,
  HighlightOffOutlined,
} from '@material-ui/icons'
import { useMemo } from 'react'
import { JobStatusIconJobFragment } from '../graphql-codegen'
import { jobIsFailed, jobIsSuccessful } from '../lib/jobUtils'

const useStyles = makeStyles((theme) => ({
  successIcon: {
    fill: theme.palette.success.main,
  },
}))

interface JobStatusIconProps {
  job: JobStatusIconJobFragment
}

export function JobStatusIcon({ job }: JobStatusIconProps) {
  const classNames = useStyles()
  const isFailed = useMemo(() => jobIsFailed(job), [job])
  const isSuccessful = useMemo(() => jobIsSuccessful(job), [job])

  return isSuccessful ? (
    <CheckCircleOutlined className={classNames.successIcon} fontSize='large' />
  ) : isFailed ? (
    <HighlightOffOutlined color='error' fontSize='large' />
  ) : (
    <AccessTimeOutlined color='action' fontSize='large' />
  )
}
