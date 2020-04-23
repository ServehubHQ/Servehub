interface MoneyProps {
  cents: number
}

export function formatMoney(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}

export function Money({ cents }: MoneyProps) {
  return <>{formatMoney(cents)}</>
}
