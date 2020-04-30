import { makeStyles, StepLabel as MuiStepLabel } from '@material-ui/core'
import { ReactNode } from 'react'
import { StepIcon } from './StepIcon'

interface StepLabelProps {
  children: ReactNode
}

const useStyles = makeStyles((theme) => ({
  stepLabel: {
    ...theme.typography.h5,
    fontWeight: 'inherit',
  },
}))

export function StepLabel({ children, ...props }: StepLabelProps) {
  const classNames = useStyles()
  return (
    <MuiStepLabel
      classes={{ label: classNames.stepLabel }}
      StepIconComponent={StepIcon}
      {...props}
    >
      {children}
    </MuiStepLabel>
  )
}
