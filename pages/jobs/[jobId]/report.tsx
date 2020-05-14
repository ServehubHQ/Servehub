import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
import moment from 'moment'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Address } from '../../../components/Address'
import { Money } from '../../../components/Money'
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
  paymentTable: {
    maxWidth: theme.spacing(6),
  },
  paymentTotalLabel: {
    fontWeight: 'bold',
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
        {data?.job?.plan ? (
          <Stack spacing={1}>
            <Typography variant='h5'>Payment</Typography>
            <Table size='small' className={classNames.paymentTable}>
              <TableBody>
                <TableRow>
                  <TableCell>Fee</TableCell>
                  <TableCell align='right'>
                    <Money cents={data.job.plan.fee} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bounty</TableCell>
                  <TableCell align='right'>
                    <Money cents={data.job.plan.bounty} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classNames.paymentTotalLabel}>
                    Total
                  </TableCell>
                  <TableCell align='right'>
                    <Money cents={data.job.plan.fee + data.job.plan.bounty} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        ) : null}
      </Stack>
    </Container>
  )
}
