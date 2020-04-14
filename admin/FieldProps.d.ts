export interface FieldProps<
  T extends { [key: string]: undefined | string | number | boolean | Date }
> {
  source: keyof T
  record?: T
  label?: string
  addLabel?: boolean
}
