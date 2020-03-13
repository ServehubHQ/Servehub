import { Box, Button, Paper, Typography } from '@material-ui/core'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { useAuthRequired } from '../../../lib/useAuthRequired'

interface FormData {
  name: string
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

export default function JobsCreatePaymentPage() {
  useAuthRequired()

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography component='h1' variant='h5'>
            Create Job
          </Typography>

          <CreateJobSteps activeStep={3} />

          <Box mt={2} display='flex' justifyContent='flex-end'>
            <Button type='submit' variant='contained' color='primary'>
              Next
            </Button>
          </Box>
        </Box>
      </Paper>
    </Page>
  )
}
