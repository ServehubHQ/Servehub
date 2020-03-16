import { Stepper, Step, StepLabel } from '@material-ui/core'

interface CreateJobSteps {
  activeStep: number
}

export function CreateJobSteps({ activeStep }: CreateJobSteps) {
  return (
    <Stepper activeStep={activeStep}>
      <Step>
        <StepLabel>Target</StepLabel>
      </Step>
      <Step>
        <StepLabel>Documents</StepLabel>
      </Step>
      <Step>
        <StepLabel>Payment</StepLabel>
      </Step>
    </Stepper>
  )
}
