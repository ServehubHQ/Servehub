import {
  withStyles,
  makeStyles,
  StepConnector as MuiStepConnector,
  StepIconProps,
} from '@material-ui/core'
import clsx from 'clsx'
import { Check } from '@material-ui/icons'

export const StepConnector = withStyles((theme) => ({
  // alternativeLabel: {
  //   top: 10,
  //   left: 'calc(-50% + 16px)',
  //   right: 'calc(50% + 16px)',
  // },
  active: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  // line: {
  //   borderColor: theme.palette.text.secondary,
  //   borderTopWidth: 3,
  //   borderRadius: 1,
  // },
}))(MuiStepConnector)

const useQontoStepIconStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: theme.palette.success.main,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: theme.palette.success.main,
    zIndex: 1,
    fontSize: 18,
  },
}))

export function StepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles()
  const { active, completed } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  )
}
