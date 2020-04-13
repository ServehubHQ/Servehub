import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from '@material-ui/core'
import { ReactNode, FormEvent } from 'react'
import { useAuthRequired } from '../lib/useAuthRequired'
import { CreateJobSteps } from './CreateJobSteps'
import { Page, PageProps } from './Page'

interface CreateJobPageProps extends Partial<PageProps> {
  activeStep: number
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
  actions: {
    justifyContent: 'flex-end',
  },
}))

export function CreateJobPage({
  activeStep,
  onSubmit,
  children,
  ...pageProps
}: CreateJobPageProps) {
  useAuthRequired()
  const classNames = useStyles()

  return (
    <Page {...pageProps}>
      <form noValidate onSubmit={onSubmit}>
        <Card>
          <CardHeader
            title='Create Job'
            subheader={<CreateJobSteps activeStep={activeStep} />}
          />
          <Divider />
          <CardContent>{children}</CardContent>
          {onSubmit ? (
            <>
              <Divider />
              <CardActions className={classNames.actions}>
                <Button type='submit' variant='contained' color='primary'>
                  Next
                </Button>
              </CardActions>
            </>
          ) : null}
        </Card>
      </form>
    </Page>
  )
}
