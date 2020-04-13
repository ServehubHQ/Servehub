import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core'
import { FormContextValues } from 'react-hook-form'

interface AddressFormData {
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

interface AddressFormProps {
  register: FormContextValues<AddressFormData>['register']
  errors: FormContextValues<AddressFormData>['errors']
}

export function AddressForm({ register, errors }: AddressFormProps) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <TextField
            variant='filled'
            margin='normal'
            required
            label='Street Address'
            name='street'
            fullWidth
            inputRef={register({ required: true })}
            error={Boolean(errors.street)}
            helperText={errors.street?.message}
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <TextField
            variant='filled'
            margin='normal'
            label='Unit'
            name='unit'
            fullWidth
            inputRef={register()}
            error={Boolean(errors.unit)}
            helperText={errors.unit?.message}
          />
        </Grid>
      </Grid>

      <TextField
        variant='filled'
        margin='normal'
        required
        label='Postal Code'
        name='postalCode'
        fullWidth
        inputRef={register({ required: true })}
        error={Boolean(errors.postalCode)}
        helperText={errors.postalCode?.message}
      />

      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <TextField
            variant='filled'
            margin='normal'
            required
            label='City'
            name='city'
            fullWidth
            inputRef={register({ required: true })}
            error={Boolean(errors.city)}
            helperText={errors.city?.message}
          />
        </Grid>

        <Grid item sm={4} xs={12}>
          <FormControl variant='filled' margin='normal' fullWidth>
            <InputLabel htmlFor='province'>Province</InputLabel>
            <Select
              native
              name='province'
              id='province'
              inputRef={register({ required: true })}
              required
              defaultValue='ON'
            >
              <option value='NL'>Newfoundland and Labrador</option>
              <option value='PE'>Prince Edward Island</option>
              <option value='NS'>Nova Scotia</option>
              <option value='NB'>New Brunswick</option>
              <option value='QC'>Quebec</option>
              <option value='ON'>Ontario</option>
              <option value='MB'>Manitoba</option>
              <option value='SK'>Saskatchewan</option>
              <option value='AB'>Alberta</option>
              <option value='BC'>British Columbia</option>
              <option value='YT'>Yukon</option>
              <option value='NT'>Northwest Territories</option>
              <option value='NU'>Nunavut</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}
