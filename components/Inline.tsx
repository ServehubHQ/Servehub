import { ReactNode, useMemo, Children } from 'react'
import { Grid, GridSpacing } from '@material-ui/core'

interface InlineProps {
  children: ReactNode
  spacing?: GridSpacing
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export function Inline({
  children,
  spacing = 2,
  align = 'flex-start',
}: InlineProps) {
  const realChildren = useMemo(
    () => Children.toArray(children).filter((child) => !!child),
    [children],
  )
  return (
    <Grid
      container
      spacing={spacing}
      direction='row'
      alignItems='center'
      justify={align}
    >
      {realChildren.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
