export function timeout(length: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, length)
  })
}
