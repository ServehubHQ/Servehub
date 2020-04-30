interface EncodeLocationOptions {
  street: string
  city: string
  postal_code: string
  province: string
}

export function encodeLocation({
  street,
  city,
  postal_code,
  province,
}: EncodeLocationOptions) {
  return encodeURIComponent(
    [
      street,
      // unit,
      city,
      postal_code,
      province,
      'CA',
    ].join(','),
  )
}
