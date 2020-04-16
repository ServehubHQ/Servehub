import { ReactNode, useMemo, Children } from 'react'
import { Grid, GridSpacing } from '@material-ui/core'

interface StackProps {
  children: ReactNode
  spacing?: GridSpacing
}

export function Stack({ children, spacing = 2 }: StackProps) {
  const realChildren = useMemo(
    () => Children.toArray(children).filter((child) => !!child),
    [children],
  )
  return (
    <Grid container spacing={spacing} direction='column'>
      {realChildren.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
