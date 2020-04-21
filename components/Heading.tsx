import { Breadcrumbs, Grid, Typography } from '@material-ui/core'
import { ReactNode } from 'react'

interface HeadingProps {
  title: string | ReactNode
  breadcrumbs?: ReactNode
  action?: ReactNode
}

export function Heading({ title, breadcrumbs, action }: HeadingProps) {
  return (
    <Grid container justify='space-between'>
      <Grid item>
        {breadcrumbs ? (
          <Breadcrumbs aria-label='breadcrumb'>
            {breadcrumbs}
            <span />
          </Breadcrumbs>
        ) : null}
        <Typography component='h1' variant='h3'>
          {title}
        </Typography>
      </Grid>
      {action ? <Grid item>{action}</Grid> : null}
    </Grid>
  )
}
