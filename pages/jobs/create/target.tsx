import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import { CreateJobPage } from '../../../components/CreateJobPage'
import {
  useInsertTargetMutation,
  useSetJobTargetMutation,
} from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { TextField } from '@material-ui/core'

interface FormData {
  name: string
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

export default function JobsCreateTargetPage() {
  useAuthRequired()
  const router = useRouter()
  const [insertTarget] = useInsertTargetMutation()
  const [setJobTarget] = useSetJobTargetMutation()

  const { register, handleSubmit, errors, setError } = useForm<FormData>()

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      console.log('[handleFormValid]', formData)
      const { data: targetData } = await insertTarget({ variables: formData })

      const targetId = targetData?.insert_targets?.returning[0]?.id
      if (!targetId) {
        setError('name', 'An unknown error has accured')
        return
      }

      await setJobTarget({
        variables: {
          id: router.query.id,
          targetId,
        },
      })

      router.push(`/jobs/create/documents?id=${router.query.id}`)
    },
    [insertTarget, router, setError, setJobTarget],
  )

  return (
    <CreateJobPage onSubmit={handleSubmit(handleFormValid)} activeStep={0}>
      <TextField
        variant='filled'
        margin='normal'
        label='Full Name'
        name='name'
        required
        autoFocus
        fullWidth
        inputRef={register({ required: true })}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <AddressForm register={register} errors={errors} />
    </CreateJobPage>
  )
}
