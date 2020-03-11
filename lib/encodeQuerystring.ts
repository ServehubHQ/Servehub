export function encodeQuerystring(values: {
  [key: string]: string | string[]
}): string {
  return Object.entries(values)
    .reduce<string[]>((items, [key, value]) => {
      if (typeof value === 'string') {
        items.push(`${key}=${value}`)
      } else {
        for (const valueItem of value) {
          items.push(`${key}=${valueItem}`)
        }
      }
      return items
    }, [])
    .join('&')
}
