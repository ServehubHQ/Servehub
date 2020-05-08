import { Container, makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Address } from '../../../components/Address'
import { Stack } from '../../../components/Stack'
import { useJobDetailsReportQuery } from '../../../graphql-codegen'
import { DATETIME_FORMAT_LONG } from '../../../lib/constants'
import { useAuthRequired } from '../../../lib/useAuthRequired'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '32px 0',
  },
  attemptImage: {
    maxWidth: 512,
  },
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
    <Container className={classNames.root}>
      <Head>
        <title>{`Service report for ${data?.job?.target_name}`}</title>
      </Head>
      <Stack spacing={3}>
        <Typography variant='h1'>Record of Service</Typography>
        <Stack spacing={1}>
          <Typography variant='h5'>Law Firm</Typography>
          <Typography variant='body1'>{data?.job?.lawyer?.name}</Typography>
          {data?.job?.lawyer?.address ? (
            <Address {...data?.job?.lawyer?.address} typeVariant='body1' />
          ) : null}
        </Stack>
        <Stack spacing={1}>
          <Typography variant='h5'>Requested</Typography>
          <Typography variant='body1'>
            {moment(data?.job?.created_at).format(DATETIME_FORMAT_LONG)}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant='h5'>Target</Typography>
          <Typography variant='body1'>{data?.job?.target_name}</Typography>
          {data?.job?.target_address ? (
            <Address {...data?.job?.target_address} typeVariant='body1' />
          ) : null}
        </Stack>
        <Stack spacing={1}>
          <Typography variant='h5'>Server</Typography>
          <Typography variant='body1'>{data?.job?.server?.name}</Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography variant='h5'>Attempts</Typography>
          {data?.job?.attempts.map((attempt) => (
            <Stack spacing={0} key={attempt.id}>
              <Typography variant='body1'>
                Attempted on{' '}
                {moment(data?.job?.created_at).format(DATETIME_FORMAT_LONG)}.
                Serve {attempt.success ? 'Successful' : 'Unsuccessful'}.
              </Typography>
              {attempt.notes ? (
                <Typography variant='body2'>{attempt.notes}</Typography>
              ) : null}
              {attempt.image_url ? (
                <img
                  src={attempt.image_url}
                  className={classNames.attemptImage}
                />
              ) : null}
            </Stack>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography variant='h5'>Documents Served</Typography>
          {data?.job?.documents.map((document) => (
            <Typography variant='body1' key={document.id}>
              {document.title}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
