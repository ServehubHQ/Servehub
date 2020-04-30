import { ReactNode, useMemo, Children } from 'react'
import { Grid, GridSpacing } from '@material-ui/core'

interface StackProps {
  children: ReactNode
  spacing?: GridSpacing
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'
  className?: string
}

export function Stack({ children, spacing = 2, className, align }: StackProps) {
  const realChildren = useMemo(
    () => Children.toArray(children).filter((child) => !!child),
    [children],
  )
  return (
    <Grid
      container
      spacing={spacing}
      direction='column'
      className={className}
      alignItems={align}
    >
      {realChildren.map((child, index) => (
        <Grid item key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
