import {
  Paper,
  Step,
  Stepper,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { Page } from './Page'
import { Stack } from './Stack'
import { StepLabel } from './StepLabel'
import { useAuthRequired } from '../lib/useAuthRequired'
import { ReactNode, useMemo } from 'react'
import { PageQueryFragment } from '../graphql-codegen'
import { pushNotificationsSupported } from '../lib/firebase'

type Steps = 'signup' | 'address' | 'notifications' | 'approval'

interface ServerOnboardingPageProps {
  children: ReactNode
  step: Steps
  query?: PageQueryFragment
}

export default function ServerOnboardingPage({
  children,
  step,
  query,
}: ServerOnboardingPageProps) {
  useAuthRequired()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const notificationsSupported = useMemo(() => pushNotificationsSupported(), [])
  const stepIndexes: { [key in Steps]: number } = useMemo(() => {
    return {
      signup: 0,
      address: 1,
      notifications: notificationsSupported ? 2 : 0,
      approval: notificationsSupported ? 3 : 2,
    }
  }, [notificationsSupported])

  return (
    <Page query={query} title='Server Onboarding'>
      <Stack>
        <Paper>
          <Stepper
            activeStep={stepIndexes[step]}
            orientation={isSmall ? 'vertical' : 'horizontal'}
          >
            <Step>
              <StepLabel>Signup</StepLabel>
            </Step>
            <Step>
              <StepLabel>Enter Address</StepLabel>
            </Step>
            {pushNotificationsSupported() ? (
              <Step>
                <StepLabel>Get Notified</StepLabel>
              </Step>
            ) : null}
            <Step>
              <StepLabel>Get Approved</StepLabel>
            </Step>
          </Stepper>
        </Paper>
        <div>{children}</div>
      </Stack>
    </Page>
  )
}
