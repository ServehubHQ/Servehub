export function undefinedIfNull<T>(value: T | null): T | undefined {
  if (value === null) {
    return undefined
  } else {
    return value
  }
}
