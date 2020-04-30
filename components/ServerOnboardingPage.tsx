import { Paper, Step, Stepper } from '@material-ui/core'
import { Page } from './Page'
import { Stack } from './Stack'
import { StepLabel } from './StepLabel'
import { useAuthRequired } from '../lib/useAuthRequired'
import { ReactNode } from 'react'
import { PageQueryFragment } from '../graphql-codegen'

const stepIndexes = {
  address: 1,
  notifications: 2,
  approval: 3,
}

interface ServerOnboardingPageProps {
  children: ReactNode
  step: keyof typeof stepIndexes
  query?: PageQueryFragment
}

export default function ServerOnboardingPage({
  children,
  step,
  query,
}: ServerOnboardingPageProps) {
  useAuthRequired()

  return (
    <Page query={query} title='Server Onboarding'>
      <Stack>
        <Paper>
          <Stepper activeStep={stepIndexes[step]}>
            <Step>
              <StepLabel>Signup</StepLabel>
            </Step>
            <Step>
              <StepLabel>Enter Address</StepLabel>
            </Step>
            <Step>
              <StepLabel>Get Notified</StepLabel>
            </Step>
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
