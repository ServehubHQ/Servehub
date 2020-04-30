import { makeStyles, StepIconProps } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import clsx from 'clsx'

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
