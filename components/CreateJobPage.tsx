import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Step,
  Stepper,
  Paper,
} from '@material-ui/core'
import { FormEvent, ReactNode } from 'react'
import { useAuthRequired } from '../lib/useAuthRequired'
import { Page, PageProps } from './Page'
import { StepLabel } from './StepLabel'
import { Stack } from './Stack'

interface CreateJobPageProps extends PageProps {
  activeStep: number
  title: string
  loading: boolean
  actionExtra?: ReactNode
  cta?: string
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
  actions: {
    justifyContent: 'flex-end',
  },
  activeIcon: {
    color: `${theme.palette.primary.main} !important`,
  },
}))

export function CreateJobPage({
  activeStep,
  title,
  loading,
  cta = 'Next',
  onSubmit,
  children,
  actionExtra,
  ...pageProps
}: CreateJobPageProps) {
  useAuthRequired()
  const classNames = useStyles()

  return (
    <Page {...pageProps} title={`${title} - Create Job`}>
      <Stack>
        <Paper>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Target</StepLabel>
            </Step>
            <Step>
              <StepLabel>Documents</StepLabel>
            </Step>
            <Step>
              <StepLabel>Plan</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment</StepLabel>
            </Step>
          </Stepper>
        </Paper>
        <form noValidate onSubmit={onSubmit}>
          <Card>
            {children}
            {onSubmit ? (
              <>
                <Divider />
                <CardActions className={classNames.actions}>
                  {actionExtra}
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    disabled={loading}
                  >
                    {cta}
                  </Button>
                </CardActions>
              </>
            ) : null}
          </Card>
        </form>
      </Stack>
    </Page>
  )
}
