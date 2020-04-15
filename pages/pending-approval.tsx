import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { usePendingApprovalQuery } from '../graphql-codegen'
import { useAuth } from '../lib/useAuth'
import { useAuthRequired } from '../lib/useAuthRequired'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

export default function PendingApprovalPage() {
  useAuthRequired()
  const router = useRouter()
  const { userId } = useAuth()
  const { data } = usePendingApprovalQuery({
    variables: { userId },
  })

  useEffect(() => {
    if (data?.users[0].approved) {
      router.push('/jobs')
    }
  }, [router, data])

  return (
    <Page currentUser={data?.users[0]}>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <Heading title='Pending Approval' />
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>
                Please check your email for instructions on completing a
                background check.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  )
}
