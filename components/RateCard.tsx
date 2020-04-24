import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import {
  RateCardJobFragment,
  useInsertRatingMutation,
} from '../graphql-codegen'
import { Stack } from './Stack'

interface RateCardProps {
  job: RateCardJobFragment
  currentUserId: string
  onRated?: () => any
}

interface RatingData {
  rating: number | null
  comment: string | null
}

export function RateCard({ job, currentUserId, onRated }: RateCardProps) {
  const rating = useMemo(() => job.ratings[0], [job])
  const otherUser = useMemo(
    () => (job?.server?.id === currentUserId ? job.lawyer : job.server),
    [job, currentUserId],
  )
  const [insertRating] = useInsertRatingMutation()
  const { register, handleSubmit, errors, watch, setValue } = useForm<
    RatingData
  >()
  const ratingValue = watch('rating')

  useEffect(() => {
    register('rating', { required: true })
  }, [register])

  const handleRatingChange = useCallback(
    (event: ChangeEvent<{}>, ratingValue: number | null) => {
      setValue('rating', ratingValue)
    },
    [setValue],
  )

  const handleFormValid = useCallback(
    async (ratingData: RatingData) => {
      await insertRating({
        variables: {
          jobId: job.id,
          userId: otherUser?.id,
          ...ratingData,
        },
      })
      if (onRated) {
        onRated()
      }
    },
    [insertRating, job, otherUser, onRated],
  )

  if (!otherUser) {
    return <span />
  }

  return (
    <form onSubmit={handleSubmit(handleFormValid)}>
      <Card>
        <CardHeader title='Leave your feedback' />
        <Divider />
        {rating ? (
          <CardContent>
            <Stack>
              <Typography>You rated {otherUser.name}</Typography>
              <Rating value={rating.value} readOnly />
            </Stack>
          </CardContent>
        ) : (
          <>
            <CardContent>
              <Stack>
                <Typography>
                  How would you rate your experience with {otherUser.name}?
                </Typography>
                <FormControl variant='filled' error={Boolean(errors.rating)}>
                  <Rating
                    name='rating'
                    value={ratingValue || null}
                    onChange={handleRatingChange}
                  />
                  <FormHelperText>{errors.rating?.message}</FormHelperText>
                </FormControl>
                <TextField
                  variant='filled'
                  margin='normal'
                  label='Comment to Servehub Admins'
                  name='comment'
                  fullWidth
                  multiline
                  inputRef={register()}
                  error={Boolean(errors.comment)}
                  helperText={errors.comment?.message}
                />
              </Stack>
            </CardContent>
            <Divider />
            <CardActions>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </form>
  )
}
