import { makeStyles } from '@material-ui/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useJobDetailsReportQuery } from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export default function JobDetailsReport() {
  useAuthRequired()
  const classNames = useStyles()
  const router = useRouter()
  const { jobId } = router.query
  const { data } = useJobDetailsReportQuery({
    variables: { jobId },
  })

  return (
    <div className={classNames.root}>
      <Head>
        <title>{`Service report for ${data?.job?.target_name}`}</title>
      </Head>
    </div>
  )
}
