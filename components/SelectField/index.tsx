import {
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  FormHelperText,
} from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'

interface SelectFieldProps extends SelectProps {
  label: string
  name: string
  control: Control
  rules: ControllerProps<typeof Select>['rules']
  helperText?: string
}

export function SelectField({
  label,
  name,
  control,
  helperText,
  ...selectProps
}: SelectFieldProps) {
  const labelRef = useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = useState(0)

  useEffect(() => {
    setLabelWidth(labelRef.current!.offsetWidth)
  }, [setLabelWidth, labelRef])

  return (
    <FormControl variant='filled' margin='normal' {...(selectProps as any)}>
      <InputLabel id={`${name}-label`} ref={labelRef}>
        {label}
      </InputLabel>
      <Controller
        as={Select}
        name={name}
        labelId={`${name}-label`}
        labelWidth={labelWidth}
        control={control}
        {...(selectProps as any)}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}
