import {
  makeStyles,
  Step,
  StepIcon as MuiStepIcon,
  StepIconProps,
  StepLabel,
  Stepper,
} from '@material-ui/core'

interface CreateJobSteps {
  activeStep: number
}

const useStyles = makeStyles((theme) => ({
  activeIcon: {
    color: `${theme.palette.primary.main} !important`,
  },
}))

function StepIcon({ active, ...props }: StepIconProps) {
  const classNames = useStyles()
  console.log({ active, ...props })
  return (
    <MuiStepIcon
      {...props}
      active={active}
      classes={{ active: classNames.activeIcon }}
    />
  )
}

export function CreateJobSteps({ activeStep }: CreateJobSteps) {
  return (
    <Stepper activeStep={activeStep}>
      <Step>
        <StepLabel StepIconComponent={StepIcon}>Target</StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={StepIcon}>Documents</StepLabel>
      </Step>
      <Step>
        <StepLabel StepIconComponent={StepIcon}>Payment</StepLabel>
      </Step>
    </Stepper>
  )
}
