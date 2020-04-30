import { ReactNode, useMemo, Children } from 'react'
import { Grid, GridSpacing } from '@material-ui/core'

interface StackProps {
  children: ReactNode
  spacing?: GridSpacing
  className?: string
}

export function Stack({ children, spacing = 2, className }: StackProps) {
  const realChildren = useMemo(
    () => Children.toArray(children).filter((child) => !!child),
    [children],
  )
  return (
    <Grid container spacing={spacing} direction='column' className={className}>
      {realChildren.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
