import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
  Step,
  StepIcon as MuiStepIcon,
  StepIconProps,
  StepLabel,
  Stepper,
} from '@material-ui/core'
import { FormEvent, ReactNode } from 'react'
import { useAuthRequired } from '../lib/useAuthRequired'
import { Page, PageProps } from './Page'

interface CreateJobPageProps extends PageProps {
  activeStep: number
  title: string
  loading: boolean
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

function StepIcon({ active, ...props }: StepIconProps) {
  const classNames = useStyles()
  return (
    <MuiStepIcon
      {...props}
      active={active}
      classes={{ active: classNames.activeIcon }}
    />
  )
}

export function CreateJobPage({
  activeStep,
  title,
  loading,
  cta = 'Next',
  onSubmit,
  children,
  ...pageProps
}: CreateJobPageProps) {
  useAuthRequired()
  const classNames = useStyles()

  return (
    <Page {...pageProps} title={`${title} - Create Job`}>
      <form noValidate onSubmit={onSubmit}>
        <Card>
          <CardHeader
            title='Create Job'
            subheader={
              <Stepper activeStep={activeStep}>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>Target</StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>Documents</StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>Plan</StepLabel>
                </Step>
                <Step>
                  <StepLabel StepIconComponent={StepIcon}>Payment</StepLabel>
                </Step>
              </Stepper>
            }
          />
          <Divider />
          <CardContent>{children}</CardContent>
          {onSubmit ? (
            <>
              <Divider />
              <CardActions className={classNames.actions}>
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
    </Page>
  )
}
