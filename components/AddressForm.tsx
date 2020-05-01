import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core'
import { FormContextValues } from 'react-hook-form'
import { Provinces_Enum } from '../graphql-codegen'

interface AddressFormData {
  street: string
  unit?: string | null
  postalCode: string
  city: string
  province: Provinces_Enum
}

interface AddressFormProps {
  register: FormContextValues<AddressFormData>['register']
  errors: FormContextValues<AddressFormData>['errors']
  watch: FormContextValues<AddressFormData>['watch']
}

function trueOrUndefined(value: any): boolean | undefined {
  const boolValue = Boolean(value)
  return boolValue || undefined
}

export function AddressForm({ register, errors, watch }: AddressFormProps) {
  const values = watch()
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
            InputLabelProps={{ shrink: trueOrUndefined(values.street) }}
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
            InputLabelProps={{ shrink: trueOrUndefined(values.unit) }}
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
        InputLabelProps={{ shrink: trueOrUndefined(values.postalCode) }}
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
            InputLabelProps={{ shrink: trueOrUndefined(values.city) }}
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
              <option value={Provinces_Enum.Nl}>
                Newfoundland and Labrador
              </option>
              <option value={Provinces_Enum.Pe}>Prince Edward Island</option>
              <option value={Provinces_Enum.Ns}>Nova Scotia</option>
              <option value={Provinces_Enum.Nb}>New Brunswick</option>
              <option value={Provinces_Enum.Qc}>Quebec</option>
              <option value={Provinces_Enum.On}>Ontario</option>
              <option value={Provinces_Enum.Mb}>Manitoba</option>
              <option value={Provinces_Enum.Sk}>Saskatchewan</option>
              <option value={Provinces_Enum.Ab}>Alberta</option>
              <option value={Provinces_Enum.Bc}>British Columbia</option>
              <option value={Provinces_Enum.Yt}>Yukon</option>
              <option value={Provinces_Enum.Nt}>Northwest Territories</option>
              <option value={Provinces_Enum.Nu}>Nunavut</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}
